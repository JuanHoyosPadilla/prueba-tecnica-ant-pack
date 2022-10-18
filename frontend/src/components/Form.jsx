import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft, FaCheck, FaCamera } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; //Toast
import { useNavigate } from "react-router-dom";

//Servicios
import {saveUser} from '../services/services.js'

export default function Form() {
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({});
  const [previewavatar, setPreviewAvatar] = useState(null);

  const navigate = useNavigate(); // Funcion para navegar a la pagina usuarios

  //Funcion para recuperar la imagen
  const handelchange = (e) => {
    setAvatar({ [e.target.name]: e.target.files[0] });
    setPreviewAvatar(URL.createObjectURL(e.target.files[0])); // Funcion para previsualizar la imagen
  };

  //Funcion para recuperar los demas datos
  const handelchangedata = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Funcion para para devolver o avanzar en el formulario
  const nextForm = (e) => {
    e.preventDefault();
    document.getElementById("active").style.display = "none";
    document.getElementById("data").style.display = "block";
  };
  const backForm = (e) => {
    e.preventDefault();
    document.getElementById("active").style.display = "block";
    document.getElementById("data").style.display = "none";
  };
  

  //Funcion para guardar los datos
  const handelSubmitSaveData = (e) => {
    e.preventDefault();
    const data = {...formData,...avatar}
    console.log(data)
    saveUser(data).then(res => {
      toast.success(res.data.message, {
        duration: 3000,
        position: "top-center",
      });
    }).catch(err => console.log(err));
    navigate('/')
    //console.log(avatar);
    //console.log(formData);
  };
 

  return (
    <ContainerForm>
      <Toaster/>
      <form onSubmit={handelSubmitSaveData}>
        <div className="select-avatar" id="active">
          <h1>Select a photo</h1>
          <div className="avatar">
            {previewavatar ? (
              <img src={previewavatar} alt="avatar" />
            ) : (
              <span>
                <FaCamera />
              </span>
            )}
            <input type="file" name="avatar" onChange={handelchange} />
          </div>
          <button onClick={nextForm}>
            Next <FaArrowRight />
          </button>
        </div>

        <div id="data" className="data">
          <h1>Personal Data</h1>
          <div className="inputs">
            <div className="data-personal">
              <div className="input">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="website"
                  placeholder="website"
                  onChange={handelchangedata}
                />
              </div>
            </div>

            <div className="address">
              <span>Address</span>
              <div className="input">
                <input
                  type="text"
                  name="street"
                  placeholder="street"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="suite"
                  placeholder="suite"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="city"
                  placeholder="city"
                  onChange={handelchangedata}
                />
              </div>
            </div>

            <div className="company">
              <span>Company</span>
              <div className="input">
                <input
                  type="text"
                  name="name_company"
                  placeholder="name_company"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="catchPhrase"
                  placeholder="catchPhrase"
                  onChange={handelchangedata}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  name="bs"
                  placeholder="bs"
                  onChange={handelchangedata}
                />
              </div>
            </div>
          </div>
          <div className="btns">
            <button onClick={backForm}>
              {" "}
              <FaArrowLeft /> Back
            </button>
            <button>
              Save <FaCheck />
            </button>
          </div>
        </div>
      </form>
    </ContainerForm>
  );
}

const ContainerForm = styled.div`
  background-color: #f5f5f5;
  width: 90vw;
  height: 90vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.15);

  form {
    width: 100vw;
    height: 90%;
    display: flex;
    gap: 1rem;

    #active {
      display: inline-block;
    }
    .select-avatar {
      position: relative;
      width: 100%;
      height: 90%;
      display: grid;

      padding-top: 1rem;
      gap: 1rem;

      h1 {
        width: 100%;
        font-size: 50px;
        color: rgba(47, 48, 49, 0.69);
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .avatar {
        margin: auto;
        position: relative;
        background: #f1f1f1;
        border: 1px solid #5e63db;
        width: 200px;
        height: 200px;
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
          cursor: pointer;
        }

        input[type="file"] {
          position: absolute;
          top: 6rem;
          left: 0;
          right: 0;
          display: block;
          transform: scale(11);
          opacity: 0;
        }
        input[type="file"]::-webkit-file-upload-button {
          cursor: pointer;
        }
      }
      button {
        background: #5e63db;
        position: absolute;
        right: 0;
        top: 102%;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: #efeff1;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          background-color: #5e62dbc2;
        }
      }
    }
    #data {
      display: none;
      width: 100%;
    }
    .data {
      width: 100%;
      height: 90%;
      h1 {
        width: 100%;
        font-size: 50px;
        color: rgba(47, 48, 49, 0.69);
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      }
      .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .data-personal {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .address {
          position: relative;
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          span {
            position: absolute;
            top: 0;
            color: rgba(47, 48, 49, 0.69);
            font-weight: 700;
            font-size: 15px;
          }
          .input {
            margin-top: 2rem;
          }
        }
        .company {
          position: relative;
          margin-top: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          span {
            position: absolute;
            top: 0;
            color: rgba(47, 48, 49, 0.69);
            font-weight: 700;
            font-size: 15px;
          }
          .input {
            margin-top: 2rem;
          }
        }
        .input {
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
      }
      .btns {
        height: 40px;
        display: flex;
        justify-content: end;
        margin-top: 6%;
        gap: 1rem;
        button {
          background: #5e63db;
          width: 100px;
          font-size: 15px;
          color: #efeff1;
          border: none;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          :hover {
            background-color: #5e62dbc2;
          }
        }
      }
    }
  }
`;
