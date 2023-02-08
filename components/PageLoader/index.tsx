// @react
import React from 'react'
// @mui
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
// @lottie
import Lottie from 'lottie-react'
import loading from '@/public/assets/lotties/loading.json'

const PageLoader = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <Box component="div" sx={{ width: '200px', height: '200px' }}>
        <Lottie animationData={loading} />
      </Box>
    </Stack>
  )
}

export default PageLoader
