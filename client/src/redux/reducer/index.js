import { 
    GET_ALL_POKEMONS,
    GET_ALL_POKEMONS_NAMES,
    GET_POKEMON_BY_ID,
    // GET_POKEMON_BY_NAME,
    GET_TYPES,
    CREATE_POKEMON,
    DELETE_POKEMON,
    CLEAR_DETAILS,
    FILTER_POKEMONS,
    RESET_FILTERS
} from "../actions";

const initialState = {
    pokemons: [],
    pokemonDetails: {},
    filteredPokemons: [],
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
        // case GET_POKEMON_BY_NAME:
        //     return{
        //         ...state,
        //         filteredPokemons: [action.payload]
        //     }
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
                pokemonDetails: {}
            }
        case FILTER_POKEMONS:
            const {sortBy, API_or_DB, types} = action.payload

            let filtered = []

            // if(!state.filteredPokemons.length) filtered = state.pokemons.slice()
            // else filtered = state.filteredPokemons

            filtered = state.pokemons.slice()

            if(API_or_DB === 'API') filtered = state.pokemons.filter((pokemon) => pokemon.id < 20000)
            if(API_or_DB === 'DB') {
                filtered = filtered.filter((pokemon) => pokemon.id > 20000)
                if(!filtered.length) filtered[0] = 0
            }
            
            if(sortBy === "A-Z"){
                filtered.sort((a,b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase())return 1;
                    if(a.name.toLowerCase() < b.name.toLowerCase())return -1;
                    return 0;
                })
            }
            if (sortBy === "Z-A"){
                filtered.sort((a,b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase())return 1;
                    if(a.name.toLowerCase() > b.name.toLowerCase())return -1;
                    return 0;
                })
            }


            if(types !== 'default' && filtered[0] !== 0) {
                filtered = filtered.filter((pokemon) => pokemon.types.includes(types))
                if(!filtered.length) filtered[0] = 1
            }
            return{
                ...state,
                filteredPokemons: filtered
            }
        case RESET_FILTERS:
            return{
                ...state,
                filteredPokemons: []
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