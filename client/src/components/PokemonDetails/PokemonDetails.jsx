import React from "react";
import { useParams } from "react-router-dom";
import * as actions from '../../redux/actions/index'
import * as ReactRedux from 'react-redux'
import { connect } from "react-redux";

export const mapStateToProps = (state) =>{
    return{
        pokemonDetail: state.pokemonDetail
    }
}

export const mapDispatchToProps = (dispatch)=>{
    return{
        getPokemonById: (id) => dispatch(actions.getPokemonById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);


export function PokemonDetail(props){

    const {id, name} = useParams()

    const dispatch = ReactRedux.useDispatch()
    
    React.useEffect(() => {
        dispatch(actions.getPokemonById(id))
    },[dispatch, id])
    
    const pokemon = ReactRedux.useSelector((state) => state.pokemonDetails)

    return (
        <div>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <img src={pokemon.img} />
            <p>{pokemon.types?.map((type) => type + " ")}</p>
        </div>
    );
};

