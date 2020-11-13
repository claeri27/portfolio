import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '@/theme'

const ContainerOne = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  background: red;
`

const ContainerTwo = styled(ContainerOne)`
  background: orange;
`

const ContainerThree = styled(ContainerOne)`
  background: green;
`

export const Home: FC = () => {
  return (
    <>
      <ContainerOne>This is home 1</ContainerOne>
      <ContainerTwo>This is home 2</ContainerTwo>
      <ContainerThree>This is home 3</ContainerThree>
    </>
  )
}
