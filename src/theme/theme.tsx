import type { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

export const ThemeController = ({ children }: { children: ReactNode }) => {
  const appTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    
  })
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
