import { serverAPI } from '@/lib/store/services'

type CreateContactRequest = {
  email: string
  name: string
  content: string
}

export const contactAPI = serverAPI.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation<any, CreateContactRequest>({
      query: ({ ...body }) => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateContactMutation } = contactAPI
