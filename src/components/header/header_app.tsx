import { Avatar, Box, Typography } from '@mui/material'
import styled from 'styled-components'

export const HeaderApp = () => {
  const HeaderContainer = styled(Box)(() => ({
    width: '100dvw',
    height: '50px',
    borderBottom: '1px  solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 10px',
  }))
  return (
    <HeaderContainer>
      <Typography variant="h6">Middle chess</Typography>
      <Avatar sizes="small" />
    </HeaderContainer>
  )
}
