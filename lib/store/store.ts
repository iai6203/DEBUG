import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import menu from '@/lib/store/features/menuSlice'
import mobileSidebar from '@/lib/store/features/mobileSidebar'
import { serverAPI } from '@/lib/store/services'

const store = configureStore({
  reducer: {
    menu,
    mobileSidebar,
    [serverAPI.reducerPath]: serverAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverAPI.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
