//Modulos
import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors'
import route from './routes/User.routes.js';
export const app = express();

//Funcion para que nuestro servidor reconozca los json
app.use(express.json())

//Funcion que nos permite cargar imagenes
app.use(fileUpload());

//Funcion que permite conectarse al frontend
app.use(cors())

//Utilizamos las rutas que vinen exportadas
app.use('/api',route)
