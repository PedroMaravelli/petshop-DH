const {body} = require('express-validator')

loginValidacoes = [
    body('email').isEmail().notEmpty(),
    body('senha').isLength({min:5})
]