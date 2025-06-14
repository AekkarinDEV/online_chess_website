import { Avatar, Box, Drawer, IconButton, Typography } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze'
import styled from 'styled-components'
import { useState } from 'react'
import { DrawerMenu } from '../menu'

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
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen)
  }
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
        <DehazeIcon fontSize="inherit" onClick={toggleDrawer(true)} />
      </IconButton>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={{ width: '250px' }} onClick={toggleDrawer(false)}>
          <DrawerMenu />
        </Box>
      </Drawer>
    </HeaderContainer>
  )
}
