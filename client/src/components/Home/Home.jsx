import style from "./home.module.css";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonsCard/PokemonCard.jsx";
import * as actions from "../../redux/actions/index.js";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import PokemonDetail from "../PokemonDetails/PokemonDetails";
import NavbarNoSearch from "../Navbar/NavbarWitoutSearchBar";

export default function Home() {
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemons);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPokemons = pokemons.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        if (!pokemons.length) dispatch(actions.getAllPokemons());
    }, [dispatch, pokemons.length]);

    if (!pokemons.length) {
        return (
            <div>
                <h1>cargando</h1>
            </div>
        );
    }

    let poke = pokemons.filter((pokemon) => pokemon.name.includes(search))
    
    if(!poke.length && search!== ''){
        return(
            <div>
                <Navbar search={setSearch}/>
                <h1>No hay pokes</h1>
            </div>
        )
    }
    
    return (
        <>
            <Navbar search={setSearch} />
            {/* <div className={style.filters}>
                <Filters/>
            </div> */}
            <h1 className={style.title}>Pokemons</h1>
            <div className={style.home}>
                {search.length > 0 &&
                    pokemons
                        ?.filter((pokemon, index) => {
                            if (
                                pokemon.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                                return pokemon;
                        })
                        .map((pokemon) => {
                            return (
                                <PokemonCard
                                    key={pokemon.id}
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    types={pokemon.types}
                                    img={pokemon.img}
                                />
                            );
                        })}

                {search.length === 0 &&
                    currentPokemons?.map((pokemon) => {
                        return (
                            <>
                                <PokemonCard
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    types={pokemon.types}
                                    img={pokemon.img}
                                />
                                <Pagination
                                    totalPosts={pokemons.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            </>
                        );
                    })}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <button onClick={() => setPostsPerPage(15)}>dsa</button> */}
        </>
    );
}
