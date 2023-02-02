import { Provider } from 'react-redux'
import store from '@/lib/store/store'
import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}
