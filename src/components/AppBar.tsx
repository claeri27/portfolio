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
  Link,
  MoonIcon,
  MuiAppBar,
  Slide,
  SunIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@/theme/material'
import { Menu } from './Menu'
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
  font-size: 1.5rem;
  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 2rem;
  }
`

const StyledRouteButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 0.7rem;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 0.85rem;
    padding: 1rem;
  }
`

const SocialMediaContainer = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
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
  font-family: 'Caveat', cursive;
  margin-left: 0.8rem;
  margin-right: 0.4rem;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-right: 0.6rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-right: 0;
  }
`

export const AppBar: FC = () => {
  const [checked, setChecked] = useState(false)
  const { dark, toggleDark } = useContext(Context)
  const { transitions, breakpoints } = useTheme()
  const navigate = useNavigate()

  const isDesktop = useMediaQuery(breakpoints.desktop)
  const isTablet = useMediaQuery(breakpoints.tablet)
  const isMobile = !isTablet && !isDesktop

  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), transitions.appBar.in)
    return () => clearTimeout(timer)
  }, [])

  const routeToAbout = () => navigate('about')
  const routeToPortfolio = () => navigate('portfolio')
  const routeToContact = () => navigate('contact')

  return (
    <Slide in={checked} timeout={transitions.appBar.timeout}>
      <StyledAppBar>
        {(isTablet || isDesktop) && (
          <NameAndLogo onClick={() => navigate('/')}>
            <StyledAvatar>CL</StyledAvatar>
            <StyledName>Christopher Laeri</StyledName>
          </NameAndLogo>
        )}
        {isDesktop && (
          <RouteButtons>
            <StyledRouteButton onClick={routeToAbout}>About</StyledRouteButton>
            <StyledRouteButton onClick={routeToPortfolio}>Portfolio</StyledRouteButton>
            <StyledRouteButton onClick={routeToContact}>Contact</StyledRouteButton>
            <StyledDivider orientation="vertical" flexItem />
            <Tooltip title="Toggle theme" aria-label="theme">
              <StyledIconButton onClick={toggleDark}>{dark ? <MoonIcon /> : <SunIcon />}</StyledIconButton>
            </Tooltip>
            <Tooltip title="Visit Github" aria-label="github">
              <StyledIconButton>
                <SocialMediaContainer href={SNOWPACK_PUBLIC_GITHUB_URL}>
                  <GitHubIcon />
                </SocialMediaContainer>
              </StyledIconButton>
            </Tooltip>
            <Tooltip title="Send email" aria-label="email">
              <StyledIconButton style={{ marginRight: '.5rem' }}>
                <SocialMediaContainer href={SNOWPACK_PUBLIC_EMAIL_URL}>
                  <EmailIcon />
                </SocialMediaContainer>
              </StyledIconButton>
            </Tooltip>
          </RouteButtons>
        )}
        {isTablet && !isDesktop && (
          <RouteButtons>
            <StyledRouteButton onClick={routeToAbout}>About</StyledRouteButton>
            <StyledRouteButton onClick={routeToPortfolio}>Portfolio</StyledRouteButton>
            <StyledRouteButton onClick={routeToContact}>Contact</StyledRouteButton>
            <StyledDivider orientation="vertical" flexItem />
            <Menu />
          </RouteButtons>
        )}
        {isMobile && (
          <>
            <NameAndLogo onClick={() => navigate('/')}>
              <StyledAvatar>CL</StyledAvatar>
            </NameAndLogo>
            <StyledRouteButton onClick={routeToAbout}>About</StyledRouteButton>
            <StyledRouteButton onClick={routeToPortfolio}>Portfolio</StyledRouteButton>
            <StyledRouteButton onClick={routeToContact}>Contact</StyledRouteButton>
            <Menu />
          </>
        )}
      </StyledAppBar>
    </Slide>
  )
}
