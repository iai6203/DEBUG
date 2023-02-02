import '@fontsource/noto-sans-kr/300.css'
import '@fontsource/noto-sans-kr/400.css'
import '@fontsource/noto-sans-kr/500.css'
import '@fontsource/noto-sans-kr/700.css'
import '@/styles/globals.css'
import { StoreProvider } from '@/lib/store'
import { ThemeProvider } from '@/lib/theme'
import { SnackbarProvider } from 'notistack'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <StoreProvider>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3}>
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}
