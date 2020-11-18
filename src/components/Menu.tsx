import React, { FC, KeyboardEvent, MouseEvent, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Context } from '@/context'
import {
  Box,
  ClickAwayListener,
  Divider,
  EmailIcon,
  GitHubIcon,
  IconButton,
  MenuIcon,
  MenuItem,
  MenuList,
  MoonIcon,
  Paper,
  Popper,
  Slide,
  SunIcon,
  Typography,
} from '@/theme/material'

const StyledIconButton = styled(IconButton)`
  margin-right: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-left: 0.6rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: auto;
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  font-size: 1.8rem;
  color: white;
`

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledMobileIcon = styled(Box)`
  display: flex;
  margin-left: 0.8rem;
  margin-right: 0.1rem;
`

const StyledTypography = styled(Typography)`
  display: flex;
  min-width: 5.5rem;
  font-size: 0.75rem;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    min-width: 7rem;
    font-size: 1rem;
  }
`

export const Menu: FC = () => {
  const [open, setOpen] = useState(false)
  const { dark, toggleDark } = useContext(Context)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const prevOpen = useRef(open)

  // return focus to the button when we transitioned from !open -> open
  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current!.focus()
    prevOpen.current = open
  }, [open])

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return
    setOpen(false)
  }

  const handleListKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <>
      <StyledIconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}>
        <StyledMenuIcon />
      </StyledIconButton>
      <Popper style={{ zIndex: -50 }} open={open} anchorEl={anchorRef.current} role={undefined} transition>
        {({ TransitionProps, placement }) => (
          <Slide
            {...TransitionProps}
            timeout={700}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <StyledMenuItem onClick={toggleDark}>
                    <StyledTypography>{dark ? 'Light' : 'Dark'} Theme</StyledTypography>
                    <Divider orientation="vertical" flexItem />
                    <StyledMobileIcon>{dark ? <MoonIcon /> : <SunIcon />}</StyledMobileIcon>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledTypography>Github Repo</StyledTypography>
                    <Divider orientation="vertical" flexItem />
                    <StyledMobileIcon>
                      <GitHubIcon />
                    </StyledMobileIcon>
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleClose}>
                    <StyledTypography>Send Email</StyledTypography>
                    <Divider orientation="vertical" flexItem />
                    <StyledMobileIcon>
                      <EmailIcon />
                    </StyledMobileIcon>
                  </StyledMenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Slide>
        )}
      </Popper>
    </>
  )
}
