import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa"; //iconos
import toast, { Toaster } from "react-hot-toast"; //Toast

//Servicios
import { updateUser } from "../services/services.js";

export default function ModalEditUser({
  handelOpenCloseModalEdit,
  userDetail,
}) {
  const addrees = Object.assign({}, userDetail.address); // Copia del objeto address
  const company = Object.assign({}, userDetail.company); // Copia del objeto company

  const [newDataUser, setNewDataUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    name_company: "",
    catchPhrase: "",
    bs: "",
  });

  useEffect(() => {
    setNewDataUser({
      name: userDetail.name,
      username: userDetail.username,
      email: userDetail.email,
      phone: userDetail.phone,
      website: userDetail.website,
      street: addrees.street,
      suite: addrees.suite,
      city: addrees.city,
      name_company: company.name,
      catchPhrase: company.catchPhrase,
      bs: company.bs,
    });
  }, [userDetail]);

  //Funcion para recuperar los demas datos
  const handelchangedata = (e) => {
    setNewDataUser({ ...newDataUser, [e.target.name]: e.target.value });
  };

  const handelSutmitUpdate = (e) => {
    e.preventDefault();
    updateUser(userDetail._id, newDataUser)
      .then((res) => {
        console.log(res)
        toast.success(res.data.message, {
          duration: 3000,
          position: "top-center",
        });
        handelOpenCloseModalEdit()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerModal>
      <Toaster/>
      <div className="modal">
        <div className="header">
          <FaWindowClose
            className="icon"
            onClick={() => handelOpenCloseModalEdit()}
          />
        </div>
        <form onSubmit={handelSutmitUpdate} className="body">
          <div className="avatar">
            <img src="" alt="avatar" />
          </div>
          <div className="firtData">
            <div>
              <span>Name</span>
              <div className="input">
                <input
                  type="text"
                  value={newDataUser.name}
                  name="name"
                  onChange={handelchangedata}
                />
              </div>
            </div>

            <div>
              <span>Username</span>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  value={newDataUser.username}
                  disabled
                />
              </div>
            </div>

            <div>
              <span>Email</span>
              <div className="input">
                <input
                  type="text"
                  value={newDataUser.email}
                  name="email"
                  placeholder="Email"
                  disabled
                />
              </div>
            </div>
            <div>
              <span>Phone</span>
              <div className="input">
                <input
                  type="text"
                  name="phone"
                  value={newDataUser.phone}
                  onChange={handelchangedata}
                />
              </div>
            </div>
            <div>
              <span>Website</span>
              <div className="input">
                <input
                  type="text"
                  name="website"
                  value={newDataUser.website}
                  onChange={handelchangedata}
                />
              </div>
            </div>
          </div>
          <div className="addressData">
            <h6>Address</h6>
            <div>
              <span>Street</span>
              <div className="input">
                <input
                  type="text"
                  value={newDataUser.street}
                  name="street"
                  disabled
                />
              </div>
            </div>
            <div>
              <span>Suite</span>
              <div className="input">
                <input
                  type="text"
                  value={newDataUser.suite}
                  name="suite"
                  disabled
                />
              </div>
            </div>
            <div>
              <span>City</span>
              <div className="input">
                <input
                  type="text"
                  value={newDataUser.city}
                  name="city"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="companyData">
            <h6>Company</h6>
            <div>
              <span>Name:</span>
              <div className="input">
                <input
                  type="text"
                  name="name_company"
                  value={newDataUser.name_company}
                  disabled
                />
              </div>
            </div>
            <div>
              <span>CatchPhrase:</span>
              <div className="input">
                <input
                  type="text"
                  name="catchPhrase"
                  value={newDataUser.catchPhrase}
                  disabled
                />
              </div>
            </div>
            <div>
              <span>Bs:</span>
              <div className="input">
                <input type="text" name="bs" value={newDataUser.bs} disabled />
              </div>
            </div>
          </div>
          <div className="btns">
            <button>Update</button>
            <button onClick={() => handelOpenCloseModalEdit()}>Calcel</button>
          </div>
        </form>
      </div>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  position: fixed;
  background-color: #000000b7;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: #ffffff;
    border-radius: 10px;
    width: 70%;
    height: 95%;
    .header {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: end;
      align-items: center;
      padding-right: 2rem;

      .icon {
        cursor: pointer;
        font-size: 25px;
        color: #5e63db;
        :hover {
          color: #5e62dbb5;
        }
      }
    }
    .body {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      .avatar {
        margin-top: -2.5rem;
        position: relative;
        background: #f1f1f1;
        border: 1px solid #5e63db;
        width: 150px;
        height: 150px;
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
      .firtData {
        margin-top: -1rem;
        display: grid;
        width: 70%;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.5rem;
        padding: 10px;
        justify-content: space-around;
        margin-left: 50px;
        border-bottom: 1px solid #5e63db;

        span {
          color: #000000;
          font-weight: 700;
          font-size: 12px;
        }
        p {
          font-size: 10px;
          font-weight: 400;
        }
        .input {
          width: 200px;
          height: 30px;

          input {
            width: 60%;
            height: 100%;
            border: none;

            background-color: transparent;
            outline: none;
            border-bottom: 1px solid #5e63db;
            color: #5e63db;
          }
        }
      }
      .addressData {
        position: relative;
        display: grid;
        width: 70%;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.5rem;
        padding: 10px;
        justify-content: space-around;
        margin-left: 50px;
        border-bottom: 1px solid #5e63db;
        h6 {
          position: absolute;
          left: 10px;
          top: 0;
          color: #000000;
          font-weight: 700;
          font-size: 15px;
        }
        div {
          margin-top: 1rem;
        }
        span {
          color: #000000;
          font-weight: 700;
          font-size: 12px;
        }
        p {
          font-size: 10px;
          font-weight: 400;
        }
        .input {
          width: 200px;
          height: 30px;

          input {
            width: 60%;
            height: 100%;
            border: none;

            background-color: transparent;
            outline: none;
            border-bottom: 1px solid #5e63db;
            color: #5e63db;
          }
        }
      }
      .companyData {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-content: left;
        margin-left: 50px;
        border-bottom: 1px solid #5e63db;
        padding-left: 10px;
        padding-bottom: 5px;
        h6 {
          color: #000000;
          font-weight: 700;
          font-size: 15px;
        }
        div {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        span {
          color: #000000;
          font-weight: 700;
          font-size: 12px;
        }
        p {
          font-size: 10px;
          font-weight: 400;
        }
        .input {
          width: 200px;
          height: 30px;

          input {
            width: 60%;
            height: 100%;
            border: none;

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
