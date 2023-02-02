import React from 'react'
// @seo
import { NextSeo } from 'next-seo'
// @redux
import { useGetAlbumsQuery } from '@/lib/store/services/endpoints/album'
// @mui
import { useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
//
import MainLayout from '@/layouts/MainLayout'
//
import type { NextPageWithLayout } from '@/pages/_app'

const Loader = () => {
  const theme = useTheme()

  return (
    <Container sx={{ pb: 5 }}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={4} item>
          <Stack spacing={1}>
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
          </Stack>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Stack spacing={1}>
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          item
          sx={{
            [theme.breakpoints.up('sm')]: { display: 'none' },
            [theme.breakpoints.up('md')]: { display: 'block' },
          }}
        >
          <Stack spacing={1}>
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
            <Skeleton variant="rounded" sx={{ height: '240px' }} />
            <Skeleton variant="rounded" sx={{ height: '400px' }} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

const Album: NextPageWithLayout = () => {
  const { data: albums, isLoading } = useGetAlbumsQuery()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'))
  const isMd = useMediaQuery(theme.breakpoints.up('md'))

  const cols = React.useMemo(() => {
    if (isMd) return 3
    else if (isSm) return 2
    else return 1
  }, [isSm, isMd])

  if (isLoading) return <Loader />

  return (
    <>
      <NextSeo title="ALBUM" />
      <Container>
        <Box>
          <ImageList variant="masonry" cols={cols} gap={8}>
            {albums.map((it: any) => (
              <ImageListItem
                key={it.id}
                sx={{ borderRadius: '4px', overflow: 'hidden' }}
              >
                <img
                  src={it.properties['이미지'].files[0].file.url}
                  alt=""
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  )
}

Album.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Album
