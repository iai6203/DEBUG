import React from 'react'
// @mui
import Box from '@mui/material/Box'
//
import Header from '@/components/Header'
import SidebarDrawer from '@/components/SidebarDrawer'
import Sidebar from '@/components/Sidebar'
//
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SidebarDrawer>
        <Sidebar />
      </SidebarDrawer>
      <Box component="div" sx={{ pt: '80px', height: '100%' }}>
        {children}
      </Box>
    </>
  )
}

export default MainLayout
