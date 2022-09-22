import style from "./home.module.css";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonsCard/PokemonCard.jsx";
import * as actions from "../../redux/actions/index.js";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import Filters from "../Filters/Filters";

export default function Home() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);

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

    return (
        <>  
            {/* <div className={style.filters}>
                <Filters/>
            </div> */}
            <h1 className={style.title}>Pokemons</h1>
            <div className={style.home}>
                {currentPokemons?.map((pokemon) => {
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
            </div>
            <div className={style.pagination}>
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
