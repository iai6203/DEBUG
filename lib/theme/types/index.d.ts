import type { Colors } from "@/lib/theme/colors";

declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors
  }

  interface ThemeOptions {
    colors: Colors
  }
}
