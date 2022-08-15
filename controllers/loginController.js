const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const {validationResult, cookie} = require('express-validator')
const {Curso, Area} = require('../models')


const cookieParser = require('cookie-parser')




const loginController = {
    login: async ( req, res) => {
        const cursos = await Curso.findAll({
            include:{
                model: Area,
                require: true
            }
        })
        console.log(cursos)
        res.render('cadastroLogin', {cursos})
    },

    cursos: async(req,res) => {
        const {idCurso} = req.params
        const curso = await Curso.findOne({
            where:{id: idCurso},
            include:{
                model: Area,
                require:true
            }
        })

        return res.render('cursos', {curso})

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
                    const name = await Aluno.findAll({
                        where:{
                            name: dadosDoUsuario.nome
                        }
                    })
                    console.log(name)
                }
                
                busca( res.render('index'))
                
        }

        
        
        
    },
    
    cadastrarSe: (req,res) =>{
        res.render('cadastrarSe')
    }
}
module.exports = loginController