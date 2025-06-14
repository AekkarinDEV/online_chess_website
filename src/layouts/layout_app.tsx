import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router'
import { ThemeController } from '../theme/theme'
import { HeaderApp } from '../components/header'

export const LayoutApp = () => {
  const AppContainer = styled(Box)(() => ({
    width: '100dvw',
    height: '100dvh',
    backgroundImage: 'url("/images/black-wooden-plank.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
