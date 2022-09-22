import style from './Landing.module.css'
import { Link } from 'react-router-dom'
import * as actions from '../../redux/actions/index.js'
import { useDispatch } from 'react-redux'



export default function Landing() {
    const dispatch = useDispatch()

    const loadTypes = () => {
        dispatch(actions.getTypes())
    }

    return(
        <div className={style.box}>
            <div>
                <h1>Pokemon API</h1>
                <Link to={"/pokemons"}>
                    <button onClick={loadTypes}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}