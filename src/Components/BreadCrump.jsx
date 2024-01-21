/**
 * @fileOverview React component for breadcrumb navigation.
 * @module BreadCrump
 */

import React from "react";
import { Link } from "react-router-dom";

/**
 * React component representing breadcrumb navigation.
 *
 * @function
 * @param {Object} props - Component properties.
 * @param {string} props.title - Title of the current page or section.
 * @returns {JSX.Element} - BreadCrump component JSX.
 */
const BreadCrump = (props) => {
  const { title } = props;

  return (
    <div>
      <div className="breadcrump mb-0 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb Links */}
              <p className="text-center mb-0">
                <Link className="text-dark" to={"/"}>
                  Home &nbsp;
                </Link>{" "}
                / {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the BreadCrump component as the default export
export default BreadCrump;
