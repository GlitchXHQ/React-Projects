import React from 'react'
import Course from './Course'

const CoursesAvailable = (props) => {
    const courses=props.courses
    const category=props.category

    function fetchCourses(){
    if(category === "All"){
        let courseArr = []

        Object.values(courses).forEach((arr)=>{
            if(Array.isArray(arr)){
                arr.forEach(course => courseArr.push(course))
            }
        })

        return courseArr
    }
    else{
        return courses[category] || []
    }
}

  return (
    <div className='text-white flex flex-wrap gap-10 justify-center'>
        {
            fetchCourses()?.map((course)=>(
                <Course key={course.id} course={course}/>
            ))
        }
    </div>
  )
}

export default CoursesAvailable