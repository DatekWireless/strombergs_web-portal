import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminsApi = createApi({
  baseQuery: fetchBaseQuery(
    "https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/"
  ),
  endpoints: (builder) => ({
    getAdmins: builder.query({
      query: () => "administrators",
    }),
  }),
});

export const { useGetAdminsQuery } = adminsApi;
