import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import {Music} from "../Models/Music.model";

export const MusicApi = createApi({
    reducerPath:"MusicApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder) =>({
        SongList:builder.query({
            query:()=>"/SongList",
        }),

    }),
});

export const {useSongListQuery} = MusicApi;