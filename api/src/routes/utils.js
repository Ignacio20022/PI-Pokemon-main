const axios = require('axios'); 
const {Pokemon, Type} = require('../db');


// Retorna un arreglo de objetos con los datos de cada pokemon
function getPokemons () {
    // Hace un llamado a la api
    // al resultado le hace un map donde llama otra vez a la api pero ahora a los detalles de cada pokemon
    // y por ultimo retorna un objeto con los datos necesarios de cada uno
    return (
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40')
    .then((result) => {
        return(
            Promise.all(result.data.results.map(async(elem)=>{
                let details = await axios(elem.url);
                return {
                    id: details.data.id,
                    name: details.data.name,
                    hp: details.data.stats[0].base_stat,
                    attk: details.data.stats[1].base_stat,
                    def: details.data.stats[2].base_stat,
                    speed: details.data.stats[5].base_stat,
                    type: details.data.types.map((type) => type.type.name),
                    height: details.data.height,
                    weight: details.data.weight,
                    img: details.data.sprites.front_default
                }
            }
        ))
        .catch((error) => {throw error})
        )
    })
    .catch((error) => {throw error})
    )
}

// Retorna un objeto con los datos de un pokemon segun su id
function getSinglePokemon(id, name) {

    // Si llega id y name no significa que el usuario quiere buscar por id
    if(id && !name){
    // En caso de que la id pasada no sea un numero o sea uno invalido tira error
        if(id <= 0) throw ('Debe ingresar un valor numerico positivo') //TODO add 404

        // En caso de que la id sea menor a 41 (de 1 a 40, ya se verifico que no sea 0)
        // llama a la api con la id de dicho pokemon y retorna los datos
        //* ACLARACION que sea menor a 41 significa que son pokemons dentro de la api
        if(id < 41){
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
                        type: details.data.types.map((type) => type.type.name),
                        height: details.data.height,
                        weight: details.data.weight,
                        img: details.data.sprites.front_default
                    }
                    return poke
                })
                .catch((err) => {throw err})
            )
        }
        // En caso de que la id sea mayor a 40 (que ya sean pokemons creados por el usuario)
        // retorna la data del pokemon que machee la id pasada con la primary key
        else if(id > 40){
            return(
                Pokemon.findByPk(id) //! SI NO SE ENCUENTRA LA ID, FIND BY PK DEVUELVE 'NULL'
                .then((data) => {
                    if(!data) throw ("No se encontro el pokemon")
                    return data
                })
            )
        }
    }
    // Si llega name pero id no significa que el usuario quiere buscar por el nombre
    else if(!id && name){
        return(
            Pokemon.findAll({
                where: {
                    name
                }
            })
            //* Si findAll no encuentra el nombre en la db la promesa se resuelve un array vacio
            .then((data) => {
                // En caso de que no se haya encontrado en la db busca en la api
                if(!data.lenght) {
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
                                type: details.data.types.map((type) => type.type.name),
                                height: details.data.height,
                                weight: details.data.weight,
                                img: details.data.sprites.front_default
                            }
                            return poke
                        })
                        // Si no se encuentra en la api tira error //TODO 404
                        .catch((err) => {
                            throw ('No se enconto el pokemon')
                        }) 
                    )
                }
                // Si se encontro en la db retorna los datos
                //TODO en caso de que se permita repetir nombres
                return data
            })

            // axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            // .then((details) => {
            //         const poke = {
            //             id: details.data.id,
            //             name: details.data.name,
            //             hp: details.data.stats[0].base_stat,
            //             attk: details.data.stats[1].base_stat,
            //             def: details.data.stats[2].base_stat,
            //             speed: details.data.stats[5].base_stat,
            //             type: details.data.types.map((type) => type.type.name),
            //             height: details.data.height,
            //             weight: details.data.weight,
            //             img: details.data.sprites.front_default
            //         }
            //         return poke
            //     })
            // .catch((err) => {
            //     Pokemon.findOne({
            //         where: {
            //             name
            //         }
            //     })
            //     .then((data) => {
            //         console.log(data);
            //         if(!data) throw ("No se encontro el pokemon")
            //         return data
            //     })
            // })
        )
    }

    // En caso de que occura algun error inesperado
    else throw ('Ha ocurrido un error inesperado')
}

// Funcion generadora para los id de los pokemons creados por el usuario
// Empieza en 41 ya que solo se pueden mostrar 40 pokemons de la api
let id = 41
function* autoIncrementId () {

    while(true){
        yield id++
    }
}

//! funcion para guardar los tipos en la db
async function saveTypes () {
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
    getPokemons,
    getSinglePokemon,
    autoIncrementId,
    saveTypes
}