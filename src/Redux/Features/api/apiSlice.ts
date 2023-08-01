import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_API_URL as string,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      console.log("endpoint", endpoint);
      console.log("getState", getState());
      // const token = await getTokenCookies();
      // if (token) {
      //   headers.set("Authorization", `Bearer ${token.accessToken}`);
      // }
      return headers;
    },
  }) as any,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
