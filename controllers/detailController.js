const products = require ('../database/products')
const controller = {
    detail: (req , res , next) => {
        for ( var i = 0; i < products.length; i++) {  // for que se mueve por el array de productos
            if (products[i].id == req.params.productid ) { //si el id por el que se esta moviendo i coincide con la ruta solicitada
            let reqObj = products[i] // guarda el producto que se solicito 
            res.render ('product' , {product:reqObj}) // renderiza la pag con el producto como dato
            break;
            } else {
                if (i == products.length -1 && products[i].id != req.params.productid) {res.send ('no tenemos el plato solicitado')}
                } // Si i ya esta en el ultimo lugar Y aun asi no se encontro el id solicitado en la ruta hace un console diciendo que no tenemos el plato
        }
       },
    
    editView: function (req, res , next) {
      for (var i = 0; i < products.length; i++) {
          if (products[i].id == req.params.productid) {
              let editObj = products[i];
              res.render ('edit' , {product:editObj})
              break;
          } else {
            if (i == products.length -1 && products[i].id != req.params.productid) {res.send ('No se encuentra el plato a modificar')}
          }
      }
    },
    
    edit: (req , res , next) => {
        res.send ('al fin levanto')
    }
}

module.exports = controller