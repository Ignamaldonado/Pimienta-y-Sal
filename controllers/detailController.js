const products = require ('../database/products')
const controller = {
    detail: (req , res , next) => {
        let productsid = products.map ((product) => {return product.id}) //array con los id
        let reqid = req.params.productid //id solicitado en la ruta
        
        for ( var i = 0; i < products.length; i++) {  // for que se mueve por el array de productos
            if (productsid[i] == reqid) { //si el id por el que se esta moviendo i coincide con la ruta solicitada
            let reqObj = products[i] // guarda el producto que se solicito 
            res.render ('product' , {product:reqObj}) // renderiza la pag con el producto como dato
            break;
            } else {
                if (i == products.length -1 && productsid[i] != reqid) {console.log ('no tenemos el plato solicitado')}
                } // Si i ya esta en el ultimo lugar Y aun asi no se encontro el id solicitado en la ruta hace un console diciendo que no tenemos el plato
        }
       }
}

module.exports = controller