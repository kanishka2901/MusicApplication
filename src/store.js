import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { MusicApi } from "./services/MusicApi";

export const store = configureStore({
    reducer:{
        [MusicApi.reducerPath]:MusicApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(MusicApi.middleware),
});