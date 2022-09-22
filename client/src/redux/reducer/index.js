import { 
    GET_ALL_POKEMONS,
    GET_ALL_POKEMONS_NAMES,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    GET_TYPES,
    CREATE_POKEMON,
    DELETE_POKEMON,
    CLEAR_DETAILS
} from "../actions";

const initialState = {
    pokemons: [],
    pokemonDetails: {},
    filterPokemons:[],
    pokemonsNames:[],
    types: [],
    // error: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_ALL_POKEMONS_NAMES:
            return {
                ...state,
                pokemonsNames: action.payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonDetails: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                pokemonSearched: action.payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case CREATE_POKEMON:
            return{
                ...state,
                pokemons: state.pokemons.concat(action.payload)
            }
        case DELETE_POKEMON:
            return{
                ...state,
                pokemons: state.pokemons.filter((pokemon) => pokemon.id !== action.payload)
            }    
        case CLEAR_DETAILS:
            return{
                ...state,
                pokemonDetails: action.payload
            }
        // case ERROR:
        //     return{
        //         ...state,
        //         error: action.payload
        //     }
        default:
            return state
    }
}

export default rootReducer