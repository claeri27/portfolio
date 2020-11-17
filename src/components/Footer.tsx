import React, { FC, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Box, Slide, Typography } from '@/theme/material'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ theme }) => theme.height.footer};
  background: #3f51b5;
`

const FooterContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`

const Text = styled(Typography)``

export const Footer: FC = () => {
  const [checked, setChecked] = useState(false)
  const { transitions } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), transitions.footer.in)
    return () => clearTimeout(timer)
  })

  return (
    <Slide direction="up" in={checked} timeout={transitions.footer.timeout}>
      <StyledFooter>
        <FooterContent>
          <Text>Made with React</Text>
        </FooterContent>
      </StyledFooter>
    </Slide>
  )
}
