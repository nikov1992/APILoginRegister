
import Usuario from '../models/Users.js'
export const register = async (req , res )=>{
    const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age, Mail: req.body.Mail, Pass: req.body.Pass})
    await newUsuario.save();
    console.log(newUsuario)
    res.json('new user crated whit email')}

