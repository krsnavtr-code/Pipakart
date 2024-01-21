/**
 * @fileOverview React component for a blog card.
 * @module BlogCard
 */

import React from "react";
import "./UnFolder.css";
import { assets } from "./ImageLoader";
import { Link } from "react-router-dom";

/**
 * React component representing a blog card.
 *
 * @function
 * @returns {JSX.Element} - BlogCard component JSX.
 */
const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        {/* Blog Image */}
        <div className="cart-image">
          <img className="img-fluid w-100" src={assets["blog-1"]} alt="blog" />
        </div>

        {/* Blog Content */}
        <div className="blog-content">
          <p className="date">1 Jan 2024</p>
          <h5 className="title">What is Lorem Ipsum?</h5>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            explicabo.
          </p>

          {/* Read More Button */}
          <Link to={"/blog/:id"} className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

// Export the BlogCard component as the default export
export default BlogCard;
