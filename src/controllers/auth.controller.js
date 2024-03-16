import Usuario from '../models/Users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = (req , res )=>{
    const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age, Email: req.body.Email , Pass: req.body.Pass})
    newUsuario.save();
    console.log(newUsuario)
    res.json('saving a new task')
}
  
    // Email: req.body.Email , Pass: req.body.Pass

    // const {Name , Surname , Age , Email , Pass} = req.body;
    // const newUsuario = new Usuario(
    //     {Name,
    //         Surname, 
    //         Age,
    //         Email, 
    //         Pass,
    //     })

    // const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age})
    // newUsuario.save();
    // console.log(newUsuario)
    // res.json('saving a new task')

    // }



    // const passwordHash = await bcrypt.hash(Pass , 10)
    // this for aply the hash code
    
    //jwtToken
    // jwt.sign(
    // {
    //     id: newUsuario._id,
    // }, 
    //     'secret123', 
    // {
    //     expiresIn: "1d"
    // },
    
    //callback
    // (err, token) => {
    //     if (err) console.log(err);
    //     res.json ({token})
    // }

    // res.json({
        
    //     // id: newUsuario._id,
    //     // username: newUsuario.Name, 
    //      }
    //      )
    // )




