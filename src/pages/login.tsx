import { Card, CardContent, Paper, styled } from '@mui/material'

export const PageLogin = () => {
  const LoginContainer = styled(Paper)(() => ({
    width: '300px',
    padding: '10px',
  }))
  return (
    <LoginContainer>
      <Card sx={{
        boxShadow: 'none'
      }}>
        <CardContent>
            
        </CardContent>
      </Card>
    </LoginContainer>
  )
}
