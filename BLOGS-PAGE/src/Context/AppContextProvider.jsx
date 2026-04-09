import React, { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();

  // Fetch Blogs
  const fetchBlogPost = async (page = 1, tag = null, category = null) => {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    try {
      const { data } = await axios.get(url);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching blogs:", error);

      setPage(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle Pagination
  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
    setPage(page);
    fetchBlogPost(page);
  };

  const value = {
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    fetchBlogPost,
    handlePageChange,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;