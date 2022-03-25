const fs = require('fs');

const controller = {
    register: function (req, res, next) {
        res.render ('register')
    },

    save: (req , res , next) => {

        let readObj = fs.readFileSync ('users.JSON' , {encoding: 'utf8'})  // readFyleSync lee el archivo JSON 

        let arrJSON = [] // definir el JSON como array
 
        let user = {
         id: 1,
         name: req.body.name,
         surname: req.body.surname
     } // datos a tomar
        
         
        if (readObj == '') {
         arrJSON.push(user)  // si no hay datos pushea el primer usuario como objeto dentro del array
        } else {
         arrJSON = JSON.parse(readObj) // Si el JSON no esta vacio lo vuelve a objeto literal
         
         user.id = arrJSON[arrJSON.length - 1].id + 1 // Toma el ultimo id del ultimo objeto del array y cuenta uno mas para el proximo objeto
         
         arrJSON.push(user) // push del usuario
         }
 
        
 
        let StringObj = JSON.stringify (arrJSON) // se pasa el objeto a string
        
        fs.writeFileSync ('users.JSON' , StringObj) // write del JSON
    
        res.redirect ('/users/register/complete') // redireccion
    },  // COMO GUARDAR DATOS POR POST

    regcomplete: (req , res , next) => {res.render ('regcomplete')}
}

module.exports = controller
