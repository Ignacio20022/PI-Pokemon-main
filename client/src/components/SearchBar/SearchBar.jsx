import React from "react";
// import { useDispatch } from "react-redux";
// import * as actions from '../../redux/actions/index.js'

import s from './SearchBar.module.css'

export default function SearchBar({setSearch, pag, search}){

    // const dispatch = useDispatch()
    // const [name, setName] = useState("");

    const handleName = (event) => {
        event.preventDefault()
        // setName(event.target.value)
        pag(1)
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // dispatch(actions.getPokemonByName(name))
        // search(name)
    }

    return(
        <form className={s.search} onSubmit={handleSubmit}>
           <input 
                // className={style.searchBar}
                type='text'
                placeholder="Search pokemons"
                onChange={handleName}
                value={search}
            />
        </form>
    )
}