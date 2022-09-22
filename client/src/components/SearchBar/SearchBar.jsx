import React, {useState} from "react";

export default function SearchBar({search}){

    const [name, setName] = useState("");

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        search(name)
    }

    return(
        <form onSubmit={handleSubmit}>
           <input 
                // className={style.searchBar}
                type='text'
                placeholder="Search pokemons"
                onChange={handleName}
            />
        </form>
    )
}