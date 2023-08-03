import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),

  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),

    getProductByLimit: builder.query({
      query: (num) => ({
        url: `products/?limit=${num}`,
        method: "GET",
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: `products`,
        method: "POST",
        body: product,
      }),
    }),

    updateProduct: builder.mutation({
      query: (product, id) => ({
        url: `products/${id}`,
        method: "PUT",
        body: product,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useGetProductByLimitQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
