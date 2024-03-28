import Usuario from '../models/Users.js'

// import bcrypt from 'bcryptjs'
// import jwt, { TokenExpiredError } from 'jsonwebtoken'

async function register(req,res){
    const errors = [];
    const newUsuario = new Usuario({
        Name: req.body.Name , 
        Surname: req.body.Surname, 
        Email: req.body.Email,
        Company: req.body.Company,
        Country: req.body.Country, 
        Pass: req.body.Pass,
        Pass2: req.body.Pass2})

    if(newUsuario.Pass != newUsuario.Pass2){
      errors.push({text: 'Passwords do not march'})
      console.log("las constraseñas no coinciden")
    }

    
    if (newUsuario.Pass.length < 4 ) {
      errors.push({text:'Passwords must be at least 4 characters'})
      console.log("al menos 4 letras en al contraseña")
    }

    if (errors.length > 0 ){
      res.render('../../public/index.html' , {errors})
    }
    else{
      res.send('sing up susscefully')
    }

    if(!newUsuario.Name || !newUsuario.Surname || !newUsuario.Pass){
      return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }

    else {
      const emailUser = await Usuario.findOne({Email: newUsuario.Email})
      if (emailUser){

        console.log("este mail ya esta en la base de datos")
        // req.flash("error_msg", "The Email is already in use.");
        // return res.redirect("/");
      }
    }

}


export const methods = {
    register,
  }

/////TERMINAR DE PODER REDIRIJIR ! 


