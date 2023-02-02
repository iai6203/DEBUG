import AppBar from '@/lib/theme/overrides/AppBar'
import Backdrop from '@/lib/theme/overrides/Backdrop'
import List from '@/lib/theme/overrides/List'
import type { ThemeOptions } from '@mui/material'

export const componentOverrides = (theme: ThemeOptions) => {
  return Object.assign(AppBar(theme), Backdrop(theme), List())
}
