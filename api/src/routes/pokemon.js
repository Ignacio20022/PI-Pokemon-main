const { Router } = require('express');
const { Pokemon, Type } = require('../db');
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
            res.status(404).send(error)
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

router.post('/', async(req, res) => {
    const {id, name} = req.body.pokemon
    const {types} = req.body
    
    // if(!req.body.img) req.body.img = "https://i.ytimg.com/vi/_jHaJ2sRlmo/maxresdefault.jpg"
    
    try {    
        if(id) throw ('No debes enviar una id')
        if(!name) throw ('Debes agregar un nombre')
        if(types[2]) throw ('Un pokemon no puede contener 3 tipos')
        
        req.body.pokemon.id = autoIncrementId().next().value    
        
        const poke = await Pokemon.create(req.body.pokemon)
        if(poke) await poke.addTypes(types)

        res.status(201).send(await Pokemon.findByPk(req.body.pokemon.id, {
            include: [{
                model: Type,
                attributes: ['name'],
                through: {
                  attributes: []
                }
              }]
        }))
    } catch (error) {
        res.status(400).send({error})
    }
})

//! Creacion bulk de pokemons para tests manuales
router.post('/bulkcreate', (req,res) => {

    req.body.forEach(element => {
        element.id = autoIncrementId().next().value
        Pokemon.create(element)
    });
    return res.send('ok')
})

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