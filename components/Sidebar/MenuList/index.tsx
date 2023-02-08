import React from 'react'
// @next
import { useRouter } from 'next/router'
import Link from 'next/link'
// @redux
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks'
import { closeMobileSidebar } from '@/lib/store/features/mobileSidebar'
// @mui
import { useTheme, alpha } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const MenuList = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const menus = useAppSelector((state) => state.menu.menus)
  const theme = useTheme()

  return (
    <Box component="div">
      <List sx={{ p: 0 }}>
        {menus.map((menu) => (
          <ListItem key={menu.id} sx={{ p: 0 }}>
            <ListItemButton
              component={Link}
              href={menu.href}
              selected={router.pathname === menu.href}
              sx={{
                position: 'relative',
                p: '0 0 0 40px',

                '&.Mui-selected': {
                  backgroundColor: 'transparent',

                  '&::before': {
                    content: "''",
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: alpha(theme.colors.primary.main, 0.48),
                    borderRadius: '50%',
                    transform: 'translateY(-45%)',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },

                  '& .MuiListItemText-primary': {
                    color: theme.colors.primary.main,
                  },
                },
                '&:hover': {
                  backgroundColor: 'transparent',

                  '& .MuiListItemText-primary': {
                    color: theme.colors.primary.main,
                  },
                },

                '& .MuiListItemText-primary': {
                  color: theme.colors.grey['600'],
                  fontSize: '12px',
                  fontWeight: 600,
                  transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
              }}
              onClick={() => {
                dispatch(closeMobileSidebar())
              }}
            >
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default MenuList
