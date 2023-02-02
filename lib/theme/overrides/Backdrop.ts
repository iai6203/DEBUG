import { alpha } from '@mui/material'
import type { ThemeOptions } from '@mui/material'

const Backdrop = (theme: ThemeOptions) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.colors.grey['800'], 0.8),
        },
      },
    },
  }
}

export default Backdrop
