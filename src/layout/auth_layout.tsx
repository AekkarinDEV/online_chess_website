import { Outlet } from 'react-router'
import { Container } from '@mui/material'

export const AuthLayout = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  )
}
