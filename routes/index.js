var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
const controllerNavegadores = require('../controllers/controllerNavegadores')
const path = require('path')
const logSite = require('../middlawares/logSite')

const {check} = require('express-validator')

let validacoes = [
    check('nome').notEmpty().isLength({min:3}).withMessage('Nome do serviço deve ter mais de 3 caracteres'),
    check('preco').notEmpty().withMessage('Digitar um valor')
]




router.get('/home',indexController.home)

router.get('/contato', controllerNavegadores.contato)
router.get('/login', controllerNavegadores.login)
router.get('/servicos', controllerNavegadores.servicos)
router.get('/sobre', controllerNavegadores.sobre)
router.get('/cadastro', controllerNavegadores.cadastro)
router.post('/cadastrar', validacoes, indexController.cadastrado)







module.exports = router;
