import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../api";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: ({ token, page }) => ({
        url: `contact?page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["contact"],
    }),

    getSingleContact: builder.query({
      query: (id) => ({
        url: `contact/${id}`,
      }),
      providesTags: ["contact"],
    }),

    createContact: builder.mutation({
      query: ({ data, token }) => ({
        url: "contact",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    updateContact: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `contact/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    deleteContact: builder.mutation({
      query: ({id,token}) => ({
        url: `contact/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetSingleContactQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
