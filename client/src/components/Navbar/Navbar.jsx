import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar(){
    return(
        <>  
            <div className={style.navbar}>
                <Link to='/pokemons' className={style.link}>
                    <span className={style.home}>Home</span>
                </Link>
                {/* <a href="#"> Search</a> */}
                <Link to='/pokemons/create' className={style.link}>
                    <span className={style.create}>Create</span>
                </Link>
            </div>
        </>
    )
}