import React from "react";
import { useSelector } from "react-redux";
import {SwiperSlide, Swiper} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
export const Slider = ()=>{
  
   
    const posts = useSelector((state)=>state.posts.list)
    
    
   
    return(
        <div className="slider">
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         {posts.map((post)=>{
            return(
                <SwiperSlide key={post.id}>

                    <div className="post">
                        <div className="post__wrapper">
                        <div className="post__text">
                            <strong>{post.id} {post.title}</strong>
                        </div>
                        <Link to={`/${post.id}`}>
                        <button  className="post__button">
                            читать 
                        </button>
                        </Link>
                        </div>
                    </div>
                </SwiperSlide>
            )
            
                
          
        })}
   
      
    
    </Swiper>
      </div>
       
    )
}