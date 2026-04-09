import React, { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { BarLoader } from "react-spinners";
import Blogs from "./Blogs";

const BlogPage = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full max-w-2xl mx-auto mt-20 px-4">
      
      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <BarLoader width={200} />
        </div>
      )}

      {/* No Posts */}
      {!loading && posts.length === 0 && (
        <h1 className="text-center text-xl font-semibold text-gray-600">
          No Posts Found
        </h1>
      )}

      {/* Blog List */}
      {!loading &&
        posts.map((post) => (
          <Blogs key={post.id} post={post} />
        ))}
    </div>
  );
};

export default BlogPage;