import { Router } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

//utilizo routers para darle mas organizacion a mi api
import {register} from "../controllers/auth.controller.js"

const router = Router() // lo ejecuto


router.post("/register" , register) 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
router.get("/register", (req, res) => {
    // Utilizamos el método sendFile() para enviar el archivo index.html
    // Utilizamos path.join() para asegurarnos de quesd la ruta sea correcta
    res.sendFile(path.join(__dirname,"../../public/index.html"));
});

 
export default router;







