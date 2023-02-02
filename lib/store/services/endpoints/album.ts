import { serverAPI } from '@/lib/store/services'

const albumAPI = serverAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query<any, void>({
      query: () => ({
        url: '/albums',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetAlbumsQuery } = albumAPI
