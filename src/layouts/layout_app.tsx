import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router'
import { ThemeController } from '../theme/theme'
import { HeaderApp } from '../components/header'

export const LayoutApp = () => {
  const AppContainer = styled(Box)(() => ({
    width: '100dvw',
    height: '100dvh',
  }))

  return (
    <ThemeController>
      <AppContainer>
        <HeaderApp />
        <Outlet />
      </AppContainer>
    </ThemeController>
  )
}
