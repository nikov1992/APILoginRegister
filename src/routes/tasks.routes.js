//utilizo routers para darle mas organizacion a mi api

import { Router } from 'express';
import Usuario from '../models/Taks.js'

const router = Router() // lo ejecuto

//point to login page
router.get('/Login', (req,res) => {
    res.send('Login')
})


router.post('/SendTask' , (req, res)=>{
    const newUsuario = new Usuario({Name: req.body.Name , Surname: req.body.Surname , Age: req.body.Age})
    newUsuario.save();
    console.log(newUsuario)
    res.json('saving a new task')
})



//export
export default router;






