import React from 'react'
// @store
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks'
import { closeMobileSidebar } from '@/lib/store/features/mobileSidebar'
// @mui
import { useTheme } from '@mui/material'
import Drawer from '@mui/material/Drawer'
//
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const SidebarDrawer = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.mobileSidebar.open)
  const theme = useTheme()

  const handleClose = () => dispatch(closeMobileSidebar())

  return (
    <Drawer
      open={open}
      sx={{
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }}
      onClose={handleClose}
    >
      {children}
    </Drawer>
  )
}

export default SidebarDrawer
