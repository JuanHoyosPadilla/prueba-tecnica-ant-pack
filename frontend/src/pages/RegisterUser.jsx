import React from 'react'
import Form from '../components/Form'
import styled from 'styled-components'

export default function RegisterUser() {
  return (
    <ContainerPages>
      <Form/>
    </ContainerPages>
  )
}

const ContainerPages = styled.div `
position: absolute;
left: 100px;
top: 2rem;

`
