import React, { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContextProvider'
import BlogPage from './Components/BlogPage'
import Home from './Components/Home.jsx'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import BlogPost from './pages/BlogPost.jsx'
import TagPage from './pages/TagPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'

const App = () => {
  const {fetchBlogPost} = useContext(AppContext)
  const [searchParams,setSearchParams]=useSearchParams()
  const location = useLocation()

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1  
    
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPost(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPost(Number(page),null,category)
    }
    else{
      fetchBlogPost(Number(page))
    }
  },[location.pathname,location.search])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPost/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App