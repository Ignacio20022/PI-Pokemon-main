const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const {getAllPokemons, getPokemonByID, getPokemonByName, incrementalIdPokemons} = require('./utils');
const router = Router();

// Retorna un arreglo de objetos con los datos de cada pokemon en la direccion '/pokemon'
router.get('/', async(req,res) => {
    // Para diferenciar si el usuario queire todos los pokemons o uno mandado por query
    const {name} = req.query
    // Si name = NULL entro solo a /pokemon
    if(!name){   
        try {
            const allPokes = await getAllPokemons()
            res.status(200).send(allPokes)
        } catch (error) {
            res.status(404).send(error)
        }
    }
    // En cambio si existe name el usuario busco por query
    else{
        try {
            const poke = await getPokemonByName(name)
            res.status(200).send(poke)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    
})

// function createPokemon(){

    router.post('/create', async(req, res) => {
        const {id, name} = req.body.data
        const {types} = req.body.data
        
        try {    
            if(id) throw new Error ('No debes enviar una id')
            if(!name) throw new Error ('Debes agregar un nombre')
            if(types.length > 2) throw new Error ('Solo se pueden elegir 2 tipos como maximo')
            
            
            const existingTypes = await Type.count()
            
            if(existingTypes === 0) throw new Error ('Se deben agregar tipos primero')
            
            req.body.data.id = incrementalIdPokemons()  
            let poke = await Pokemon.create(req.body.data)
            await poke.addTypes(types)
            
            poke = await Pokemon.findByPk(req.body.data.id, {
                include: [{
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }]
            })
            poke = {
                ...poke.dataValues,
                types: poke.types?.map((type)=> type.name)
            }
            
            res.status(201).send(poke)
        } catch (error) {
            console.log(error);
            if(error.parent) return res.status(400).json({error: error.parent.detail}) //En caso de que el tipo asignado no se encuentre
            
            return res.status(400).send({error})
        }
    })
// }
    
    //! Creacion bulk de pokemons para tests manuales
    router.post('/bulkcreate', (req,res) => {
        
    req.body.forEach(element => {
        element.id = autoIncrementId().next().value
        Pokemon.create(element)
    });
    return res.send('ok')
})

router.get('/details/:idPokemon', async(req,res) => {
    let {idPokemon} = req.params
    // if(idPokemon === 'create'){
    //     createPokemon()
    //     return
    // }

    idPokemon = parseInt(idPokemon)

    if(isNaN(idPokemon)) throw new Error('Debes ingresar un numero')

    try {
        const pokemon = await getPokemonByID(idPokemon)
        res.status(200).send(pokemon)
    } catch (error) {
        console.log(error);
        res.redirect('/pokemons')
    }
})


router.delete('/delete/:idPokemon', async(req,res) => {
    let {idPokemon} = req.params
    idPokemon = parseInt(idPokemon)

    if(isNaN(idPokemon)) return res.status(404).send({error: 'ID de pokemon invalido'})

    try {
        await Pokemon.destroy({
            where : { id: idPokemon }
        })
        .then((data) =>  {
            if(data === 1) return res.status(200).send('Pokemon eliminado con exito')
            else return res.status(400).send('El pokemon a eliminar no existe')
        })
    } catch (error) {
        res.send({msg: 'Error inesperado', error})
    }
})



module.exports = router;