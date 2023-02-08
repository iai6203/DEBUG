import React from 'react'
// @seo
import { NextSeo } from 'next-seo'
// @redux
import { useCreateSubscribeMutation } from '@/lib/store/services/endpoints/subscribe'
// @snackbar
import { useSnackbar } from 'notistack'
// @framer
import { motion } from 'framer-motion'
// @form
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormTextField from '@/components/FormTextField'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
//
import MainLayout from '@/layouts/MainLayout'
//
import type { NextPageWithLayout } from '@/pages/_app'

type FormInputs = {
  email: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('이메일 형식이 올바르지 않습니다.')
    .required('이메일은 필수 입력 항목입니다.'),
})

const Subscribe: NextPageWithLayout = () => {
  const [createSubscribe, { isLoading, isSuccess }] =
    useCreateSubscribeMutation()
  const { enqueueSnackbar } = useSnackbar()
  const theme = useTheme()
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ email }: FormInputs) => {
    try {
      const response = await createSubscribe({ email }).unwrap()
      reset()
      enqueueSnackbar(response.message, { variant: 'success' })
    } catch (e: any) {
      reset()
      enqueueSnackbar(e.data.message, { variant: 'warning' })
    }
  }

  return (
    <>
      <NextSeo title="SUBSCRIBE" />
      <Box
        component="div"
        sx={{
          background:
            'url(/assets/images/overlay_1.svg), url(/assets/images/subscribe.jpeg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <Container sx={{ py: '80px' }}>
          <Stack justifyContent="center" alignItems="center">
            <Stack alignItems="center">
              <Typography
                component={motion.h2}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                variant="h3"
                sx={{
                  color: theme.colors.primary.main,
                  fontSize: '2.25rem',
                  fontWeight: 800,
                }}
              >
                소식을
              </Typography>
              <Typography
                component={motion.h2}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                variant="h3"
                sx={{
                  color: theme.colors.common.white,
                  fontSize: '2.25rem',
                  fontWeight: 800,
                }}
              >
                전해주세요.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box
        component={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        sx={{ py: '80px' }}
      >
        <Container>
          <Typography variant="h3">
            최신 소식을 제일 먼저 듣고 싶다면 <br />
            아래 항목을 입력해주세요.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} sx={{ mt: '40px' }}>
              <FormTextField
                controllerProps={{
                  control,
                  name: 'email',
                  defaultValue: '',
                }}
                textFieldProps={{
                  label: '이메일',
                }}
                error={errors.email}
              />
              <Box component="div">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  sx={{ width: '100%' }}
                >
                  제출
                </Button>
                {isSuccess ? (
                  <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
                    <Typography variant="caption">
                      인증 메일의 링크는 3분 동안 유효합니다.
                    </Typography>
                  </Stack>
                ) : null}
              </Box>
            </Stack>
          </form>
        </Container>
      </Box>
    </>
  )
}

Subscribe.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Subscribe
