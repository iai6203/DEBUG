import React from 'react'
// @redux
import { useCreateContactMutation } from '@/lib/store/services/endpoints/contact'
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
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
//
import MainLayout from '@/layouts/MainLayout'
import FormTextField from '@/components/FormTextField'
//
import type { NextPageWithLayout } from '@/pages/_app'

type FormInputs = {
  email: string
  name: string
  content: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('이메일 형식이 올바르지 않습니다.')
    .required('이메일은 필수 입력 항목입니다.'),
  name: yup.string().required('이름은 필수 입력 항목입니다.'),
  content: yup.string().required('내용은 필수 입력 항목입니다.'),
})

const Contact: NextPageWithLayout = () => {
  const [createContact, { isLoading }] = useCreateContactMutation()
  const { enqueueSnackbar } = useSnackbar()
  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })
  const theme = useTheme()

  const onSubmit = async ({ ...body }: FormInputs) => {
    try {
      await createContact({ ...body }).unwrap()
      reset()
      enqueueSnackbar('감사합니다. 곧 연락 드리겠습니다.', {
        variant: 'success',
      })
    } catch (e) {}
  }

  return (
    <>
      <Box
        sx={{
          background:
            'url(/assets/images/overlay_1.svg), url(/assets/images/contact.jpeg)',
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
                어떻게
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
                연락하나요?
              </Typography>
            </Stack>
            <Stack
              component={motion.div}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              alignItems="center"
              sx={{ mt: '40px' }}
            >
              <Typography
                sx={{
                  mb: '16px',
                  color: theme.colors.common.white,
                  fontSize: '14px',
                  fontWeight: 700,
                }}
              >
                이메일
              </Typography>
              <Typography
                sx={{ color: theme.colors.common.white, fontSize: '13px' }}
              >
                iai6203@gmail.com
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
            언제든지 자유롭게 연락해주세요. <br />
            항상 환영합니다.
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
              <FormTextField
                controllerProps={{
                  control,
                  name: 'name',
                  defaultValue: '',
                }}
                textFieldProps={{
                  label: '이름',
                }}
                error={errors.name}
              />
              <FormTextField
                controllerProps={{ control, name: 'content', defaultValue: '' }}
                textFieldProps={{ label: '내용', multiline: true, rows: 10 }}
                error={errors.content}
              />
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  sx={{ width: '100%' }}
                >
                  제출
                </Button>
              </Box>
            </Stack>
          </form>
        </Container>
      </Box>
    </>
  )
}

Contact.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default Contact
