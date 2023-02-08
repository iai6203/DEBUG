import React from 'react'
// @mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
//
import MenuList from '@/components/Sidebar/MenuList'

const Sidebar = () => {
  const theme = useTheme()

  return (
    <Box
      component="div"
      sx={{
        width: '290px',
        height: '100%',
        backgroundColor: theme.colors.common.white,
      }}
    >
      <Box component="div" sx={{ py: 5 }}>
        <MenuList />
      </Box>
    </Box>
  )
}

export default Sidebar
