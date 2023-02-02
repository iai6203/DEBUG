import { serverAPI } from '@/lib/store/services'

const trackAPI = serverAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTracks: builder.query<any, void>({
      query: () => ({
        url: '/tracks',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetTracksQuery } = trackAPI
