const { Router } = require('express');
const pokemonRouter = require('./pokemon');
const typeRouter = require('./type');
const authRoute = require("./auth");



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonRouter);
router.use('/types', typeRouter);
router.use("/auth", authRoute);



module.exports = router;
