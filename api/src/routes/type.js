const { Router } = require('express');
const { Type } = require('../db');
const { getTypes, incrementalIdTypes } = require('./utils');
const router = Router();

router.get('/', async(req,res) => {
    
    const types = await getTypes()
    console.log(types);
    types.map((type) => {
        Type.findOrCreate({
            where:{
                name: type.name
            }
        })
    })
    res.send(types)
})

router.post('/create', (req,res) => {
    req.body.forEach(element => {
        element.id = incrementalIdTypes()
        Type.create(element)
    });
    return res.send('ok')
})

module.exports = router;