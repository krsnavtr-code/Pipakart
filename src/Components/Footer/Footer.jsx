/**
 * @fileOverview React component for the website footer.
 * @module Footer
 */
import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

// Importing assets
import { assets } from "../ImageLoader";

/**
 * React component representing the website footer.
 *
 * @function
 * @returns {JSX.Element} - Footer component JSX.
 */
const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center">
                <img src={assets["newsletter"]} alt="newsletter" />
                <h2 className="text-white mb-0">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact and Information Section */}
      <footer className="py-4">
        <div className="container-xxl text-white">
          <div className="row">
            {/* Contact Information */}
            <div className="col-4">
              <h4 className="mb-4">Contact Us</h4>
              <div className="">
                <address className="fs-6">
                  Hno : 277 Near Vill chopal, Sonipat, Haryana <br /> PinCode:
                  131103
                </address>
                <Link to="tel:+91 9084407615" className="mt-4 mb-2 d-block">
                  +91 9084407615
                </Link>
                <Link
                  to="mailto: krishnaavtar955@gmail.com"
                  className="mt-2 mb-2 d-block"
                >
                  krishnaavtar955@gmail.com
                </Link>
                <div className="social-icon d-flex align-items-center gap-30 mt-3">
                  <Link to="">
                    <BsLinkedin className="fs-5" />
                  </Link>
                  <Link to="">
                    <BsInstagram className="fs-5" />
                  </Link>
                  <Link to="">
                    <BsGithub className="fs-5" />
                  </Link>
                  <Link to="">
                    <BsYoutube className="fs-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="col-3">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link to={"/privacy-policy"} className="text-white py-2 mn-1">
                  Privacy Policy
                </Link>
                <Link to={"/refund-policy"} className="text-white py-2 mn-1">
                  Refund Policy
                </Link>
                <Link to={"/shipping-policy"} className="text-white py-2 mn-1">
                  Shipping Policy
                </Link>
                <Link to={"/term-conditions"} className="text-white py-2 mn-1">
                  Terms & Conditions
                </Link>
                <Link to={"/blogs"} className="text-white py-2 mn-1">
                  Blogs
                </Link>
              </div>
            </div>

            {/* Account Links */}
            <div className="col-3">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link to={"/about"} className="text-white py-2 mn-1">
                  About Us
                </Link>
                <Link className="text-white py-2 mn-1">FAQ</Link>
                <Link to={"/contact"} className="text-white py-2 mn-1">
                  Contact
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-2">
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column gap-2">
                <Link className="text-white py-2 mn-1">Laptops</Link>
                <Link className="text-white py-2 mn-1">Android</Link>
                <Link className="text-white py-2 mn-1">Tablets</Link>
                <Link className="text-white py-2 mn-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copywrite Section */}
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Copy: {new Date().getFullYear()} Powered by PipaKart
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// Export the Footer component as the default export
export default Footer;
