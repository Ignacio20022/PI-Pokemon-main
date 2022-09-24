import style from "./home.module.css";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonsCard/PokemonCard.jsx";
import * as actions from "../../redux/actions/index.js";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Navbar from "../Navbar/Navbar";

export default function Home() {
    const dispatch = useDispatch();

    let pokemons = useSelector((state) => state.pokemons);
    const filteredPokemons = useSelector((state) => state.filteredPokemons);
    const types = useSelector((state) => state.types);

    const [search, setSearch] = useState("");

    // const [, updateState] = useState();
    // const forceUpdate = useCallback(() => updateState({}), []);

    const [filters, setFilters] = useState({
        sortBy: "default",
        API_or_DB: "default",
        types: "default",
    });

    // const handleFiltersSort = (event) => {
    //     event.preventDefault()
    //     setFilters({
    //         ...filters,
    //         [event.target.name]: event.target.value
    //     })
    //     setCurrentPage(1)
    //     dispatch(actions.filterPokemons(event.target.value))
    // }

    // const handleFiltersAPI_DB = (event) => {
    //     event.preventDefault()
    //     setFilters({
    //         ...filters,
    //         [event.target.name]: event.target.value
    //     })
    //     setCurrentPage(1)
    //     dispatch(actions.filterPokemons(event.target.value))
    // }

    const handleAllFilters = (event) => {
        // event.preventDefault()
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
        setCurrentPage(1);
    };
    useEffect(() => {
        dispatch(actions.filterPokemons(filters));
    }, [filters]);

    const resetFilters = (event) => {
        event.preventDefault();
        setFilters({
            sortBy: "default",
            API_or_DB: "default",
            types: "default",
        });
        setCurrentPage(1);
        // setSearch("")
        dispatch(actions.resetFilters());
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    const [pageLimit, setPageLimit] = useState(10);
    const [maxLimit, setMaxLimit] = useState(10);
    const [minLimit, setMinLimit] = useState(0);

    if (filteredPokemons.length > 0) pokemons = filteredPokemons;

    if (search.length > 0 && ( pokemons[0] !== 0 && pokemons[0] !== 1)) {
        pokemons = pokemons.filter((pokemon) => {
            if (
                pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
                pokemon.name.includes(search)
            )
                return pokemon;
        });
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPokemons = pokemons.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        if (!pokemons.length) dispatch(actions.getAllPokemons());
        dispatch(actions.getTypes());
    }, [dispatch, pokemons.length]);

    if (!pokemons.length && search === "") {
        return (
            <div>
                <h1>cargando</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar
                postsPerPage={setPostsPerPage}
                setSearch={setSearch}
                pag={setCurrentPage}
                search={search}
            />

            <div className={style.sortsContainer}>
                <select
                    name='sortBy'
                    value={filters.sortBy}
                    className={style.sorts}
                    onChange={handleAllFilters}
                >
                    <option hidden value='default'>
                        Sort by...
                    </option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>

                <select
                    name='API_or_DB'
                    value={filters.API_or_DB}
                    className={style.pokesFrom}
                    onChange={handleAllFilters}
                >
                    <option hidden value='default'>
                        Show pokemons from...
                    </option>
                    <option value='API'>Poke API</option>
                    <option value='DB'>Data Base</option>
                </select>

                <select
                    name='types'
                    value={filters.types}
                    className={style.sorts}
                    onChange={handleAllFilters}
                >
                    <option hidden value='default'>
                        Types...
                    </option>
                    {types.map((type, index) => {
                        return (
                            <option key={index} value={type.name}>
                                {type.name}
                            </option>
                        );
                    })}
                </select>
                <br></br>

                <button onClick={resetFilters}>Reset filters</button>
            </div>
            <h1 className={style.title}>Pokemons</h1>
            <div className={style.home}>
                {currentPokemons[0] !== 0 &&
                currentPokemons[0] !== 1 ? (
                    currentPokemons.map((pokemon) => {
                        return (
                            <PokemonCard
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                types={pokemon.types}
                                img={pokemon.img}
                            />
                            

                        );
                    })
                    
                ) : (currentPokemons[0] === 0 ? (
                    <h1>There are no Pokemons in the Data Base </h1>
                ) : (
                    <h1>No Pokemon exist with that type</h1>
                    
                ))}

                <Pagination
                    totalPosts={pokemons.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}

                    maxLimit={maxLimit}
                    setMaxLimit={setMaxLimit}
                    minLimit={minLimit}
                    setMinLimit={setMinLimit}
                    pageLimit={pageLimit}
                    setPageLimit={setPageLimit}
                />

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}
