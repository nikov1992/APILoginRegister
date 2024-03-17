import Usuario from '../models/Users.js'

// import bcrypt from 'bcryptjs'
// import jwt, { TokenExpiredError } from 'jsonwebtoken'

export const register = (req , res )=>{
    const newUsuario = new Usuario({
        Name: req.body.Name , 
        Surname: req.body.Surname, 
        Email: req.body.Email,
        Company: req.body.Company,
        Country: req.body.Country, 
        Pass: req.body.Pass})
    newUsuario.save();
    console.log(newUsuario)
    res.json('saving a new task')
}






