import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const getUserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `user?id=${id}`,
    }),
  }),
})


export const { useGetUserByIdQuery } = getUserApi