import { serverAPI } from '@/lib/store/services'

type CreateSubscribeRequest = {
  email: string
}

type VerifySubscribeEmailAddressRequest = {
  token: string
}

const subscribeAPI = serverAPI.injectEndpoints({
  endpoints: (builder) => ({
    createSubscribe: builder.mutation<any, CreateSubscribeRequest>({
      query: ({ ...body }) => ({
        url: '/subscribes',
        method: 'POST',
        body,
      }),
    }),

    verifySubscribeEmailAddress: builder.mutation<
      any,
      VerifySubscribeEmailAddressRequest
    >({
      query: ({ ...body }) => ({
        url: '/subscribes/verify',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useCreateSubscribeMutation,
  useVerifySubscribeEmailAddressMutation,
} = subscribeAPI
