import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import { Home } from './pages/Home';
import { getPosts , getMenu} from './store/posts/postsSlice';
import { DetailPost } from './pages/DetailPost';
import {Menu} from './components/Menu'





function App() {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>state.posts.list)

  useEffect(()=>{    
    dispatch(getPosts())
    console.log(posts)

   
  },[])

  return (
    <>
    <div className="App">
      
      <header className='header'>
        <div className='header__wrapper'>
         <div className='burger'  onClick={()=>{dispatch(getMenu(true))}}>
          <div className='burger__btn'>
            <span className='burger__item'></span>
            </div>
         </div>
         <Menu />
        </div>
      </header>
       
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:id' element={<DetailPost />}/>
    </Routes>
    </div>
   
   
    </>
  );
}
 

export default App
