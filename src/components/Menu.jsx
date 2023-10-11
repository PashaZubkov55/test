import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../store/posts/postsSlice";
import { Link } from "react-router-dom";
export const Menu = ()=>{
    const dispatch = useDispatch()
    const menu = useSelector((state)=>state.posts.menu)
    if (menu === true) {
        return(
            <nav className="navigation" onClick={()=>{dispatch(getMenu(false))}}>
                <ul className="navigation__items">
                    <Link to='/'>
                    <li className="navigation__item">Главная</li>
                    </Link>
                    <Link to='/1'>
                    <li className="navigation__item">Добавить</li>
                    </Link>
                </ul>
            </nav>
        )
    } else{
        <></>
    }
    
        
    
}