const products = require ('../database/products')
const controller = {

    index: (req , res , next) => {
       let sortedList = products.sort((a,b) => a.id - b.id) // se ordena los objetos del array segun su id / SORT NO NECESITA LLAVES ACORDARSE
        //res.send (sortedList)
        res.render('index' , {products:sortedList}) // se renderiza con los objetos ordenados
    },

    menudetail: (req , res , next) => {
        res.render('detalleMenu')
    },

    search: (req , res , next) => {
    let productsList = products
        let searchquery = req.query.query
        let searchObj = []
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name.includes(searchquery)) {
        searchObj.push(productsList[i])
        }
    }
        res.render ('product-result' , {products:searchObj})
    },

    searchedit: (req , res , next) => {
        res.render ('editList')
    },

    searcheditproduct: (req, res , next) => {
        let productsList = products
        let searchquery = req.query.query
        let searchObj = []
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name.includes(searchquery)) {
        searchObj.push(productsList[i])
        }
    }
        res.render ('searcheditproduct' , {products:searchObj})
    },
}
    


module.exports = controller