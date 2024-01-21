/**
 * @fileOverview React component for the Blog page, displaying a list of blog posts.
 * @module Blog
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import BlogCard from "../Components/BlogCard";

/**
 * React component representing the Blog page.
 *
 * @function
 * @returns {JSX.Element} - Blog component JSX.
 */
const Blog = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="pt-4">
        {/* Set meta information for the page */}
        <Meta title={"Blogs"} />

        {/* Render breadcrumb navigation */}
        <BreadCrump title="Blogs" />

        <div className="blog-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              {/* Filter column */}
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Find By Categories</h3>
                  <div>
                    {/* List of categories */}
                    <ul className="ps-0">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Laptop</li>
                      <li>Camera</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog post column */}
              <div className="col-9">
                <div className="row">
                  {/* Individual Blog Cards */}
                  <div className="col-6 mb-3">
                    {/* Render a BlogCard component */}
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
