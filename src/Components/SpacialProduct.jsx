/**
 * @fileOverview React component for displaying a special product card.
 * @module SpecialProduct
 */

import React from "react";
import { assets } from "../Components/ImageLoader";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

/**
 * React component representing a special product card.
 *
 * @function
 * @returns {JSX.Element} - SpecialProduct component JSX.
 */
const SpecialProduct = () => {
  return (
    <>
      {/* Special Product Card */}
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            {/* Product Image */}
            <div>
              <img className="img-fluid" src={assets["watch"]} alt="watch" />
            </div>

            {/* Product Details */}
            <div className="special-product-content">
              {/* Brand */}
              <h5 className="brand">Havele</h5>

              {/* Product Title */}
              <h6 className="title">
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h6>

              {/* Rating Stars */}
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />

              {/* Price */}
              <p className="price">
                <span className="red-p">$100 </span> &nbsp;
                <strike>$200</strike>
              </p>

              {/* Discount and Countdown */}
              <div className="discount-till d-lg-flex align-content-center gap-10">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-2">1</span> :
                  <span className="badge rounded-circle p-2">1</span> :
                  <span className="badge rounded-circle p-2">1</span>
                </div>
              </div>

              {/* Product Count */}
              <div className="prod-count mt-3 my-4">
                <p>Product: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the SpecialProduct component as the default export
export default SpecialProduct;
