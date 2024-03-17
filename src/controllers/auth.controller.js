import Usuario from '../models/Users.js'

// import {UsuarioJson} from '/Users/nico/Desktop/nodeAPi-rest/Front/main.js'

// app.use(express.json());



// import bcrypt from 'bcryptjs'
// import jwt, { TokenExpiredError } from 'jsonwebtoken'


// con esto funciona ok

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

// export const register = (req, res)=>{

//  console.log(req.body)

// }





