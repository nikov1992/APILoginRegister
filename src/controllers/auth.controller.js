import Usuario from '../models/Users.js'

// import bcrypt from 'bcryptjs'
// import jwt, { TokenExpiredError } from 'jsonwebtoken'




async function register(req,res){
    const newUsuario = new Usuario({
        Name: req.body.Name , 
        Surname: req.body.Surname, 
        Email: req.body.Email,
        Company: req.body.Company,
        Country: req.body.Country, 
        Pass: req.body.Pass})

    if(!newUsuario.Name || !newUsuario.Surname || !newUsuario.Pass){
      return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }else{
        await newUsuario.save();
        console.log(newUsuario);
        return res.status(201).json({ status: "Success", message: "Usuario registrado correctamente", redirect: "/api/login" });
    }
}


export const methods = {
    register,
  }

/////TERMINAR DE PODER REDIRIJIR ! 


