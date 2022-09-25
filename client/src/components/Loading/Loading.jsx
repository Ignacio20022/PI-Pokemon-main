import React from "react";
import s from './Loading.module.css'
import loading from '../../Multimedia/pokeball_loading.gif'

export default function Loading(){
    return(
        <div className={s.loading}>
            <img src={loading}/>
        </div>
    )
}