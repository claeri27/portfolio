import React, { FC } from 'react'
import styled from 'styled-components'
import { Typography } from '@/theme'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background: #3f51b5;
`

const Text = styled(Typography)``

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Text>Made with React</Text>
    </StyledFooter>
  )
}
