import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_ALL_POKEMONS_NAMES = "GET_ALL_POKEMONS_NAMES"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_TYPES = "GET_TYPES"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const DELETE_POKEMON = "DELETE_POKEMON"
export const CLEAR_DETAILS = "CLEAR_DETAILS" 
export const FILTER_POKEMONS = "FILTER_POKEMONS"
export const RESET_FILTERS = "RESET_FILTERS"

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

export const getAllNames = () => {
    return async function(dispatch){
        await axios.get(`/pokemons/names`)
        .then((pokemonNames) => {
            dispatch({
                type: GET_ALL_POKEMONS_NAMES,
                payload: pokemonNames.data
            })
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
        await axios.post(`/pokemons/create`,{data})
        .catch((error) => {
            console.log(error);
        })
    }
}
export const clearDetail = () => {
    return {
        type: CLEAR_DETAILS
    }
}

export const filterPokemons = (filters) => {
    return function(dispatch){
        dispatch({
            type: FILTER_POKEMONS,
            payload: filters
        })
    }
}

export const resetFilters = () => {
    return function(dispatch){
        dispatch({
            type: RESET_FILTERS,
        })
    }
}


export const deletePokemon = (id) => {
    return async function(){
        await axios.delete(`/pokemons/delete/${id}`)
        .catch((error) => {
            console.log(error);
        })
    }
}