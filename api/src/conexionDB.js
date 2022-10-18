// importamos dotenv para las variables de entorno
import dotenv from 'dotenv'
dotenv.config()

// CONEXION A BASE DE DATOS DE MONGODB
import mongoose from 'mongoose';
try {
    let URI = process.env.URI; // Variable de entorno
    await mongoose.connect(URI);
    console.log('DB ok')
} catch (error) {
    console.log(error)
}