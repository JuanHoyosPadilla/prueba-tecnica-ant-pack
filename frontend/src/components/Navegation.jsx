import React from 'react';
import styled from 'styled-components'
import { FaUserFriends,FaUserPlus } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Navegation() {
  return (
    <ContainerNav>
      <div className="logo">
        <span>PT</span>
      </div>
      <ul className="links">
         <li><Link to="/" ><FaUserFriends/></Link></li>
         <li><Link to="/register" ><FaUserPlus/></Link></li>
      </ul>
    </ContainerNav>
  )
}

const ContainerNav = styled.div`
  background-color: #5E63DB;
  width: 80px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .logo {
    background-color: #f1f1f1ae;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
  }

  .links {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 1rem;
    li{
      display: flex;
      justify-content: center;
      a {
        background-color:#e3dfdf1a ;
        font-size: 30px;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        transition: all 0.3s ease-in-out;

        :hover {
          background-color: #f1f1f147;
          color: #e0dbdb;
        }
      }
    }
    
  }
`
