import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from './Navbar.module.css'

export default function Navbar({search}){
    return(
        <>  
            <div className={style.navbar}>
                <Link to='/pokemons' className={style.link}>
                    <span className={style.home}>Home</span>
                </Link>
                <SearchBar search={search}/>
                <Link to='/pokemons/create' className={style.link}>
                    <span className={style.create}>Create</span>
                </Link>
            </div>
        </>
    )
}