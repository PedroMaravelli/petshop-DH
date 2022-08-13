const {validationResult} = require('express-validator')

const cadastroController = {

    cadastrado: (req,res) => {

        let { nome, preco} = req.body
        const erro = validationResult(req)
        if(!erro.isEmpty()){
            res.status(403).send('errado')
            

        }else{
            a
            busca(res.render('index'))
        }

        

        

    res.render('index')
    },


    cadastro: (req,res) => {
        res.render('cadastro')
    }
}


module.exports = cadastroController