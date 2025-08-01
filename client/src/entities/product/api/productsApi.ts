import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TProduct, TProductDTO } from '../model/types'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API}items`
    }),
    tagTypes: ['PRODUCT'],
    endpoints: builder => ({
        getProducts: builder.query<TProduct[], void>({
            query: () => ({ url: `/`, method: 'GET' }),
            providesTags: () => ['PRODUCT']
        }),
        createProducts: builder.mutation<TProduct, TProductDTO>({
            query: body => ({ url: `/`, method: 'POST', body }),
            invalidatesTags: () => ['PRODUCT']
        })
    })
})

export const { useGetProductsQuery, useCreateProductsMutation } = productsApi
