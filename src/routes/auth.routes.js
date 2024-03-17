import { Router } from 'express';

//utilizo routers para darle mas organizacion a mi api
import {register} from "../controllers/auth.controller.js"

const router = Router() // lo ejecuto

router.post("/register" , register) //esta funciona ok


router.post("/regsiter2", async (req, res) => { // Definimos una ruta POST '/usuarios' que manejará las solicitudes de creación de usuarios
    try {
      // Creamos una nueva instancia del modelo 'Usuario' con los datos recibidos en la solicitud
      const nuevoUsuario = new Usuario({
        Name: req.body.Name,
        Surname: req.body.Surname,
        Company: req.body.Company,
        Country: req.body.Country,
        Pass: req.body.Pass,
        Email: req.body.Email
      });
      
      await nuevoUsuario.save(); // Guardamos el nuevo usuario en MongoDB Atlas
      res.status(201).json({ message: "Usuario creado correctamente" }); // Respondemos con un mensaje de éxito
    } catch (error) {
      console.error(error); // Si ocurre un error, lo imprimimos en la consola
      res.status(500).json({ error: "Error interno del servidor" }); // Respondemos con un mensaje de error al cliente
    }
  });



router.get("/register" , register) 
 

// //point to login page
// router.get('/Login', (req,res) => {
//     res.send('Login')
// })


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







