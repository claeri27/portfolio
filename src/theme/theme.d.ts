import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
    }
    breakpoints: {
      desktop: string
      tablet: string
    }
    height: {
      appBar: string
      footer: string
    }
    transitions: {
      appBar: {
        in: number
        timeout: number
      }
      footer: {
        in: number
        timeout: number
      }
      loading: {
        in: number
        timeout: {
          enter: number
          exit: number
        }
      }
    }
  }
}
