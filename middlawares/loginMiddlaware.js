const {body} = require('express-validator')

let loginValidacoes = [
    body('email').isEmail().notEmpty(),
    body('senha').isLength({min:5}).notEmpty()
]

module.exports = loginValidacoes