/**
 * @fileOverview React component for the Refund Policy page.
 * @module RefundPolicy
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";

/**
 * React component representing the Refund Policy page.
 *
 * @function
 * @returns {JSX.Element} - RefundPolicy component JSX.
 */
const RefundPolicy = () => {
  return (
    <div>
      {/* Set meta information for the page */}
      <Meta title={"Refund Policy"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Refund Policy" />

      <div className="post-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Refund Policy Content */}
              <div className="policy">
                {/* Add your Refund Policy content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
