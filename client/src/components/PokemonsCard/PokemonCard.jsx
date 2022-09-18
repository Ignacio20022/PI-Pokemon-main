import style from './PokemonCard.module.css'

import React from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../redux/actions/index.js'

export default function PokemonCard(props){

    return(
        <div className={style.box}>
            <div className={style.select}>

            <Link to={`/pokemons/details/${props.id}`} className={style.link}>
                <h1 className={style.nombre}>{props.name}</h1>
                <div>
                    <p>ID {props.id}</p>
                    <h3 className={style.types}>{props.types?.map((type) => type + " ")}</h3>
                    <img id={style.img} src={props.img}/>
                </div>
            </Link>
            </div>
        </div>
    )
}

