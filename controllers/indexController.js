const listaServicos = [{nome:"banho",valor:50, img: '/images/servicos/imagemCachorro.jpg'},{nome:'tosa',valor:100, img: '/images/servicos/imagemCachorro.jpg'},
{nome: "castração", valor: 200, img: '/images/servicos/imagemCachorro.jpg'}]

const { validationResult } = require('express-validator')



const indexController = {
    home:(req,res)=>{
        
    res.render('index',{servicos:listaServicos})
    },
    cadastrar:(req,res) => {
    res.render('cadastro')
    },
    cadastrado: (req,res) => {
        const erro = validationResult(req)
        if(!erro.isEmpty()){
            res.status(403).send('errado')
            

        }else{
            res.render('index')
        }

    res.render('index',{servicos:listaServicos})
    }

    
}

module.exports = indexController