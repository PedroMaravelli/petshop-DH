const listaServicos = [{nome:"banho",valor:50, img: '/images/servicos/imagemCachorro.jpg'},{nome:'tosa',valor:100, img: '/images/servicos/imagemCachorro.jpg'},
{nome: "castração", valor: 200, img: '/images/servicos/imagemCachorro.jpg'}]




const indexController = {
    home:(req,res)=>{    
        res.render('index',{servicos:listaServicos})
    },
    contato:(req,res) =>{
        res.render('contato')
        },
        servicos: (req,res) =>{
        res.render('servicos')
        },
        sobre: (req, res) =>{
        res.render('sobre')
        
        },

    
}

module.exports = indexController