import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import * as ReactRedux from "react-redux";

import style from "./PokemonDetails.module.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import NavbarNoSearch from "../Navbar/Navbar";

export default function PokemonDetail(props) {
    let { id } = useParams();

    const pokemon = ReactRedux.useSelector((state) => state.pokemonDetails);
    const error = ReactRedux.useSelector((state) => state.error)
    const dispatch = ReactRedux.useDispatch();

    useEffect(() => {
        dispatch(actions.clearError())
        dispatch(actions.getPokemonById(id));
        return () => {
            dispatch(actions.clearDetail());
        };
    }, [dispatch, id]);

    id = parseInt(id)

    const handleDelete = (event) => {
        dispatch(actions.deletePokemon(pokemon.id))
        alert("pokemon delete succesfully")
    }

    //check if there was an error
    if (error) {
        return <Error/>
    }
    else if (!Object.keys(pokemon).length){
        return (
            <Loading/>
        )
    }
    else {
        return (
            <>
            <NavbarNoSearch/>
            <div className={style.details}>
                <h2>{pokemon.id}</h2>
                <h1>{pokemon.name.toUpperCase()}</h1>
                <img src={pokemon.img} alt='imagen pokemon' />
                <h4>
                    Type(s) <br></br>
                    {"\n" + pokemon.types?.map((type) => type.toUpperCase())}
                </h4>
                <h4>
                    Stats <br></br> 
                    HP: {pokemon.hp > 1 ? pokemon.hp : 'Unknown'}{" - "} 
                    ATTK: {pokemon.attk > 1 ? pokemon.attk : 'Unknown'}{" - "}
                    DEF:{pokemon.def > 1 ? pokemon.def : 'Unknown'}
                    <br></br> 
                    SPEED: {pokemon.speed > 1 ? pokemon.speed : 'Unknown'}{" - "}
                    HEIGHT:{pokemon.height > 1 ? pokemon.height : 'Unknown'}{" - "}
                    WEIGHT: {pokemon.weight > 1 ? pokemon.weight : 'Unknown'}
                </h4>
                <br></br>
                <button hidden={pokemon.id < 20000} onClick={handleDelete}>Delete Pokemon</button>
            </div>
            </>
        );
    }
}
