import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import NavbarNoSearch from "../Navbar/Navbar";

import style from "./CreatePokemon.module.css";
import { validateInputs } from "./Validators";

export default function CreatePokemon() {

    const error = useSelector((state) => state.error)

    const dispatch = useDispatch();

    const types = useSelector((state) => state.types);
    const pokemonsNames = useSelector((state) => state.pokemonsNames);

    useEffect(() => {
        dispatch(actions.clearError())
        if (!types.length) dispatch(actions.getTypes());
        if (!pokemonsNames.length) dispatch(actions.getAllNames());
    }, [dispatch, types.length, pokemonsNames.length]);

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
                setState((oldData) => {
                    const newData = {
                        ...oldData,
                        types: state.types.concat(value),
                    };

                    setErrors(validateInputs(newData, pokemonsNames));

                    return newData;
                });
            } else if (!checked) {
                setState((oldData) => {
                    const newData = {
                        ...oldData,
                        types: state.types.filter((i) => i !== value),
                    };

                    setErrors(validateInputs(newData, pokemonsNames));

                    return newData;
                });
            }
        } else {
            setState((oldData) => {
                const newData = { ...oldData, [name]: value };

                setErrors(validateInputs(newData, pokemonsNames));

                return newData;
            });
        }
    };

    const handleSubmit = (event) => {
        if (!Object.keys(errors).length) {
            dispatch(actions.createPokemon(state));

            alert("Pokemon creado con exito");
        } else
            alert(`Please, check " ${Object.keys(errors)} " before submiting`);
    };

    if(error){
        return <Error/>
    }
    else if(!types.length || !pokemonsNames.length){
        return <Loading/>
    }
    else{
        return (
            <>
            <NavbarNoSearch/>
            <div className={style.box}>
                <div className={style.form}>
                    <h4>Name and stats</h4>
                    <form className={style.form2}
                        onSubmit={handleSubmit}
                        autoComplete='off'
                        spellCheck="false"
                    >
                    <div>
                        <div>
                            <label>Name: </label>
                            <input
                                type='text'
                                name='name'
                                value={state.name}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.name}</label>
                        </div>

                        <div>
                            <label>Health: </label>
                            <input
                                type='number'
                                name='hp'
                                value={state.hp}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.hp}</label>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Attack: </label>
                            <input
                                type='number'
                                name='attk'
                                value={state.attk}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.attk}</label>
                        </div>

                        <div>
                            <label>Defense: </label>
                            <input
                                type='number'
                                name='def'
                                value={state.def}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.def}</label>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Speed: </label>
                            <input
                                type='number'
                                name='speed'
                                value={state.speed}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.speed}</label>
                        </div>

                        <div>
                            <label>Height: </label>
                            <input
                                type='number'
                                name='height'
                                value={state.height}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.height}</label>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>weight: </label>
                            <input
                                type='number'
                                name='weight'
                                value={state.weight}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.weight}</label>
                        </div>

                        <div>
                            <label>Image: (url)</label>
 
                            <input
                                type='text'
                                name='img'
                                value={state.img}
                                onChange={handleInputs}
                            />
                            <label className={style.errors}>{errors.img}</label>
                        </div>
                    </div>


                        <button
                            className={style.button}
                            type='submit'
                            disabled={
                                Object.keys(errors).length || state.name === ""
                            }
                        >
                            Create Pokemon
                        </button>
                    </form>
                </div>

                <div className={style.types}>
                    <h4>Types</h4>
                    <ul>
                        {types?.map((type, index) => (
                            <li className={style.lista2} key={type.id}>
                                    <input
                                        key={index}
                                        type='checkbox'
                                        id={index}
                                        name='types'
                                        value={type.id}
                                        checked={type.isChecked}
                                        onChange={handleInputs}
                                        disabled={
                                            state.types.length > 1 &&
                                            type.isChecked === false
                                        }
                                    />
                                    <label htmlFor={`custom-checkbox-${types.id}`}>
                                        {type.name}
                                    </label>
                                    <br></br>
                            </li>
                        ))}
                    </ul>
                    <p>{errors.types}</p>
                </div>
            </div>
            </>
        );
    }
}
