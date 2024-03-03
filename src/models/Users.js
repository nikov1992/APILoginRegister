import {Schema , model} from "mongoose"

const User = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true /// esto al final lo que hace borra los espacios
    },
    Surname: {
        type: String,
        trim: true,
    },
    Age: {
        type: Number,
        trim: true,
    },
    Mail: {
        type: String,
        trim: true,
        unique: true, //UNIQUE EMAIL
    },
    Pass: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,  //me indica cuando se crea el usuario
    versionKey: false , // esto es para evitar los __v de mongoose / nodemon
});

// createdAt
// updatedAt

//me guarda un objeto para luego poder editar o hacer lo que quiera
export default model('Users',User)



