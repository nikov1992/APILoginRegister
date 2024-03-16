import express from 'express'
//rutas de la API
import AuthRoutes from './routes/auth.routes.js'


const app = express() //OBJETO DEL SERVIDOR

//SETTING
app.set('port' , process.env.PORT || 3000); //Si no hay otro puerto entonces ejecuta en el 3000

app.use(express.json());

app.use(express.text()); //for text common user complet

app.use(AuthRoutes);

app.use("/api" , AuthRoutes); //for separete all mis pages with pre-API

app.get('/', (req, res)=>{
    res.json({message:"welcom to oxygen token"})
})

export default app;










