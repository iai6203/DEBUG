import React from 'react'
// @store
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks'
import { openMobileSidebar } from '@/lib/store/features/mobileSidebar'
// @mui
import { useTheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const ToggleSidebarButton = () => {
  const dispatch = useAppDispatch()
  const theme = useTheme()

  const open = useAppSelector((state) => state.mobileSidebar.open)

  const handleClick = () => dispatch(openMobileSidebar())

  return (
    <IconButton
      sx={{
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }}
      onClick={handleClick}
    >
      {open ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
    </IconButton>
  )
}

export default ToggleSidebarButton
