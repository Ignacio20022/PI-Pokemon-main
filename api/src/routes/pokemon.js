const { Router } = require('express');
const { Pokemon } = require('../db');
const {getPokemons, getSinglePokemon, autoIncrementId} = require('./utils');
const router = Router();

// Retorna un arreglo de objetos con los datos de cada pokemon en la direccion '/pokemon'
router.get('/', async(req,res) => {
    // Para diferenciar si el usuario queire todos los pokemons o uno mandado por query
    const {name} = req.query
    // Si name = NULL entro solo a /pokemon
    if(!name){   
        try {
            const allPokes = await getPokemons()
            res.status(200).send(allPokes)
        } catch (error) {
            console.log(error);
        }
    }
    // En cambio si existe name el usuario busco por query
    else{
        try {
            const poke = await getSinglePokemon(null, name)
            res.status(200).send(poke)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    
})

//! Creacion bulk de pokemons para tests manuales
router.post('/bulkcreate', (req,res) => {

    const {id, name} = req.body

    // if(id) throw ('No debes enviar una id')

    // if(!name) throw ('Debes agregar un nombre')
    
    // req.body.id = autoIncrementId().next().value
    
    req.body.forEach(element => {
        element.id = autoIncrementId().next().value
        Pokemon.create(element)
    });
    return res.send('ok')
})

router.get('/')

router.get('/:idPokemon', async(req,res) => {
    let {idPokemon} = req.params
    idPokemon = parseInt(idPokemon)

    if(isNaN(idPokemon)) throw ('Debes ingresar un numero')

    try {
        const poke = await getSinglePokemon(idPokemon, null)
        res.status(200).send(poke)
    } catch (error) {
        res.status(404).json(error)
    }
})


module.exports = router;