const listaServicos = [{nome:"banho",valor:50},{nome:'tosa',valor:100}, {nome: "castração", valor: 200}]

const indexController = {
    home:(req,res)=>{
        
    res.render('index',{servicos:listaServicos})
    },
    cadastrar:(req,res) => {
    res.render('cadastro')
    },
    cadastrado: (req,res) => {
    listaServicos.push(req.body)
    res.render('index',{servicos:listaServicos})
    }

    
}

module.exports = indexController