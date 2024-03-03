import Usuario from '../models/Users.js'
import bcrypt from 'bcryptjs'

export const register = async (req , res )=>{
    const {Name , Surname , Age , Email , Pass} = req.body;

    const passwordHash = await bcrypt.hash(Pass , 10)
    // this for aply the hash code

    const newUsuario = new Usuario(
        {Name,
        Surname, 
        Age,
        Email, 
        Pass: passwordHash})

    console.log(newUsuario)
    
    res.json({
        id: newUsuario._id,
        username: newUsuario.Name, 
    }
    )}



