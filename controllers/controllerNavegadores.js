const controllerNavegadores = {
    cadastro: function(req,res) {
    res.render('cadastro')
    },
    contato:(req,res) =>{
    res.render('contato')
    },
    login: (req,res) =>{
    res.render('login')
    },
    servicos: (req,res) =>{
    res.render('servicos')
    }
}
module.exports = controllerNavegadores