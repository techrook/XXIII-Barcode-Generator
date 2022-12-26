const express = require('express');
const router = express.Router();

const generateBarecode = require('../controller/barcode.controller')

router.get('/', (req, res, next)=>{
    res.render('index')
})
router.post('/', generateBarecode)

module.exports = router;