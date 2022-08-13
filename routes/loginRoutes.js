var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController')
const loginMiddlaware = require('../middlawares/loginMiddlaware')


router.get('/', loginController.login)
router.post('/concluido', loginMiddlaware, loginController.loginConcluido)

router.get('/cadastrar', loginController.cadastrarSe)






module.exports = router