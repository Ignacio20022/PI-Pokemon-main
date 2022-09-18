import { Link } from "react-router-dom";
import CreatePokemon from "../CreatePokemon/CreatePokemon";
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <>
            <div className={style.navbar}>
                <a href="/pokemons"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
                <a href="/pokemons/create"><i class="fa fa-fw fa-envelope"></i> Create</a>
            </div>
        </>
    )
}