import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Switch, MuiAppBar, Button, GitHubIcon, EmailIcon, Box, Typography, Divider } from '@/theme'
import { Context } from '@/context'

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

const GithubContainer = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
`

const EmailContainer = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
`

const SwitchContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const AppBar: FC = () => {
  const navigate = useNavigate()
  const { toggleDark } = useContext(Context)

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
        <SwitchContainer>
          <Switch onChange={() => toggleDark()} />
        </SwitchContainer>
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
