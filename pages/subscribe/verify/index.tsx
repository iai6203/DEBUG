import React from 'react'
// @redux
import { useVerifySubscribeEmailAddressMutation } from '@/lib/store/services/endpoints/subscribe'
// @mui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// @lottie
import Lottie from 'lottie-react'
import subscribeLoading from '@/public/assets/lotties/scan.json'
import subscribeSuccess from '@/public/assets/lotties/success.json'
import subscribeError from '@/public/assets/lotties/error.json'
//
import type { GetServerSideProps } from 'next'

interface Props {
  token: string
}

const Loading = () => {
  return (
    <Container sx={{ height: '100%' }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Box sx={{ mb: 1, width: '155px', height: '155px' }}>
          <Lottie animationData={subscribeLoading} />
        </Box>
        <Typography variant="h3" sx={{ mb: 1 }}>
          인증 확인 중...
        </Typography>
        <Typography variant="caption">잠시만 기다려주세요.</Typography>
      </Stack>
    </Container>
  )
}

const Error = () => {
  return (
    <Container sx={{ height: '100%' }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Lottie animationData={subscribeError} />
        <Typography variant="h3" sx={{ mb: 1 }}>
          인증 실패
        </Typography>
        <Typography variant="caption">만료된 인증 페이지입니다.</Typography>
      </Stack>
    </Container>
  )
}

const Success = () => {
  return (
    <Container sx={{ height: '100%' }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Box sx={{ width: '155px', height: '155px' }}>
          <Lottie animationData={subscribeSuccess} />
        </Box>
        <Typography variant="h3" sx={{ mb: 1 }}>
          인증 완료
        </Typography>
        <Typography variant="caption">
          이제 최신 정보를 메일로 받아볼 수 있습니다.
        </Typography>
      </Stack>
    </Container>
  )
}

const SubscribeVerify = ({ token }: Props) => {
  const [isPassMinimumTime, setIsPassMinimumTime] =
    React.useState<boolean>(false)
  const [verify, { isLoading, isError }] =
    useVerifySubscribeEmailAddressMutation()

  React.useEffect(() => {
    verify({ token })

    setTimeout(() => setIsPassMinimumTime(true), 2000)
  }, [])

  if (isLoading || !isPassMinimumTime) return <Loading />
  if (isError) return <Error />

  return <Success />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      token: query.token,
    },
  }
}

export default SubscribeVerify
