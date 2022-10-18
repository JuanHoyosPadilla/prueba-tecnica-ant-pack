import React from "react";
import { FaExternalLinkAlt, FaRegTrashAlt,FaRegEye } from "react-icons/fa"; //iconos
import { getUser,deleteUser } from "../services/services.js";

export default function User({ user,handelOpenCloseModal,setUserDetail,handelOpenCloseModalEdit,toast }) {
  
  //obteniendo un solo usuario
  const getDetail = (id) => {
    getUser(id).then((user) => setUserDetail(user.data)).catch(err => console.log(err))
    handelOpenCloseModal()
  };

  //obteneiendo usuario para actualizar

  const getUpdate = (id) => {
    getUser(id).then((user) => setUserDetail(user.data)).catch(err => console.log(err))
    handelOpenCloseModalEdit()
  };

  //Eliminar
  const delUser = (id) => {
    deleteUser(id).then(res => {
      console.log(res)
      toast.success(res.data.message, {
        duration: 3000,
        position: "top-center",
      });
    }).catch(err => console.log(err))

  }
  
  return (
    <div className="user" >
      <div className="avatar">
        <img src='' alt="avatar" />
      </div>
      <div className="nameuser" >
        <span>{user.name}</span>
      </div>
      <div className="btns">
        <button className="edit">
          <FaExternalLinkAlt onClick={() => getUpdate(user._id)} />
        </button>
        <button onClick={() => delUser(user._id)}>
          <FaRegTrashAlt />
        </button>
        <button  onClick={() => getDetail(user._id)}>
          <FaRegEye />
        </button>
      </div>
    </div>
  );
}
