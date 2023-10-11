import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    'post/getPost',
    async (id )=>{
        try{
             const data  =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
               .then(response=> response.json())
                return data
               

           
           
        } catch(err){
            console.log(err)
        }
    }

    

)


const postSlice = createSlice({
        name: 'post', 
        initialState:{  
            element: {}

        },
        extraReducers:(builder) =>{
           builder.addCase(getPost.fulfilled, (state, {payload})=>{
            state.element = payload
           
           })
        },

})

export default postSlice.reducer