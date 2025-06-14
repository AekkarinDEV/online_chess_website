import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router'

export const DrawerMenu = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: '16px',
      }}
    >
      <Button variant="contained" sx={{ width: '80%' }} onClick={() => navigate('/auth/sign_in')}>
        Sign in
      </Button>
    </Box>
  )
}
