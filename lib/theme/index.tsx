import {
  CssBaseline,
  ThemeProvider as Provider,
  createTheme,
} from '@mui/material'
import colors from '@/lib/theme/colors'
import palette from '@/lib/theme/palette'
import typography from '@/lib/theme/typography'
import { componentOverrides } from '@/lib/theme/overrides'
import { GlobalStyles } from '@/lib/theme/globalStyles'
import type { ReactNode } from 'react'
import type { ThemeOptions } from '@mui/material'

interface Props {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const options: ThemeOptions = {
    colors,
    palette,
    typography,
  }
  const theme = createTheme(options)
  theme.components = componentOverrides(theme)

  return (
    <Provider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </Provider>
  )
}
