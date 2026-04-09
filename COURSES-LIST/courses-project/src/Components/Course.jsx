import React from 'react'

const Course = ({ course }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 w-[300px]">

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[180px] object-cover"
      />

      {/* Course Content */}
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-xl font-bold text-white">
          {course.title}
        </h1>

        <p className="text-gray-300 text-sm line-clamp-3">
          {course.description}
        </p>

        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
          View Course
        </button>
      </div>

    </div>
  )
}

export default Course