import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx'
import PokemonDetails from './components/PokemonDetails/PokemonDetails.jsx'

import './App.css';
import NotFound from './components/NotFound/NotFound.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import NavbarNoSearch from './components/Navbar/NavbarWitoutSearchBar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {



    return (
        <div className="App">
            <Switch>
            <Route exact path='/'>
                <Landing />
            </Route>
            <Route exact path='/pokemons'>
                <Home />
            </Route>
            <Route exact path='/pokemons/details/:id'>                
                <NavbarNoSearch/>
                <PokemonDetails />
            </Route>
            {/* <Route exact path={`/pokemons?name=${name}`}>
                <PokemonDetails />
            </Route> */}
            <Route exact path='/pokemons/create'>
                <NavbarNoSearch/>
                <CreatePokemon />
            </Route>
            <Route exact path='/pokemon/delete/:id'>
                <NavbarNoSearch/>
                
            </Route>
            <Route path='*'>
                <NavbarNoSearch/>
                <NotFound />
            </Route>

            </Switch>
        </div>
    );
}

export default App;
