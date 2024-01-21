/**
 * @fileOverview React component for the Shipping Policy page.
 * @module ShippingPolicy
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";

/**
 * React component representing the Shipping Policy page.
 *
 * @function
 * @returns {JSX.Element} - ShippingPolicy component JSX.
 */
const ShippingPolicy = () => {
  return (
    <div>
      {/* Set meta information for the page */}
      <Meta title={"Shipping Policy"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Shipping Policy" />

      <div className="post-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Shipping Policy Content */}
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
