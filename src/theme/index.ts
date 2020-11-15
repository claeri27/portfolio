import type { DefaultTheme } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch'
import Avatar from '@material-ui/core/Avatar'
import StylesProvider from '@material-ui/styles/StylesProvider'

export const lightTheme = {
  colors: {
    text: 'white',
    background: '#303030',
  },
}

export const darkTheme = {
  colors: {
    text: 'white',
    background: '#303030',
  },
}

export const theme: DefaultTheme = { ...lightTheme }

export {
  Avatar,
  Switch,
  CssBaseline,
  MuiAppBar,
  Button,
  GitHubIcon,
  EmailIcon,
  Box,
  Typography,
  Divider,
  StylesProvider,
}
