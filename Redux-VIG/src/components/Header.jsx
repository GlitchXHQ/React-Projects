import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLogoOctocat } from "react-icons/io";
import { useDispatch } from 'react-redux';
import Options from './Options';
import {setQuery } from '../redux/features/searchSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [search,SetSearch]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()

  function submitHandler(e){
    e.preventDefault()
    console.log(search)
    dispatch(setQuery(search))
    SetSearch("")
  }

  return (
    <header className='bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 shadow-lg w-full relative pb-16 h-[150px] md:h-[120px]'>
      
      {/* Desktop */}
      <div className='hidden md:flex items-center justify-between px-10 py-6'>
        
        {/* Logo */}
        <Link to={"/"}>
        <div className='flex items-center gap-3 text-3xl font-bold text-white tracking-wide'>
          <IoLogoOctocat className='text-5xl hover:rotate-12 transition duration-300'/>
          <span>MediaStocKz</span>
        </div>
        </Link>

        {/* Search */}
        <form className='w-[40%]' onSubmit={(e)=>submitHandler(e)}>
          <div className='flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-purple-400 transition'>
            <input
              type="text"
              placeholder="Search media..."
              className='bg-transparent outline-none text-white w-full placeholder-gray-300'
              value={search}
              onChange={(e)=>SetSearch(e.target.value)}
            />
            <button type='submit'>
              <CiSearch className='text-white text-2xl cursor-pointer hover:scale-110 transition'/>
            </button>
          </div>
        </form>

        {/* Button */}
        <Link to={"/favourites"}>
        <button className='bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-purple-900 transition duration-300'>
          ⭐ Favourites
        </button>
        </Link>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex flex-col gap-4 px-5 py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-xl font-bold text-white'>
            <IoLogoOctocat className='text-3xl'/>
            <span>MediaStocKz</span>
          </div>

          <button className='bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-sm'>
            ⭐ Fav
          </button>
        </div>

        <form onSubmit={(e)=>submitHandler(e)}>
          <div className='flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2'>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              className='bg-transparent outline-none text-white w-full text-sm placeholder-gray-300'
              onChange={(e)=>SetSearch(e.target.value)}
            />
            <button type='submit'>
              <CiSearch className='text-white text-xl'/>
            </button>
          </div>
        </form>
      </div>
      
      <div className='absolute left-1/2 -bottom-6 transform -translate-x-1/2'>
        <Options/>
      </div>

    </header>
  )
}

export default Header