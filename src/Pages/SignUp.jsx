/**
 * SignUp 
 *
 * This component represents the user registration or sign-up page.
 * It includes form fields for the user to enter their first name, last name,
 * email, mobile number, password, and confirm password.
 * @module SignUp
 * @returns {JSX.Element}
 */

import React from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";

/**
 * SignUp 
 *
 * @returns {JSX.Element} - The JSX representation of the SignUp .
 */
const SignUp = () => {
  return (
    <div>
      {/* Meta and BreadCrump components for SEO and navigation */}
      <Meta title={"Sign Up"} />
      <BreadCrump title="Sign Up" />

      {/* SignUp Form Section */}
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                {/* Sign-up form with input fields for first name, last name, email, phone, password, and confirm password */}
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      className="form-control"
                    />
                  </div>
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
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    {/* Buttons for submitting the form or navigating to the login page */}
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0">Signup</button>
                      <Link to="/login" className="button signup">
                        Login
                      </Link>
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

export default SignUp;
