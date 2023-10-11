import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useInput}  from "../hooks/useInput";
import {useError}  from "../hooks/useError";
import { addPost } from "../store/posts/postsSlice";
import { useNavigate } from "react-router";



export const InputForm = ()=>{
    const titleInput = useInput('')
    const bodyInput = useInput('')
    const error = useError('')
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.posts.list)
        useEffect(()=>{
        })
        const  submit = (event)=>{
                event.preventDefault()
                if (titleInput.value === ''|| bodyInput.value === '' ) {
                    error.messageError(' Название или описание отсутствует !')
                    
                } else {
                    const post = {
                        title: titleInput.value,
                        body: bodyInput.value,
                        id: Math.random(),
                        userId: 1
                    }
                   dispatch(addPost(post))
                    navigate('/')

                }
        }
    return(
    <form action="form" className="form" onSubmit={submit}>
        <div className="form__wrapper">
         <div className="form__text"><strong>Добавить Пост </strong></div>   
        <div className="form__title">
        <input type="text" placeholder="Введите название" className="form__input"  value={titleInput.value} onChange={titleInput.onChange} />
        </div>
        
        <div className="form__body">
        <input type="text"  placeholder="Введите  описание" className="form__input " value={bodyInput.value} onChange={bodyInput.onChange} />
        </div>
        <span className="form__error">{error.message}</span>
        <div className="form__success">
            <button className="form__button" type="submit">Добавить</button>
        </div>
        </div>
    </form>
    )
}