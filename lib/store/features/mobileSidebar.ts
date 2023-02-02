import { createSlice } from '@reduxjs/toolkit'

interface State {
  open: boolean
}

const initialState: State = {
  open: false,
}

const slice = createSlice({
  name: 'mobileSidebar',
  initialState,
  reducers: {
    openMobileSidebar: (state) => {
      state.open = true
    },
    closeMobileSidebar: (state) => {
      state.open = false
    },
  },
})

export const { openMobileSidebar, closeMobileSidebar } = slice.actions

export default slice.reducer
