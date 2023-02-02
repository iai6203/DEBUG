import React from 'react'
// @seo
import { NextSeo } from 'next-seo'
// @framer
import { motion } from 'framer-motion'
// @mui
import { useTheme } from '@mui/material'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
//
import MainLayout from '@/layouts/MainLayout'
//
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  const theme = useTheme()

  return (
    <>
      <NextSeo title="HOME" />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: '100%', transform: 'translateY(-80px)' }}
      >
        <Badge
          component={motion.span}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          badgeContent="Beta"
          color="warning"
        >
          <Typography
            variant="h1"
            sx={{
              color: theme.colors.primary.main,
              [theme.breakpoints.up('sm')]: {
                fontSize: '5rem',
              },
              [theme.breakpoints.up('lg')]: {
                fontSize: '8rem',
              },
            }}
          >
            DEBUG
          </Typography>
        </Badge>
      </Stack>
    </>
  )
}

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
