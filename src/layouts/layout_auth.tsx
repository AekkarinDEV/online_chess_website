import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { ThemeController } from '../theme/theme'

export const LayoutAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/auth') {
      navigate('/auth/sign_in')
    }
  }, [navigate, location])

  return (
    <ThemeController>
      <Box
        sx={{
          width: '100dvw',
          height: '100dvh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/black-wooden-plank.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Outlet />
      </Box>
    </ThemeController>
  )
}
