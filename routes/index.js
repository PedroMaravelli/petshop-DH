var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

const path = require('path')



router.get('/home',indexController.home)
router.get('/contato', indexController.contato)
router.get('/servicos', indexController.servicos)
router.get('/sobre', indexController.sobre)








module.exports = router;
