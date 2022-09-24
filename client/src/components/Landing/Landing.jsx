import style from './Landing.module.css'
import { Link } from 'react-router-dom'

export default function Landing() {

    return(
        <div className={style.box}>
            <div>
                <h1>Pokemon API</h1>
                <Link to={"/pokemons"}>
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}