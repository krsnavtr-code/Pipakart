/**
 * SingleProduct 
 *
 * Description:
 * This component represents the detailed view of a single product. It includes
 * the product name, product details, and a section showcasing other popular products.
 *
 * @module SingleProduct
 * @returns {JSX.Element}
 * 
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import ProductCart from "../Components/ProductCart";

/**
 * SingleProduct 
 *
 * @returns {JSX.Element} - The JSX representation of the SingleProduct.
 */
const SingleProduct = () => {
  return (
    <div>
      {/* Meta and BreadCrump components for SEO and navigation */}
      <Meta title={"Product Name"} />
      <BreadCrump title="Product Name" />

      {/* Main content section for the SingleProduct component */}
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              {/* Left section for displaying product details, images, etc. */}
              {/* Add your product details and components here */}
            </div>
            <div className="col-6">
              {/* Right section for additional information or actions */}
              {/* Add your content, buttons, or related information here */}
            </div>
          </div>
        </div>
      </div>

      {/* Section for showcasing other popular products */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Heading for the popular products section */}
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>

          {/* Row to display popular products (you can map through a list of products) */}
          <div className="row">
            <ProductCart />
            {/* Add more ProductCart components for additional popular products */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
