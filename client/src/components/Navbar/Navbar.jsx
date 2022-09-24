import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import style from './Navbar.module.css'

export default function Navbar({postsPerPage, setSearch, pag, search}){

    const handleChange = (event) => {
        event.preventDefault()
        pag(1)
        postsPerPage(event.target.value)
    }

    return(
        <>  
            <div className={style.navbar}>
                <Link to='/pokemons' className={style.link}>
                    <span className={style.home}>Home</span>
                </Link>
                <div className={style.selector}>
                    <label>Pokemons to show <br></br>per page: </label>
                    <select defaultValue={12} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={12}>12</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div className={style.searchbar}>
                    <SearchBar setSearch={setSearch} pag={pag} search={search}/>
                </div>
                <Link to='/pokemons/create' className={style.link}>
                    <span className={style.create}>Create</span>
                </Link>
            </div>
        </>
    )
}