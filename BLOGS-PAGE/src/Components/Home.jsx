import React from 'react'
import Header from './Header'
import BlogPage from './BlogPage'
import Pagination from './Pagination'

const Home = () => {
  return (
    <div className='flex flex-col w-screen h-screen overflow-x-hidden'>
        <Header/>
        <div className='flex flex-col w-full h-full'>
            <BlogPage/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home