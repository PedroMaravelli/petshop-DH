const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')


let usuariosJson = path.join("usuarios.json")

const loginController = {
    login: ( req, res) => {
        res.render('login')
    },
    loginConcluido: (req,res)=>{
        res.render('contato')

        let { email, senha} = req.body
        let senhaCriptografada = bcrypt.hashSync(senha, 10)
        let loginJson = JSON.stringify({email,senha: senhaCriptografada})
        fs.writeFileSync(usuariosJson, loginJson)


    }

}
module.exports = loginController