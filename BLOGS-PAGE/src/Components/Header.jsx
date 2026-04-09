import React from 'react'

const Header = () => {
  return (
    <div className='border shadow-2xl top-0 fixed w-full bg-white z-10'>
      <div className='flex flex-row m-5 justify-between'>
        <h1 className='font-bold md:text-2xl text-xl'>Daily-Blogs</h1>
        <h1 className='font-bold md:text-2xl text-xl'>Your Free Dose of Dopamine</h1>
        <div>
          <h1>......................</h1>
        </div>
      </div>
    </div>
  )
}

export default Header