import { Avatar, Box, IconButton, Typography } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import styled from 'styled-components'

const HeaderContainer = styled(Box)(() => ({
  width: '100dvw',
  height: '64px',
  // borderBottom: '1px  solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 16px',
}))

export const HeaderApp = () => {
  return (
    <HeaderContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Avatar sizes="small" src="" variant="rounded" />
        <Box>
          <Typography fontSize={'18px'}>guest#3425</Typography>
          <Typography
            sx={{
              fontSize: '12px',
            }}
          >
            ELO: 1200
          </Typography>
        </Box>
      </Box>
      <IconButton size="large">
        <DehazeIcon fontSize="inherit" />
      </IconButton>
    </HeaderContainer>
  )
}
