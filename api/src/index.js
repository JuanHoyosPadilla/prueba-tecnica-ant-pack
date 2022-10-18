// Importamos dotenv para las variables de entorno
import dotenv from 'dotenv'
dotenv.config()

//Importamos el app
import {app} from './app.js';

//Importamos la conexion de la base de datos
import './conexionDB.js'

//Iniciamos el servidor 
let PORT = process.env.PORT; // Variable de entorno
app.listen(PORT, () => {
    console.log('Server OK', PORT)
})