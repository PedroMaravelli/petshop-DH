




const indexController = {
    home:(req,res)=>{    
        res.render('index')
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