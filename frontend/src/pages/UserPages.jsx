import React from 'react'
import styled from 'styled-components'

//Importaciones de componentes
import Userview from '../components/Userview'

export default function UserPages() {
  return (
    <ContainerPages>
      <Userview/>
    </ContainerPages>
  )
}

const ContainerPages = styled.div `
position: absolute;
left: 100px;
top: 2rem;
`
