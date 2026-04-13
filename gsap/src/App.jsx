import React from 'react'
import { SplitText,ScrollTrigger } from 'gsap/all'
import Navbar from './components/Navbar'
import gsap from 'gsap/gsap-core.js'
import Hero from './components/Hero'


gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/> 
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App