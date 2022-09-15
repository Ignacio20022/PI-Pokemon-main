import style from './Landing.module.css'
import { Link } from 'react-router-dom'

export default function() {
    return(
        <div className={style.box}>
            <div>
            <h1>APi pokemon</h1>
            <Link to={"/pokemons"}>
                <button>Ingresar</button>

            </Link>
                
            </div>
        </div>
    )
}