/**
 * @fileOverview React component for the Compare Products page, displaying a comparison between two products.
 * @module CompareProduct
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { assets } from "../Components/ImageLoader";
import Color from "../Components/Color";

/**
 * React component representing the Compare Products page.
 *
 * @function
 * @returns {JSX.Element} - CompareProduct component JSX.
 */
const CompareProduct = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="pt-4">
        {/* Set meta information for the page */}
        <Meta title={"Compare Products"} />

        {/* Render breadcrumb navigation */}
        <BreadCrump title="Compare Products" />

        <div className="compare-product-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              {/* Product 1 */}
              <div className="col-3">
                <div className="compare-product-card position-relative ">
                  <img
                    src={assets["cross"]}
                    alt="cross"
                    className="position-absolute cross img-fluid "
                  />
                  <div className="product-card-image">
                    <img
                      src={assets["watch"]}
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">Samsung Galaxy 10</h5>
                    <h6 className="price">$ 100</h6>
                    <div>
                      {/* Product details */}
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p className="mb-0">Samsung</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p className="mb-0">Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <p className="mb-0">
                          {/* Render color component */}
                          <Color />
                        </p>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10 mb-0">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-3">
                <div className="compare-product-card position-relative ">
                  <img
                    src={assets["cross"]}
                    alt="cross"
                    className="position-absolute cross img-fluid "
                  />
                  <div className="product-card-image">
                    <img
                      src={assets["watch"]}
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="compare-product-details">
                    <h5 className="title">Samsung Galaxy 10</h5>
                    <h6 className="price">$ 100</h6>
                    <div>
                      {/* Product details */}
                      <div className="product-detail">
                        <h5>Brand:</h5>
                        <p className="mb-0">Samsung</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5>
                        <p className="mb-0">Watch</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5>
                        <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Color:</h5>
                        <p className="mb-0">
                          {/* Render color component */}
                          <Color />
                        </p>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10 mb-0">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
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

export default CompareProduct;
