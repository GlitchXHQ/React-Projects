import React from 'react'
import { NavLink } from 'react-router-dom'

const Blogs = ({ post }) => {
  return (
    <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-5 mb-6 transition hover:shadow-lg"
          >
            {/* Title */}
            <NavLink to={`/blog/${post.id}`}>
              <h2 className="text-xl font-bold text-gray-800">
              {post.title}
              </h2>
            </NavLink>

            {/* Author + Category */}
            <p className="text-sm text-gray-600 mt-1">
              By{" "}
              <span className="italic font-medium">
                {post.author}
              </span>{" "}
              on{" "}
              <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
              <span className="font-semibold text-blue-600 underline">
                {post.category}
              </span>
              </NavLink>
            </p>

            {/* Date */}
            <p className="text-xs text-gray-500 mt-1">
              Posted on {post.date}
            </p>

            {/* Content */}
            <p className="text-gray-700 mt-3 leading-relaxed">
              {post.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-semibold"
                >
                  #{tag}
                </span>
                </NavLink>
              ))}
            </div>
          </div>
  )
}

export default Blogs