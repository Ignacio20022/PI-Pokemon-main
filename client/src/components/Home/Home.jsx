import style from './home.module.css'
import React, { Component } from "react";
import PokemonCard from '../PokemonsCard/PokemonCard.jsx'
import * as actions from '../../redux/actions/index.js'

import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

export class Home extends Component{
    componentDidMount(){
        this.props.getAllPokemons()
        // if(!this.props.getAllPokemons()) return <Redirect to='/404' />
    }

    render() {
        return(
            <div>
                <h1>Pokemons</h1>

                {this.props.pokemons?.map((pokemon) => {
                    return(
                        <div className={style.home}>

                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            types={pokemon.types}
                            img={pokemon.img}
                        />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export const mapStateToProps = (state) =>{
    return{
        pokemons: state.pokemons
    }
}

export const mapDispatchToProps = (dispatch)=>{
    return{
        getAllPokemons: () => dispatch(actions.getAllPokemons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);