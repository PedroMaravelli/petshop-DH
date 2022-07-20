const cadastroController = {

    cadastrado: (req,res) => {

        let { nome, preco} = req.body
        const erro = validationResult(req)
        if(!erro.isEmpty()){
            res.status(403).send('errado')
            

        }else{
            res.render('index')
        }

        

        

    res.render('index',{servicos:listaServicos})
    },


    cadastro: (req,res) => {
        res.render('cadastro')
    }
}


module.exports = cadastroController