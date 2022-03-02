const products = require ('../database/products')
const controller = {
    index: (req , res , next) => {
        let productList = products // se guarda el array en una variable adentro de la funcion
        let sortedList = productList.sort((a,b) => a.id - b.id) // se ordena los objetos del array segun su id / SORT NO NECESITA LLAVES ACORDARSE
        //res.send (sortedList)
        res.render('index' , {products:sortedList}) // se renderiza con los objetos ordenados
    },

    menudetail: (req , res , next) => {res.render('detalleMenu')},

 
}
    


module.exports = controller