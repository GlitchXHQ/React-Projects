import React, { useEffect,useState } from 'react'
import CourseName from './Components/CourseName'
import CoursesAvailable from './Components/CoursesAvailable'
import {filterData} from "./data"
import { apiUrl } from './data'
import axios from 'axios'

const App = () => {
  
  const [courses,setCourses]=useState([{}])
  const [loading,setLoading]=useState(false)
  const [category,setCategory]=useState(filterData[0].title)

  const fetchData=async()=>{
    setLoading(true)
    try{
      const response=await axios.get(apiUrl)
      setCourses(response.data.data)
      setLoading(false)
    }catch(error){
      console.log("Error fetching data",error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='flex flex-col h-screen w-screen gap-4 bg-[#000000]/95 w-screen'>
      <div className='border items-center text-center border-white'>
        <h1 className='text-4xl font-bold p-3 text-white'>Course Page</h1>
      </div>

    <div className='flex flex-col items-center gap-10'>
      <div>
        <CourseName filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div>
        {loading ? <h1 className='text-white text-2xl font-bold'>Loading...</h1> : <CoursesAvailable courses={courses} category={category}/>
        }
      </div>
    </div>
    </div>
  )
}

export default App