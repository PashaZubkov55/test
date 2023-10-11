import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts/postsSlice";
import postSlice from './posts/postSlice'
export const store = configureStore({
    reducer:{
        posts: postsSlice,
        post: postSlice,
    }
})