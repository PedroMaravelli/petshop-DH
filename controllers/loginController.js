const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')



let usuariosJson = path.join("usuarios.json")

const loginController = {
    login: ( req, res) => {
        res.render('login')
    },
    loginConcluido: (req,res)=>{
        let { email, senha} = req.body
        const erro = validationResult(req)

        if(!erro.isEmpty()){
            
            return res.render('login', {erro: erro.mapped()})
            

        }else{
                let senhaCriptografada = bcrypt.hashSync(senha, 10)
                let loginJson = JSON.stringify({email,senha: senhaCriptografada})
                fs.writeFileSync(usuariosJson, loginJson)
                return res.redirect('/home')
                
        }



    }

}
module.exports = loginController