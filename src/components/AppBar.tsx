import React, { FC } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { MuiAppBar, Button, GitHubIcon, EmailIcon, Box, Typography, Divider } from '@/theme'

const StyledDivider = styled(Divider)`
  background: gray;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

const StyledAppBar = styled(MuiAppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
`

const RouteButtons = styled(Box)`
  display: flex;
`

const Name = styled(Box)`
  display: flex;
  align-items: center;
`

const StyledHomeButton = styled(Typography)`
  padding: 0.8rem;
  margin-left: 0.8rem;
  font-family: 'Caveat', cursive;
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`

const StyledAboutButton = styled(Button)`
  padding: 0.8rem;
  color: white;
`

const StyledPortfolioButton = styled(Button)`
  padding: 0.8rem;
  color: white;
`

const StyledContactButton = styled(Button)`
  padding: 0.8rem;
  color: white;
`

const GithubContainer = styled(Button)`
  color: white;
`

const EmailContainer = styled(Button)`
  color: white;
`

export const AppBar: FC = () => {
  const navigate = useNavigate()

  return (
    <StyledAppBar position="static">
      <Name>
        <StyledHomeButton onClick={() => navigate('/')}>Christopher Laeri</StyledHomeButton>
      </Name>
      <RouteButtons>
        <StyledAboutButton onClick={() => navigate('about')}>About</StyledAboutButton>
        <StyledPortfolioButton onClick={() => navigate('portfolio')}>Portfolio</StyledPortfolioButton>
        <StyledContactButton onClick={() => navigate('contact')}>Contact</StyledContactButton>
        <StyledDivider orientation="vertical" flexItem />
        <GithubContainer>
          <GitHubIcon />
        </GithubContainer>
        <EmailContainer>
          <EmailIcon />
        </EmailContainer>
      </RouteButtons>
    </StyledAppBar>
  )
}
