import assert from 'assert'
import axios from 'axios'
import dotenv from 'dotenv'
import { Redirect } from 'react-router-dom'
dotenv.config()


export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_TYPES = "GET_TYPES"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const DELETE_POKEMON = "DELETE_POKEMON"
export const CLEAR_DETAILS = "CLEAR_DETAILS" 

const {REACT_APP_BACKEND_URL} = process.env

export const getAllPokemons = () => {
    return async function(dispatch){
        await axios.get(`/pokemons`)
        .then((pokemon) => {
            dispatch({
                type: GET_ALL_POKEMONS, 
                payload: pokemon.data
            })
        })
        .catch((error) => { 
            console.log(error);
        })

    }
}

export const getPokemonById = (id) => {
    return async function(dispatch){
        await axios.get(`/pokemons/details/${id}`)
        .then((pokemon) => {
            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: pokemon.data
            })
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}

export const getPokemonByName = (name) => {
    return async function(dispatch){
        await axios.get(`/pokemons?name=${name}`)
        .then((pokemon) => {
            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: pokemon.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const getTypes = () => {
    return async function(dispatch){
        await axios.get(`/types`)
        .then((pokemonsType) => {
            dispatch({
                type: GET_TYPES,
                payload: pokemonsType.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const createPokemon = (data) => {
    return async function(){
        console.log('hola');
        console.log(data);
        await axios.post(`/pokemons/create`,{data})
        .catch((error) => {
            console.log('chau');
            console.log(error);
        })
    }
}
export const clearDetail = () => {
    return {
        type: CLEAR_DETAILS,
        payload: {}
    }
}
// export const deletePokemon = (id) => {
//     return async function(){
//         await axios.delete(`/pokemons/delete/${id}`)
//         .catch((error) => {
//             console.log(error);
//         })
//     }
// }