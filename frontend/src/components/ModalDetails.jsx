import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa"; //iconos

export default function ModalDetails({handelOpenCloseModal,userDetail}) {
  const addrees = Object.assign({},userDetail.address) // Copia del objeto address
  const company = Object.assign({},userDetail.company) // Copia del objeto company
  
  return (
    <ContainerModal>
      <div className="modal">
        <div className="header">
          <FaWindowClose className="icon" onClick={ handelOpenCloseModal} />
        </div>
        <div className="body">
          <div className="avatar">
            <img src="" alt="avatar" />
          </div>
          <div className="firtData"> 
            <div>
              <span>Name</span>
              <p>{userDetail.name}</p>
            </div>

            <div>
              <span>Username</span>
              <p>{userDetail.username}</p>
            </div>

            <div>
              <span>Email</span>
              <p>{userDetail.email}</p>
            </div>
            <div>
              <span>Phone</span>
              <p>{userDetail.phone}</p>
            </div>
            <div>
              <span>Website</span>
              <p>{userDetail.website}</p>
            </div>
          </div>
          <div className="addressData">
            <h6>Address</h6>
            <div>
              <span>Street</span>
              <p>{addrees.street}</p>
            </div>
            <div>
              <span>Suite</span>
              <p>{addrees.suite}</p>
            </div>
            <div>
              <span>City</span>
              <p>{addrees.city}</p>
            </div>
          </div>
          <div className="companyData">
            <h6>Company</h6>
            <div>
              <span>Name:</span>
              <p>{company.name}</p>
            </div>
            <div>
              <span>CatchPhrase:</span>
              <p>{company.catchPhrase}</p>
            </div>
            <div>
              <span>Bs:</span>
              <p>{company.bs}</p>
            </div>
          </div>
        </div>
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
        margin: auto;
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
      }
      .companyData {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-content: left;
        margin-left: 50px;
        border-bottom: 1px solid #5e63db;
        padding-left: 10px;
        h6 {
          color: #000000;
          font-weight: 700;
          font-size: 15px;
        }
        div{
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
      }
    }
  }
`;
