import { createSlice } from '@reduxjs/toolkit'

export type Menu = {
  id: number
  title: string
  href: string
}

interface State {
  menus: Menu[]
}

const initialState: State = {
  menus: [
    {
      id: 1,
      title: 'Home',
      href: '/',
    },
    {
      id: 2,
      title: 'Track',
      href: '/track',
    },
    {
      id: 3,
      title: 'Album',
      href: '/album',
    },
    {
      id: 4,
      title: 'Contact',
      href: '/contact',
    },
  ],
}

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
})

export const {} = slice.actions

export default slice.reducer
