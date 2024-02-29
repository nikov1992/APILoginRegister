import express from 'express'
import TasksRoutes from './routes/tasks.routes.js'


const app = express() //OBJETO DEL SERVIDOR


//SETTING
app.set('port' , process.env.PORT || 3000); //Si no hay otro puerto entonces ejecuta en el 3000

app.use(express.json());

//ENDPOINTS
app.get('/', (req, res)=>{
    res.json({message:"welcom to oxygen token"})
})

app.use(TasksRoutes);
export default app;








