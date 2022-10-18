import React, { useEffect, useState } from "react";
import styled from "styled-components";
//componentes
import User from "./User.jsx";
import ModalDetails from "./ModalDetails.jsx";
import ModalEditUser from './ModalEditUser.jsx'

//importamos los servicios
import { getUsers } from "../services/services.js";

import toast, { Toaster } from "react-hot-toast"; //Toast

export default function Userview() {
  const [usersData, setUsersData] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [openModal,setOpenModal] = useState(false); //Estado del modal
  const [openModaledit,setOpenModalEdit] = useState(false); // Modal para editar
  //const [search, setSearch] = useState('')
  //console.log(search)
  useEffect(() => {
    getUsers().then((res) =>{ setUsersData(res.data) 
      }).catch(err => console.log(err)) // obtener los usuarios de la base de datos
  }, []);

  
  
  //Funcion para abrir modal mas detalles
  const handelOpenCloseModal = () => {
    setOpenModal(!openModal)
  }

    //Funcion para abrir modal mas detalles
    const handelOpenCloseModalEdit = () => {
      setOpenModalEdit(!openModaledit)
    }

  return (
    <ContainerUserView>
      <Toaster/>
        {
            openModal ? <ModalDetails handelOpenCloseModal={handelOpenCloseModal} userDetail={userDetail}/> : '' ||
            openModaledit ? <ModalEditUser handelOpenCloseModalEdit={handelOpenCloseModalEdit} userDetail={userDetail} /> : ''
        }
        
      <div className="container-users">
        <div className="search">
          <input type="text" name="search"  placeholder="Search"  />
        </div>

        <div className="users">
          {usersData.map((user) => (
            
            <User key={user._id} user={user} toast={toast} handelOpenCloseModal={handelOpenCloseModal} handelOpenCloseModalEdit={handelOpenCloseModalEdit} setUserDetail={setUserDetail} />
          ))}
        </div>
      </div>
    </ContainerUserView>
  );
}

//Estilos del componente
const ContainerUserView = styled.div`
  background-color: #f5f5f5;
  width: 90vw;
  height: 90vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.15);

  .container-users {
    width: 90%;
    height: 90%;
    padding: 10px;
    .search {
      width: 200px;
      height: 30px;
      input {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 10px;
        background-color: transparent;
        outline: none;
        border-bottom: 1px solid #5e63db;
        color: #5e63db;
      }
    }
    .users {
      width: 90%;
      height: 90%;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .user {
        position: relative;
        display: flex;
        align-items: center;
        padding: 10px;
        height: 80px;
        gap: 1rem;
        background: #efeff1;
        border-radius: 10px;
        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
        

        .nameuser {
          color: rgba(47, 48, 49, 0.69);
          font-weight: 400;
        }
        .avatar {
          background: #f1f1f1;
          border: 1px solid #5e63db;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
          color: rgba(47, 48, 49, 0.69);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .btns {
          position: absolute;
          display: flex;
          gap: 0.5rem;
          right: 1rem;
          button {
            width: 60px;
            height: 30px;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 20px;
            :first-child {
              color: #27e451;
              :hover {
                color: #27e450aa;
              }
            }
            :nth-child(2n) {
              color: red;
              :hover {
                color: #ff0000a4;
              }
            }
          }
        }
      }
    }
  }
`;
