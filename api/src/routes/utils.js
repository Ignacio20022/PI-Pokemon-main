const axios = require('axios'); 
const {Pokemon, Type} = require('../db');


// Retorna un arreglo de objetos con los datos de cada pokemon
async function getPokemonsAPI () {
    // Hace un llamado a la api
    // al resultado le hace un map donde llama otra vez a la api pero ahora a los detalles de cada pokemon
    // y por ultimo retorna un objeto con los datos necesarios de cada uno
    let pokemonsAPI = 
    await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=800')
    .then((resultAPI) => {
        return(
            Promise.all(resultAPI.data.results.map(async(elem)=>{
                let details = await axios(elem.url);
                return {
                    id: details.data.id,
                    name: details.data.name,
                    hp: details.data.stats[0].base_stat,
                    attk: details.data.stats[1].base_stat,
                    def: details.data.stats[2].base_stat,
                    speed: details.data.stats[5].base_stat,
                    types: details.data.types.map((type) => type.type.name),
                    height: details.data.height,
                    weight: details.data.weight,
                    img: details.data.sprites.other.home.front_default || details.data.sprites.other.official-artwork || null
                }
            }))
            .catch((error) => {throw error})
        )
    })
    .catch((error) => {throw error})

    return pokemonsAPI
}

async function getAllPokemonsNames(){
    let pokemonNamesDB = await Pokemon.findAll()
    pokemonNamesDB = pokemonNamesDB.map((pokemon) => pokemon.name)

    let pokemonsNamesAPI = 
    await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000') 

    pokemonsNamesAPI = pokemonsNamesAPI.data.results.map((elem) => elem.name)

    return pokemonsNamesAPI.concat(pokemonNamesDB)
}

async function getPokemonDB(){
    let pokemonsDB = 
    await Pokemon.findAll({
        include: [{
            model: Type,
            attributes: ['name'],
            through: {
              attributes: []
            }
        }]
    })

    pokemonsDB = pokemonsDB.map((pokemon )=> {
        return {
          ...pokemon.dataValues,
          types: pokemon.types?.map((type) => type.name)
        }
      })

    return pokemonsDB
}

async function getAllPokemons(){
    const pokemonsAPI = await getPokemonsAPI()
    const pokemonsDB = await getPokemonDB()

    return pokemonsAPI.concat(pokemonsDB)
}

// Retorna un objeto con los datos de un pokemon segun su id
async function getPokemonByID(id) {

    // En caso de que la id pasada no sea un numero o sea uno invalido tira error
        if(id <= 0) throw new Error ('Debe ingresar un valor numerico positivo') //TODO add 404

        //Recorre la DB hasta encontrar uno con el mismo id
        let pokeId = await Pokemon.findOne({
            where:{ id },
            include:{
              model : Type,
              attributes : ['name'],
              through:{
                attributes:[]
              }
            }
          })          
        //* Si findOne no encuentra la id en la DB, la promesa se resuelve con null
        if(pokeId){
            pokeId = {
                ...pokeId.dataValues,
                types: pokeId.types?.map(t=> t.name)
            }
            return pokeId
        }

        // llama a la api con la id de dicho pokemon y retorna los datos
        return(
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((details) => {
                const poke = {
                    id: details.data.id,
                    name: details.data.name,
                    hp: details.data.stats[0].base_stat,
                    attk: details.data.stats[1].base_stat,
                    def: details.data.stats[2].base_stat,
                    speed: details.data.stats[5].base_stat,
                    types: details.data.types.map((type) => type.type.name),
                    height: details.data.height,
                    weight: details.data.weight,
                    img: details.data.sprites.other.home.front_default || details.data.sprites.other.official-artwork
                }
                return poke
            })
            .catch((err) => {
                throw (err.code)
            })
        )

        // retorna la data del pokemon que machee la id pasada con la primary key

                // let pokemonsDB = 
                //     Pokemon.findByPk(id,{  //* SI NO SE ENCUENTRA LA ID, FIND BY PK DEVUELVE 'NULL'
                //     include: [{
                //         model: Type,
                //         attributes: ['name'],
                //         through: {
                //           attributes: []
                //         }
                //     }]
                // }) 
                // pokemonsDB = pokemonsDB.map(p=>{
                //     return {
                //       ...p.dataValues,
                //       types: p.types?.map(t=> t.name)
                //     }
                // })
                // return pokemonsDB     
}

async function getPokemonByName(name){

    let pokemonName = await Pokemon.findOne({
        where: { name },
        include:{
            model : Type,
            attributes : ['name'],
            through:{
                attributes:[]
            }
        }
    })
    //* Si findOne no encuentra el nombre en la DB la promesa se resuelve con null
    if(pokemonName){
        pokemonName = {
            ...pokemonName.dataValues,
            types: pokemonName.types?.map((type) => type.name)
        }
        return pokemonName
    }
    // En caso de que no se haya encontrado en la db busca en la api
    return(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((details) => {
            const poke = {
                id: details.data.id,
                name: details.data.name,
                hp: details.data.stats[0].base_stat,
                attk: details.data.stats[1].base_stat,
                def: details.data.stats[2].base_stat,
                speed: details.data.stats[5].base_stat,
                types: details.data.types.map((type) => type.type.name),
                height: details.data.height,
                weight: details.data.weight,
                img: details.data.sprites.other.home.front_default || details.data.sprites.other.official-artwork
            }
            return poke
        })
    )
        // Si no se encuentra en la api tira error //TODO 404
    .catch((err) => {
        throw new Error('No se enconto el pokemon')
    })     
}


// Funcion generadora para los id de los pokemons creados por el usuario
// Empieza en 20021 para diferenciarlos de los de la api
let idPokemon = 20001
function incrementalIdPokemons () {
    return idPokemon++
}

let idTypes = 21
function incrementalIdTypes() {
    return idTypes++
}

//! funcion para guardar los tipos en la db
async function getTypes () {
    return(
        axios.get('https://pokeapi.co/api/v2/type/')
        .then((types) => {
            return(
                types.data.results.map((type)=>{
                    return {
                        name: type.name
                    }
                })            
            )   
        })
    )
}

module.exports = {
    getAllPokemons,
    getAllPokemonsNames,
    getPokemonsAPI,
    getPokemonDB,
    getPokemonByID,
    getPokemonByName,
    getTypes,
    incrementalIdPokemons,
    incrementalIdTypes
}