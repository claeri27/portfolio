import { createContext } from 'react'

interface Props {
  dark: boolean
  toggleDark: () => void
}

export const Context = createContext<Props>({ dark: false, toggleDark: () => null })
