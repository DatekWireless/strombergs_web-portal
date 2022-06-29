import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("API_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    admins: builder.query({
      query: () => "/administrators",
    }),
    users: builder.query({
      query: () => "/users",
    }),
  }),
});
// export const usersApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test",
//     prepareHeaders: (headers, { getState }) => {
//       const token = localStorage.getItem("API_token");
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     users: builder.query({
//       query: () => "/users",
//     }),
//   }),
// });

export const { useAdminsQuery, useUsersQuery } = Api;
