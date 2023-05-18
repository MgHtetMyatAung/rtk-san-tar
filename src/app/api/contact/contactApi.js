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
      query: (token) => ({
        url: "contact",
        headers: {
          Authorization: `Bearer ${token}`
        }
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
      query: (data) => ({
        url: "contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    updateContact: builder.mutation({
      query: (data) => ({
        url: `contact/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
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
