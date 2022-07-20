const {body} = require('express-validator')

let validacoes = [
    body('nomeServico').notEmpty().isLength({min:3}).withMessage('Nome do serviço deve ter mais de 3 caracteres'),
    body('preco').notEmpty().withMessage('Digitar um valor')
]

module.exports = validacoes