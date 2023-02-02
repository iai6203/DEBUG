import { GlobalStyles as MuiGlobalStyles } from '@mui/material'

export const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        'div#__next': {
          width: '100%',
          height: '100%',
        },
      }}
    />
  )
}
