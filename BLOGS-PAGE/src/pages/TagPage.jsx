import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen px-4 md:px-10 py-6 bg-gray-50">
      {/* Header */}
      <Header />

      {/* Top Section */}
      <div className="flex flex-col gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="w-fit px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-semibold">
          Blogs Tagged{" "}
          <span className="text-blue-600 font-bold">#{tag}</span>
        </h2>
      </div>

      {/* Blog List */}
      <Blogs />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
};

export default TagPage;