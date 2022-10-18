import axios from "axios";

const URI = 'http://localhost:3001/api'

//Consulta a base de datos para traer todos los usuarios
export const getUsers = () => {
    return axios.get(`${URI}/user`);
}

//Consulta a base de datos para obtener un solo usuario po ID
export const getUser = (id) => {
    return axios.get(`${URI}/user/${id}`)
}

export const saveUser = (data) =>{
    return axios.post(`${URI}/useradd`,data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
}



// Consulta para eliminar un usuario
export const deleteUser = (id) => {
    return axios.delete(`${URI}/user/${id}`)
}

//Consulta para actualizar un dato
export const updateUser = (id,data) => {
    return axios.put(`${URI}/user/${id}`,data)
}