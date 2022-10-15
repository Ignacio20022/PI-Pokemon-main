import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/Landing.jsx'
import PokemonDetails from './components/PokemonDetails/PokemonDetails.jsx'

import './App.css';
import NotFound from './components/NotFound/NotFound.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import EditPokemon from './components/EditPokemon/EditPokemon.jsx'
import Navbar3 from './components/Navbar3.jsx';
import Login from './components/Login.jsx';


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = () => {
        fetch("https://pokemon-pi-ignacio.herokuapp.com/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
              console.log(resObject);
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, []);

    return (
        <div className="App">
        <BrowserRouter>
            <Switch>
                  <Navbar3 user={user} />

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
                <Router exact path='/pokemon/log'>
                </Router>
                <Router exact path='/pokemon/login'>
                    <Login/>
                </Router>
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
