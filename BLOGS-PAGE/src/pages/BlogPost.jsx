import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BarLoader } from "react-spinners";

import { AppContext } from "../Context/AppContextProvider";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";

const BASE_URL = "https://codehelp-apis.vercel.app/api/";

const BlogPost = () => {
  const { loading, setLoading } = useContext(AppContext);

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  // Fetch blog + related blogs
  const fetchRelatedBlogs = async () => {
    if (!blogId) return;

    setLoading(true);

    try {
      const { data } = await axios.get(
        `${BASE_URL}get-blogs?blogId=${blogId}`
      );

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.error("Error fetching related blogs:", error);
      setBlog(null);
      setRelatedBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRelatedBlogs();
  }, [blogId]);

  return (
    <div className="blog-post-container px-4 md:px-8 py-6">
      {/* Header */}
      <Header />

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <BarLoader width={200} />
        </div>
      ) : blog ? (
        <div className="space-y-6">
          {/* Main Blog */}
          <Blogs post={blog} />

          {/* Related Blogs */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Related Blogs
            </h2>

            <div className="space-y-4">
              {relatedBlogs.map((post) => (
                <Blogs key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No Blogs Found
        </div>
      )}
    </div>
  );
};

export default BlogPost;