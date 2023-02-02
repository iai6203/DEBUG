import React from 'react'
// @framer
import { motion } from 'framer-motion'
// @mui
import { useTheme, alpha } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
//
import MenuList from '@/components/Header/MenuList'
import ToggleSidebarButton from '@/components/Header/ToggleSidebarButton'

const Header = () => {
  const theme = useTheme()

  return (
    <AppBar
      component={motion.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        height: '80px',
        backgroundColor: alpha(theme.colors.common.white, 0.8),
        backdropFilter: 'blur(6px)',
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          {/* Left */}
          <Box>
            <MenuList />
            <ToggleSidebarButton />
          </Box>
        </Stack>
      </Container>
    </AppBar>
  )
}

export default Header
