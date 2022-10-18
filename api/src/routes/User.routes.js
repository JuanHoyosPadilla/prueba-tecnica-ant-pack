import {Router} from 'express';
//Import de controladores
import {getUsers,getUser,addUser,putUser,deleteUser} from '../controllers/User.controller.js'



const route = Router();

//RUTAS
route.get('/user/:id', getUser) //Ruta para obtener un solo usuario
route.get('/user', getUsers) // Ruta para obtener todos los usuarios
route.post('/useradd',addUser) // Ruta para guardar un nuevo usuario

route.put('/user/:id',putUser) // Ruta para actualizar el usuario
route.delete('/user/:id',deleteUser) // Ruta para eliminar un usuario

export default route; 