

import { Router } from 'express';
//utilizo routers para darle mas organizacion a mi api
import {register} from "../controllers/auth.controller.js"

const router = Router() // lo ejecuto

router.post("/register" , register)

router.get("/register" , register) 
 

//point to login page
router.get('/Login', (req,res) => {
    res.send('Login')
})

export default router;


// router.post('/SendTask' , async (req, res)=>{
//     const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age})
//     await newUsuario.save();
//     console.log(newUsuario)
//     res.json('new user crated')
// })

// router.post('/SendUser' , async (req, res)=>{
//     const newUsuario2 = new Usuario2({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age, Mail: req.body.Mail, Pass: req.body.Pass})
//     await newUsuario2.save();
//     console.log(newUsuario2)
//     res.json('new user crated whit email')
// })



//export







