import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../Components/Header";
import BlogPage from "../Components/BlogPage";
import Pagination from "../Components/Pagination";

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.pathname.split("/").at(-1);

  return (
    <div className="category-post-container">
      <Header />

      <div className="blog-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2 className="blog-title">
          Blogs on <span className="category">{category}</span>
        </h2>
      </div>

      <BlogPage />

      <Pagination />
    </div>
  );
};

export default CategoryPage;