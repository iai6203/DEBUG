import React from 'react'
// @next
import { useRouter } from 'next/router'
import Link from 'next/link'
// @store
import { useAppSelector } from '@/lib/store/hooks'
// @mui
import { alpha, useTheme } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'

const MenuList = () => {
  const router = useRouter()
  const menus = useAppSelector((state) => state.menu.menus)
  const theme = useTheme()

  return (
    <List
      sx={{
        p: 0,
        display: 'none',

        [theme.breakpoints.up('md')]: {
          display: 'flex',
          gap: '10px',
        },
      }}
    >
      {menus.map((menu) => (
        <ListItem key={menu.id} sx={{ p: 0 }}>
          <ListItemButton
            component={Link}
            href={menu.href}
            selected={menu.href === router.pathname}
            sx={{
              position: 'relative',
              color: theme.colors.grey['800'],
              fontSize: '14px',
              fontWeight: 600,
              transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

              '&:hover': {
                color: alpha(theme.colors.grey['800'], 0.48),
                backgroundColor: 'transparent',
              },
              '&.Mui-selected': {
                color: theme.colors.primary.main,
                backgroundColor: 'transparent',

                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&::before': {
                  content: "''",
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  width: '6px',
                  height: '6px',
                  backgroundColor: alpha(theme.colors.primary.main, 0.48),
                  borderRadius: '50%',
                  transform: 'translateY(-45%)',
                },
              },
            }}
          >
            {menu.title}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default MenuList
