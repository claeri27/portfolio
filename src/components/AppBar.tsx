import React, { FC, useContext, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useNavigate } from 'react-router'
import { Context } from '@/context'
import {
  Avatar,
  Box,
  Button,
  Divider,
  EmailIcon,
  GitHubIcon,
  IconButton,
  MoonIcon,
  MuiAppBar,
  Slide,
  SunIcon,
  Typography,
} from '@/theme/material'
const { SNOWPACK_PUBLIC_GITHUB_URL, SNOWPACK_PUBLIC_EMAIL_URL } = import.meta.env

const StyledDivider = styled(Divider)`
  background: gray;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

const StyledAppBar = styled(MuiAppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${({ theme }) => theme.height.appBar};
`

const RouteButtons = styled(Box)`
  display: flex;
`

const NameAndLogo = styled(Box)`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const StyledName = styled(Typography)`
  padding: 0.8rem;
  font-family: 'Caveat', cursive;
  font-size: 2rem;
`

const StyledAboutButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.8rem;
`

const StyledPortfolioButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.8rem;
`

const StyledContactButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.8rem;
`

const SocialMediaContainer = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const StyledIconButton = styled(IconButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`

const StyledAvatar = styled(Avatar)`
  background: purple;
  margin-left: 0.8rem;
  font-family: 'Caveat', cursive;
`

export const AppBar: FC = () => {
  const [checked, setChecked] = useState(false)
  const { dark, toggleDark } = useContext(Context)
  const { transitions } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), transitions.appBar.in)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Slide in={checked} timeout={transitions.appBar.timeout}>
      <StyledAppBar position="static">
        <NameAndLogo onClick={() => navigate('/')}>
          <StyledAvatar>CL</StyledAvatar>
          <StyledName>Christopher Laeri</StyledName>
        </NameAndLogo>
        <RouteButtons>
          <StyledAboutButton onClick={() => navigate('about')}>About</StyledAboutButton>
          <StyledPortfolioButton onClick={() => navigate('portfolio')}>Portfolio</StyledPortfolioButton>
          <StyledContactButton onClick={() => navigate('contact')}>Contact</StyledContactButton>
          <StyledDivider orientation="vertical" flexItem />
          <StyledIconButton onClick={() => toggleDark()}>{dark ? <MoonIcon /> : <SunIcon />}</StyledIconButton>
          <StyledIconButton>
            <SocialMediaContainer href={SNOWPACK_PUBLIC_GITHUB_URL}>
              <GitHubIcon />
            </SocialMediaContainer>
          </StyledIconButton>
          <StyledIconButton style={{ marginRight: '.5rem' }}>
            <SocialMediaContainer href={SNOWPACK_PUBLIC_EMAIL_URL}>
              <EmailIcon />
            </SocialMediaContainer>
          </StyledIconButton>
        </RouteButtons>
      </StyledAppBar>
    </Slide>
  )
}
