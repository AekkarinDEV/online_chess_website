import { useNavigate } from 'react-router'
import styled from 'styled-components'
import {
  Paper,
  Box,
  Button,
  FormControl,
  Typography,
  TextField,
  Link,
  Alert,
  Snackbar,
} from '@mui/material'
import { useState } from 'react'
import { apiAuth } from '../../services/authen/api_auth'
import type { AxiosError } from 'axios'
import type { SnackbarCloseReason } from '@mui/material'

export interface IFormDataSignUp {
  username: string
  email: string
  password: string
  confirm_password: string
}

const LoginContainer = styled(Paper)(() => ({
  width: '300px',
  padding: '10px',
  paddingBottom: '30px',
}))

export const PageSignUp = () => {
  const navigate = useNavigate()
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState<string | null>()
  const [passwordError, setPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState<string | null>()
  const [comfirmPasswordError, setConfirmPasswordError] = useState(false)
  const [comfirmPasswordHelperText, setComfirmPasswordHelperText] = useState<string | null>()

  const [alert, setAlert] = useState(false)
  const [alertMessege, setAlertMessege] = useState('')

  const handleAlertClose = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }

    setAlert(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const eventData = new FormData(event.currentTarget)
    const formData: IFormDataSignUp = {
      username: eventData.get('username') as string,
      password: eventData.get('password') as string,
      email: eventData.get('email') as string,
      confirm_password: eventData.get('confirm_password') as string,
    }
    console.log(formData)

    //validate
    if (!formData.email.includes('@') || !formData.email.includes('.com')) {
      setEmailError(true)
      setEmailHelperText('invalid email')
      return
    } else {
      setEmailError(false)
      setEmailHelperText(null)
    }

    if (formData.password.length < 8) {
      setPasswordError(true)
      setPasswordHelperText('should be atleat 8 charactor long')
      return
    } else {
      setPasswordError(false)
      setPasswordHelperText(null)
    }

    if (formData.confirm_password !== formData.password) {
      setConfirmPasswordError(true)
      setComfirmPasswordHelperText("password don't match")
      return
    } else {
      setConfirmPasswordError(false)
      setComfirmPasswordHelperText(null)
    }

    //api call
    try {
      const reponse = await apiAuth.signUp(formData)
      console.log(reponse)
    } catch (err) {
      console.error(err)
      const error = err as AxiosError
      const { conflict } = error.response?.data as { conflict: string }

      if (conflict === 'email') {
        setAlertMessege('account with this email exists')
        setAlert(true)
        return
      }
      if (conflict === 'username') {
        setAlertMessege('user already exists')
        setAlert(true)
        return
      }
    }
  }

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
          Sign up an account
        </Typography>
        <Typography variant="caption">please fill required infomation</Typography>
        <Box
          component={'form'}
          onSubmit={handleSubmit}
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
              required
              name="email"
              label="email"
              placeholder="your@email.com"
              error={emailError}
              helperText={emailHelperText}
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
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="password"
              type="password"
              name="password"
              required
              label="password"
              placeholder="•••••••••"
              error={passwordError}
              helperText={passwordHelperText}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              id="comfirm_password"
              type="password"
              name="confirm_password"
              required
              label="comfirm password"
              placeholder="•••••••••"
              error={comfirmPasswordError}
              helperText={comfirmPasswordHelperText}
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
      <Snackbar
        open={alert}
        autoHideDuration={2500}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">{alertMessege}</Alert>
      </Snackbar>
    </LoginContainer>
  )
}
