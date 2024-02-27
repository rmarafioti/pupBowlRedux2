import api from "../store/api";

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPuppyList: builder.query({
      query: () => ({
        url: "/players",
      }),
      transformResponse: (response) => response.data.players,
    }),
    getPuppyPlayer: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
      }),
      transformResponse: (response) => response.data.player,
    }),
  }),
});

export const { useGetPuppyListQuery, useGetPuppyPlayerQuery } = puppyApi;
