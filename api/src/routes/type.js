const { Router } = require('express');
const { Type } = require('../db');
const { getTypes, incrementalIdTypes } = require('./utils');
const router = Router();

router.get('/', async(req,res) => {
    
    const types = await getTypes()
    types.map((type) => {
        Type.findOrCreate({
            where:{
                name: type.name
            }
        })
    })
    let types2 = await Type.findAll()
    types2 = types2.map((type) => {
        return type.dataValues
    })

    res.send(types2)
})

router.post('/create', (req,res) => {
    req.body.forEach(element => {
        element.id = incrementalIdTypes()
        Type.create(element)
    });
    return res.send('ok')
})

module.exports = router;