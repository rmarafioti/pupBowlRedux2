import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF-RICH",
  }),
  endpoints: () => ({}),
});

export default api;
