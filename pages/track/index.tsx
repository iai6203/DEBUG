import React from 'react'
// @seo
import { NextSeo } from 'next-seo'
// @redux
import { useGetTracksQuery } from '@/lib/store/services/endpoints/tracks'
// @framer
import { AnimatePresence, motion } from 'framer-motion'
// @mui
import { useTheme, useMediaQuery, alpha } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
//
import MainLayout from '@/layouts/MainLayout'
//
import type { NextPageWithLayout } from '@/pages/_app'

interface TrackItemProps {
  title: string
  src: string
}

const Loader = () => {
  const theme = useTheme()

  return (
    <Container>
      <Grid container spacing={1}>
        {Array.from(Array(12).keys()).map((key) => (
          <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
            <Skeleton
              variant="rounded"
              sx={{
                height: '393px',
                [theme.breakpoints.up('sm')]: { height: '358px' },
                [theme.breakpoints.up('md')]: { height: '322px' },
                [theme.breakpoints.up('lg')]: { height: '285px' },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const TrackItem = ({ title, src }: TrackItemProps) => {
  const [hover, setHover] = React.useState<boolean>(false)

  const Blind = () => {
    return (
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: alpha('#fff', 0.6),
          backdropFilter: 'blur(6px)',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '100%' }}
        >
          <Typography
            component={motion.h6}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            variant="h6"
            sx={{ color: alpha('#111111', 0.8) }}
          >
            {title}
          </Typography>
        </Stack>
      </Box>
    )
  }

  return (
    <ImageListItem
      sx={{ position: 'relative ' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={src} alt="" />
      <AnimatePresence>{hover && <Blind />}</AnimatePresence>
    </ImageListItem>
  )
}

const Track: NextPageWithLayout = () => {
  const { data: tracks, isLoading } = useGetTracksQuery()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))

  const cols = React.useMemo(() => {
    if (isLg) return 4
    else if (isMd) return 3
    else if (isSm) return 2
    else return 1
  }, [isSm, isMd, isLg])

  if (isLoading) return <Loader />

  return (
    <>
      <NextSeo title="TRACK" />
      <Container>
        <Box component="div">
          <ImageList cols={cols}>
            {tracks.map((track: any) => (
              <TrackItem
                key={track.id}
                title={track.properties['제목'].title[0].text.content}
                src={track.properties['앨범 커버 이미지'].files[0].file.url}
              />
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  )
}

Track.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Track
