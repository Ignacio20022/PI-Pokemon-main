import style from './PokemonCard.module.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard(props){

    return(
        <div className={style.box} key={props.id}>
            <div className={style.select}>
            <Link to={`/pokemons/details/${props.id}`} className={style.link}>
                <h1 className={style.nombre}>{props.name}</h1>
                <div>
                    <h3 className={style.types}>{props.types?.map((type) => type + " ")}</h3>
                    <img id={style.img} src={props.img} alt='Pokemon'/>
                </div>
            </Link>
            </div>
        </div>
    )
}

