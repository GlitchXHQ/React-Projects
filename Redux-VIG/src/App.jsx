import React from 'react'
import Header from './components/Header'
import Options from './components/Options'
import Body from './components/Body'

const App = () => {
  return (
    <div className='h-screen w-full items-center flex flex-col m-auto bg-white'>
      <Header/>
      <Body/>
    </div>
  )
}

export default App