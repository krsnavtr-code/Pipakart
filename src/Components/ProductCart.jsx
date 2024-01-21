/**
 * @fileOverview React component for displaying a product card.
 * @module ProductCart
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { assets } from "../Components/ImageLoader";

/**
 * React component representing a product card.
 *
 * @function
 * @param {Object} props - Component properties.
 * @param {number} props.grid - Grid size for responsiveness.
 * @returns {JSX.Element} - ProductCart component JSX.
 */
const ProductCart = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      {/* Product Card */}
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          {/* Wishlist Icon */}
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={assets["wish"]} alt="" />
            </Link>
          </div>

          {/* Product Image */}
          <Link to={":id"} className="product-image">
            <img className="img-fluid" src={assets["watch"]} alt="product" />
            <img className="img-fluid" src={assets["watch02"]} alt="product" />
          </Link>

          {/* Product Details */}
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Samsung Galaxy 10</h5>

            {/* Rating Stars */}
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />

            {/* Description */}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi
              repellat ipsum totam dolorum culpa, illum tempore ullam laudantium
              voluptatem quo unde excepturi.
            </p>

            {/* Price */}
            <p className="price">$100.00</p>
            {/* Actual Price */}
            {/* <p className="actual-price">$120</p> */}
          </div>

          {/* Action Bar */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* Compare Button */}
              <Link className="border-0 bg-white">
                <img src={assets["prodcompare"]} alt="compare" />
              </Link>

              {/* View Button */}
              <Link className="border-0 bg-white">
                <img src={assets["view"]} alt="view" />
              </Link>

              {/* Add to Cart Button */}
              <Link className="border-0 bg-white">
                <img src={assets["add-cart"]} alt="add-cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the ProductCart component as the default export
export default ProductCart;
