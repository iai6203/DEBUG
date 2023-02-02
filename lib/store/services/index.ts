import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const serverAPI = createApi({
  reducerPath: 'serverAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: () => ({}),
})

export const {} = serverAPI
