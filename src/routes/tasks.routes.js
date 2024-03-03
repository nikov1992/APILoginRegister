//utilizo routers para darle mas organizacion a mi api

import { Router } from 'express';
import Usuario from '../models/Taks.js'
import Usuario2 from '../models/Users.js'

const router = Router() // lo ejecuto

//point to login page
router.get('/Login', (req,res) => {
    res.send('Login')
})


router.post('/SendTask' , async (req, res)=>{
    const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age})
    await newUsuario.save();
    console.log(newUsuario)
    res.json('new user crated')
})

router.post('/SendUser' , async (req, res)=>{
    const newUsuario2 = new Usuario2({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age, Mail: req.body.Mail})
    await newUsuario2.save();
    console.log(newUsuario2)
    res.json('new user crated whit email')
})



//export
export default router;






