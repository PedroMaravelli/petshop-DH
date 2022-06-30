var express = require('express');
var router = express.Router();
const petsController = require('../controllers/petsController')
const indexController = require('../controllers/indexController')
const controllerNavegadores = require('../controllers/controllerNavegadores')

router.get('/home',indexController.home)
router.get('/cadastro', controllerNavegadores.cadastro)
router.get('/contato', controllerNavegadores.contato)
router.get('/login', controllerNavegadores.login)
router.get('/servicos', controllerNavegadores.servicos)





module.exports = router;
