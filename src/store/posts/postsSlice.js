import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_ )=>{
        try{
             const data  =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
               .then(response=> response.json())
                return data
               

           
           
        } catch(err){
            console.log(err)
        }
    }

    

)


const postsSlice = createSlice({
        name: 'posts', 
        initialState:{
            list:[],
            menu: false

        },
        reducers:{
            addPost: (state, {payload})=>{
                state.list.push(payload)
            },
            getMenu:(state, {payload})=>{
                state.menu = payload
                console.log('true')
            }
        },
        extraReducers:(builder) =>{
           builder.addCase(getPosts.fulfilled, (state, {payload})=>{
            state.list = payload
           
           })
        },

})
export const {addPost, getMenu}  = postsSlice.actions
export default postsSlice.reducer
