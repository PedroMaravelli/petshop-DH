var express = require('express');
var router = express.Router();
const cadastroController = require('../controllers/cadastroController')
const validacoes = require('../middlawares/cadastroMiddlaware')



router.get('/', cadastroController.cadastro)
router.post('/cadastrado', validacoes,  cadastroController.cadastrado)


module.exports = router;