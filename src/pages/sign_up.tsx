import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { Paper, Box, Button, FormControl, Typography, TextField, Link } from '@mui/material'

const LoginContainer = styled(Paper)(() => ({
  width: '300px',
  padding: '10px',
  paddingBottom: '30px',
}))
export const PageSignUp = () => {
  const navigate = useNavigate()

  return (
    <LoginContainer elevation={10}>
      <Box
        sx={{
          boxShadow: 'none',
          display: 'flex',

          alignItems: 'center',
        }}
      >
        <img
          alt="middle_chess_logo"
          src="/logo/chess_icons.png"
          style={{
            width: '30px',
          }}
        />
      </Box>

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
          }}
        >
          Sign up account
        </Typography>
        <Typography variant="caption">please fill required infomation</Typography>
        <Box
          component={'form'}
          sx={{
            width: '90%',
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="email"
              type="email"
              required
              name="email"
              label="email"
              placeholder="your@email.com"
              sx={{
                padding: '1px',
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="usename"
              type="username"
              required
              name="username"
              label="username"
              placeholder="inwza007"
              sx={{
                padding: '1px',
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="password"
              type="password"
              required
              label="password"
              placeholder="•••••••••"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="comfirm_password"
              type="password"
              required
              label="comfirm password"
              placeholder="•••••••••"
            />
          </FormControl>
          <Button type="submit" variant="outlined">
            Sign up
          </Button>
          <Typography sx={{ alignSelf: 'center' }}>
            Already have an account? <Link onClick={() => navigate('/auth/sign_in')}>Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </LoginContainer>
  )
}
