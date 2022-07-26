const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const {validationResult, cookie} = require('express-validator')

const usersJson = require('../usuarios.json')
const cookieParser = require('cookie-parser')




const loginController = {
    login: ( req, res) => {
        res.render('cadastroLogin')
    },



    
    loginConcluido: (req,res)=>{
        let dadosDoUsuario = req.body
        const erro = validationResult(req)



        if(!erro.isEmpty()){
            
            res.render('cadastroLogin', {erro: erro.mapped()})
            
            

        }else{
                let nomeUsuario =  res.cookie('nomeUsuario', dadosDoUsuario.nome)

                
                
                
                let senhaCriptografada = bcrypt.hashSync(dadosDoUsuario.senha, 10)
                dadosDoUsuario.senha = senhaCriptografada

                let loginJson = JSON.stringify({dadosDoUsuario},null, 4)
                fs.writeFileSync('usuarios.json', loginJson)
                console.log(nomeUsuario)
                return res.redirect('/home')
                
        }

        
        
        
    },
    
    cadastrarSe: (req,res) =>{
        res.render('cadastrarSe')
    }
}
module.exports = loginController