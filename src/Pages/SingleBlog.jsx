/**
 * SingleBlog 
 *
 * Description:
 * This component represents a single blog post. It includes the blog title,
 * content, and an option to go back to the list of blogs.
 * @module SingleBlog
 * @returns {JSX.Element}
 */

import React from "react";
import { Link } from "react-router-dom";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { assets } from "../Components/ImageLoader";
import "../Components/UnFolder.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

/**
 * SingleBlog 
 *
 * @returns {JSX.Element} - The JSX representation of the SingleBlog.
 */
const SingleBlog = () => {
  return (
    <div className="mt-5 pt-5">
      {/* Meta and BreadCrump components for SEO and navigation */}
      <Meta title={"Blog"} />
      <BreadCrump title="Blog" />

      {/* SingleBlog content section */}
      <div className="blog-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                {/* Link to go back to the list of blogs */}
                <Link
                  to={"/blogs"}
                  className="text-dark d-flex align-items-center gap-10"
                >
                  <FaLongArrowAltLeft />
                  Go back to Blogs
                </Link>

                {/* Blog title */}
                <h3 className="title">What is Lorem Ipsum?</h3>

                {/* Blog image */}
                <img
                  src={assets["blog-1"]}
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />

                {/* Blog content */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
