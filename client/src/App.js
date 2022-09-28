import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx'
import PokemonDetails from './components/PokemonDetails/PokemonDetails.jsx'

import './App.css';
import NotFound from './components/NotFound/NotFound.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import EditPokemon from './components/EditPokemon/EditPokemon.jsx'

function App() {

    return (
        <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route exact path='/pokemons'>
                    <Home />
                </Route>
                <Route exact path='/pokemons/details/:id'>                
                    <PokemonDetails />
                </Route>
                {/* <Route exact path={`/pokemons?name=${name}`}>
                    <PokemonDetails />
                </Route> */}
                <Route exact path='/pokemons/create'>
                    <CreatePokemon />
                </Route>
                <Route exact path='/pokemons/edit/:id'>
                    <EditPokemon />
                </Route>
                <Route exact path='/pokemon/delete/:id'>
                    <Navbar/>
                </Route>
                <Route path='*'>
                    <Navbar/>
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>

        </div>
    );
}

export default App;
