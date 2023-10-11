import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/posts/postSlice";
import { useParams } from "react-router";



export const Post = ()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const post = useSelector((state)=>state.post.element)
    useEffect(()=>{
     dispatch(getPost(id)) 
    
    },[id])
    return(
      <>
      <div className="post">
        <div className="post__wrapper">
            <div className="post__title"> <h1>{post.title}</h1></div>
            <div className="post__body">{post.body}</div>
        </div>
      </div>
      </>
    )
}