const listaServicos = [{nome:"banho",valor:50},{nome:'tosa',valor:100}, {nome: "castração", valor: 200}]

const indexController = {
    home:(req,res)=>{
        
    res.render('index',{servicos:listaServicos})
    }

    
}

module.exports = indexController