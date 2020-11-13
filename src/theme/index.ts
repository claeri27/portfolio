import type { DefaultTheme } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

export const lightTheme = {
  text: 'white',
}

export const darkTheme = {
  text: 'white',
}

export const theme: DefaultTheme = {
  colors: { ...lightTheme },
}

export { CssBaseline, MuiAppBar, Button, GitHubIcon, EmailIcon, Box, Typography, Divider }
