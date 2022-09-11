const { Router } = require('express');
const { Type } = require('../db');
const { saveTypes } = require('./utils');
const router = Router();

router.get('/', async(req,res) => {
    const types = await saveTypes()
    console.log(types);
    types.map((type) => {
        Type.create(type)
    })
    res.send('type guardados')
})

router.post('/createtype', (req,res) => {
    req.body.forEach(element => {
        // element.id = autoIncrementId().next().value
        Type.create(element)
    });
    return res.send('ok')
})

module.exports = router;