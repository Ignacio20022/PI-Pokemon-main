import React from "react";
import { useParams } from "react-router-dom";
import * as actions from '../../redux/actions/index'
import * as ReactRedux from 'react-redux'
import { connect } from "react-redux";

export default function PokemonDetail(props){

    const {id} = useParams()
    
    let pokemon = ReactRedux.useSelector((state) => state.pokemonDetails)
    
    const dispatch = ReactRedux.useDispatch()
    
    
    React.useEffect(() => {
        dispatch(actions.getPokemonById(id))
        return () => {
            dispatch(actions.clearDetail())
        }
    },[])

    if(!Object.keys(pokemon).length){
        return(
            <div>
                <h1>cargando</h1>
            </div>
        )
    }
    else{

        
        return (
            <div>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <img src={pokemon.img} />
            <p>{pokemon.types?.map((type) => type + " ")}</p>
        </div>
        );
    }
    
};

