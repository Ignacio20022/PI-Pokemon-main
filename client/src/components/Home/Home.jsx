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
    const types = useSelector((state) => state.types)

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    if (search.length > 0) {
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
        dispatch(actions.getTypes())
    }, [dispatch, pokemons.length]);

    useEffect(() => {});

    if (!pokemons.length && search === "") {
        return (
            <div>
                <h1>cargando</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar search={setSearch} pag={setCurrentPage} />
            <select >
                <option hidden >Sort by...</option>
                <option>A-Z</option>
                <option>Z-A</option>
                
            </select>
            <select>
            <option hidden>Types</option>
            {types.map((type, index) => {
                return(
                    <option key={index}>
                        {type.name}
                    </option>
                )
            })}
            </select>
            <h1 className={style.title}>Pokemons</h1>
            <div className={style.home}>

                {pokemons.length && currentPokemons.length ? (
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
                ) : (
                    <h1>No se encontro el pokemon</h1>
                )}
                <Pagination
                    totalPosts={pokemons.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
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
