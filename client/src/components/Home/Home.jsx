import style from "./home.module.css";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonsCard/PokemonCard.jsx";
import * as actions from "../../redux/actions/index.js";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Navbar from "../Navbar/HomeNavbar";
import Loading from "../Loading/Loading";
import Error from '../Error/Error'
import SadPikachu from '../../assets/sad_pikachu.png'

export default function Home() {
    const dispatch = useDispatch();

    let pokemons = useSelector((state) => state.pokemons);
    const filteredPokemons = useSelector((state) => state.filteredPokemons);
    const types = useSelector((state) => state.types);
    const error = useSelector((state) => state.error)

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        sortBy: "default",
        API_or_DB: "default",
        types: "default",
    })

    const handleAllFilters = (event) => {
        event.preventDefault();
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
        setCurrentPage(1);
        setMinLimit(0);
        setMaxLimit(10);
    };
    useEffect(() => {
        dispatch(actions.filterPokemons(filters));
    }, [dispatch, filters]);

    const resetFilters = (event) => {
        event.preventDefault();
        setFilters({
            sortBy: "default",
            API_or_DB: "default",
            types: "default",
        });
        setSearch("");
        setCurrentPage(1);
        setMinLimit(0);
        setMaxLimit(10);
        dispatch(actions.resetFilters());
    };

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    const [pageLimit, setPageLimit] = useState(10);
    const [maxLimit, setMaxLimit] = useState(10);
    const [minLimit, setMinLimit] = useState(0);

    if (filteredPokemons.length > 0) pokemons = filteredPokemons;



    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    useEffect(() => {
        dispatch(actions.clearError())
        if(!pokemons.length) dispatch(actions.getAllPokemons());
        if(!types.length) dispatch(actions.getTypes());
    }, [dispatch, pokemons.length, types.length]);
    

    //check if there was an error
    if(error){
        return <Error/>
    }
    else if (!pokemons.length && search === "" && error === false) {
        return <Loading />;
    }

    let mainComponent = null

    if (search.length > 0 && pokemons[0] !== 'inexistent DB' && pokemons[0] !== 'inexistent type') {
        pokemons = pokemons.filter((pokemon) => {
            if (
                pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
                pokemon.name.includes(search)
            )
                return pokemon;
            else return null
        });
    }

    //pagination
    const currentPokemons = pokemons.slice(firstPostIndex, lastPostIndex);

    if (currentPokemons.length && currentPokemons[0] !== 'inexistent DB' && currentPokemons[0] !== 'inexistent type') { 
        mainComponent = 
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
    } 
    else if (currentPokemons.length && currentPokemons[0] === 'inexistent DB')
        mainComponent = 
            <>
                <h1>There are no Pokemons in the Data Base </h1> 
                <img className={style.sadPoke} src={SadPikachu} alt='pikachu sad'/>
            </>
    else if(currentPokemons.length && currentPokemons[0] === 'inexistent type') {
        mainComponent = 
            <>
                <h1>No Pokemon exist with that type</h1>
                <img className={style.sadPoke} src={SadPikachu} alt='pikachu sad'/>
            </>
    }
    else{
        mainComponent = 
            <>
                <h1>No pokemon has '{search}' in their name</h1>
                <img className={style.sadPoke} src={SadPikachu} alt='pikachu sad'/>
            </>
    }
    
    
    const filtersButtons = (
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
                {/* <option value='default'>By default</option> */}
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
                {/* <option value='default'> By default</option> */}
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
                {/* <option value='default'>By default</option> */}
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
    );

    return (
        <div>
            <Navbar
                search={search}
                setSearch={setSearch}
                setPostsPerPage={setPostsPerPage}
                setCurrentPage={setCurrentPage}
                setMaxLimit={setMaxLimit}
                setMinLimit={setMinLimit}
                setPageLimit={setPageLimit}
            />

            {filtersButtons}

            <h1 className={style.title}>Pokemons</h1>

            <div className={style.home}>

                {mainComponent}

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
        </div>
    );
}
