/**
 * @fileOverview React component for the Reset Password page.
 * @module ResetPassword
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";

/**
 * React component representing the Reset Password page.
 *
 * @function
 * @returns {JSX.Element} - ResetPassword component JSX.
 */
const ResetPassword = () => {
  return (
    <div>
      {/* Set meta information for the page */}
      <Meta title={"Reset Password"} />

      {/* Render breadcrumb navigation */}
      <BreadCrump title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* Reset Password Form */}
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Ok
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
