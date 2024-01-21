/**
 * Wishlist
 *
 * Description:
 * This component displays the user's wishlist with product cards.
 * It includes a breadcrumb for navigation, meta information for SEO, and a list of products in the wishlist.
 * @module Wishlist
 * @returns {JSX.Element}
 */
import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { assets } from "../Components/ImageLoader";

/**
 * Wishlist Component
 *
 * @returns {JSX.Element} - The JSX representation of the Wishlist component.
 */

const Wishlist = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="pt-4">
        {/* Meta and BreadCrump components for SEO and navigation */}
        <Meta title={"Wishlist"} />
        <BreadCrump title="Wishlist" />

        {/* Main content section for the Wishlist component */}
        <div className="wishlist-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              {/* Wishlist product cards */}
              <div className="col-3">
                <div className="wishlist-card position-relative ">
                  <img
                    src={assets["cross"]}
                    className="img-fluid position-absolute cross"
                    alt="cross"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={assets["watch"]}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-2 px-3">
                    <h5 className="title">Samsung</h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="wishlist-card position-relative ">
                  <img
                    src={assets["cross"]}
                    className="img-fluid position-absolute cross"
                    alt="cross"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={assets["watch"]}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-2 px-3">
                    <h5 className="title">Samsung</h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="wishlist-card position-relative ">
                  <img
                    src={assets["cross"]}
                    className="img-fluid position-absolute cross"
                    alt="cross"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={assets["watch"]}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-2 px-3">
                    <h5 className="title">Samsung</h5>
                    <h6 className="price">$ 100</h6>
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

export default Wishlist;
