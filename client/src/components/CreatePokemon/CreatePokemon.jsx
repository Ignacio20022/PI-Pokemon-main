import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";

import style from "./CreatePokemon.module.css";
import validate from "./Validators";

export default function CreatePokemon() {
    const dispatch = useDispatch();

    let types = useSelector((state) => state.types);
    useEffect(() => {
        if (!types.length) dispatch(actions.getTypes());
    }, [dispatch, types.length]);

    console.log(types);

    const [errors, setErrors] = useState({});

    const [state, setState] = useState({
        name: "",
        hp: 0,
        attk: 0,
        def: 0,
        speed: 0,
        height: 0,
        weight: 0,
        img: "",
        types: [],
    });

    const handleInputs = (event) => {
        const { name, value, checked, id } = event.target;

        if (name === "types") {
            types[id].isChecked = checked;
            if (checked) {
                setState({
                    ...state,
                    types: state.types.concat(value),
                });
            } else if (!checked) {
                setState({
                    ...state,
                    types: state.types.filter((i) => i !== value),
                });
            }
        } else {
            setState((oldData) => {
                const newData = { ...oldData, [name]: value };

                setErrors(validate(newData));

                console.log(errors);

                // return newData
                return newData;
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) dispatch(actions.createPokemon(state));
        else alert("no se puede");
    };
    console.log(state);

    return (
        <div className={style.box}>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <label>Nombre: </label>
                    <input
                        className={errors.name && "danger"}
                        type='text'
                        name='name'
                        value={state.name}
                        onChange={handleInputs}
                    />
                    <p className='danger'>{errors.name}</p>
                    <br></br>

                    <label>Vida: </label>
                    <input
                        type='number'
                        name='hp'
                        value={state.hp}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Ataque: </label>
                    <input
                        type='number'
                        name='attk'
                        value={state.attk}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Defensa: </label>
                    <input
                        type='number'
                        name='def'
                        value={state.def}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Velocidad: </label>
                    <input
                        type='number'
                        name='speed'
                        value={state.speed}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Altura: </label>
                    <input
                        type='number'
                        name='height'
                        value={state.height}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Peso: </label>
                    <input
                        type='number'
                        name='weight'
                        value={state.weight}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <label>Imagen: </label>
                    <input
                        type='text'
                        name='img'
                        value={state.img}
                        onChange={handleInputs}
                    />
                    <br></br>

                    <button type='submit'>Crear pokemon </button>
                </form>
            </div>

            <div className={style.types}>
                <ul className={style.lista}>
                    {types?.map((type, index) => (
                        <li className={style.lista2} key={type.id}>
                            <div>
                                <input
                                    type='checkbox'
                                    id={index}
                                    name='types'
                                    value={type.id}
                                    checked={type.isChecked}
                                    onChange={handleInputs}
                                />
                                <label htmlFor={`custom-checkbox-${types.id}`}>
                                    {type.name}
                                </label>
                                <br></br>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
