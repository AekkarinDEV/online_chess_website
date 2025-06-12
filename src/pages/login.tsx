import { Box, Button, FormControl, Link, Paper, styled, TextField, Typography } from '@mui/material'

export const PageLogin = () => {
  const LoginContainer = styled(Paper)(() => ({
    width: '300px',
    padding: '10px',
    paddingBottom: '30px',
  }))
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
          Hello! Player
        </Typography>
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
              id="password"
              type="password"
              required
              label="password"
              placeholder="•••••••••"
            />
          </FormControl>
          <Button type="submit" variant="outlined">
            Sign in
          </Button>
          <Typography sx={{ alignSelf: 'center' }}>
            Don&apos;t have an account? <Link>Sign up</Link>
          </Typography>
        </Box>
      </Box>
    </LoginContainer>
  )
}
