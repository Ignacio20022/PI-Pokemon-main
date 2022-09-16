import style from './PokemonCard.module.css'

import React from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../redux/actions/index.js'

export default function PokemonCard(props){

    return(
        <Link to={`/pokemons/${props.id}`}>
            <div className={style.box}>
                <img src={props.img}/>
                <p>Nombre {props.name}</p>
                <p>ID {props.id}</p>
                <p>Tipos {props.types?.map((type) => type + " ")}</p>
            </div>

        </Link>
    )
}

