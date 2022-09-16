import React from "react";
import * as ReactRedux from 'react-redux'
import * as actions from '../../redux/actions/index'


export default function CreatePokemon (){

    const dispatch = ReactRedux.useDispatch()

    const [state, setState] = React.useState({
        name: '',
        hp: 0,
        attk: 0,
        def: 0,
        speed: 0,
        height: 0,
        weight: 0,
        img: "",
        types:[1,2]
    })

    const handleInputs = (event) => {
        event.preventDefault()
        console.log(state);
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        console.log(state);
        event.preventDefault()
        dispatch(actions.createPokemon(state))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type='text' name="name" value={state.name} onChange={handleInputs} />
            <br></br>

            <label>Vida: </label>
            <input type='number' name="hp" value={state.hp} onChange={handleInputs} />
            <br></br>

            <label>Ataque: </label>
            <input type='number' name="attk" value={state.attk} onChange={handleInputs} />
            <br></br>

            <label>Defensa: </label>
            <input type='number' name="def" value={state.def} onChange={handleInputs} />
            <br></br>

            <label>Velocidad: </label>
            <input type='number' name="speed" value={state.speed} onChange={handleInputs} />
            <br></br>

            <label>Altura: </label>
            <input type='number' name="height" value={state.height} onChange={handleInputs} />
            <br></br>

            <label>Peso: </label>
            <input type='number' name="weight" value={state.weight} onChange={handleInputs} />
            <br></br>

            <label>Imagen: </label>
            <input type='text' name="img" value={state.img} onChange={handleInputs} />
            <br></br>

            <button type="submit">Crear pokemon </button>

        </form>
    )

}