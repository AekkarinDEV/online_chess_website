import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

export const LayoutAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/auth') {
      navigate('/auth/login')
    }
  }, [navigate, location])

  return (
    <Box
      sx={{
        width: '100dvw',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Outlet />
    </Box>
  )
}
