const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const {validationResult, cookie} = require('express-validator')


const cookieParser = require('cookie-parser')




const loginController = {
    login: ( req, res) => {
        res.render('cadastroLogin')
    },



    
    loginConcluido: (req,res)=>{
        let dadosDoUsuario = req.body
        const erro = validationResult(req)
        const {sequelize, Aluno} = require('../models')


        if(!erro.isEmpty()){
            
            res.render('cadastroLogin', {erro: erro.mapped()})
            
            

        }else{
                

                
                
                
                let senhaCriptografada = bcrypt.hashSync(dadosDoUsuario.senha, 10)
                dadosDoUsuario.senha = senhaCriptografada
                async function busca(){
                    const nome = await Aluno.findAll({
                        where:{
                            nome: dadosDoUsuario.nome
                        }
                    })
                    console.log(nome)
                }
               
                busca( res.render('index'))
                
        }

        
        
        
    },
    
    cadastrarSe: (req,res) =>{
        res.render('cadastrarSe')
    }
}
module.exports = loginController