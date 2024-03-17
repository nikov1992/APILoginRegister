import { Router } from 'express';

//utilizo routers para darle mas organizacion a mi api
import {register} from "../controllers/auth.controller.js"

const router = Router() // lo ejecuto

router.post("/register" , register) //esta funciona ok

router.get("/register" , register) 
 
export default router;







