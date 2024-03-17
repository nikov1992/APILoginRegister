import express from 'express'
import cors from 'cors'
//rutas de la API
import AuthRoutes from './routes/auth.routes.js'
import path from 'path'


const app = express() //OBJETO DEL SERVIDOR

//SETTING
app.set('port' , process.env.PORT || 3000); //Si no hay otro puerto entonces ejecuta en el 3000

app.use(express.json());

app.use(express.text()); //for text common user complet

app.use(AuthRoutes);

app.use(express.json({
    type: "*/*"
}))

app.use(
    express.urlencoded({
        extended : true
    })
)
app.use(cors())

app.use("/api" , AuthRoutes); //for separete all mis pages with pre-API

// app.get('/', (req, res)=>{
//     res.json({message:"welcom to oxygen token"})
// })

app.get("/" , function(req,res){
    const indexPath = path.resolve(__dirname , "index.html")
    res.sendFile(indexPath);
})



export default app;










