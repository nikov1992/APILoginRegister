import mongoose from 'mongoose' 
import config from './config.js'



(async()=> {
    const db = await mongoose.connect(config.mongodbURL) // no se ppuede poner direcciones dentro del codigo
    // usaremos variables de entorno.

    console.log('Database is connected to:' , db.connection.name);
})()





