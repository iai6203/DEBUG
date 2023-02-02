import { alpha } from '@mui/material'
import type { ThemeOptions } from '@mui/material'

const AppBar = (theme: ThemeOptions) => {
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          color: alpha(theme.colors.common.black, 0.54),
        },
      },
    },
  }
}

export default AppBar
