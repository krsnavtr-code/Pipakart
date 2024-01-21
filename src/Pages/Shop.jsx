import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";

// Loading Images from Assets
import { assets } from "../Components/ImageLoader";
import ProductCart from "../Components/ProductCart";
import SpacialProduct from "../Components/SpacialProduct";

const Shop = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5 mt-5">
        <div className="container-xxl mt-5">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3 "
                  src={assets["mainBannerImage"]}
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3 "
                    src={assets["smallBanner01"]}
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>Best Sale</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3 "
                    src={assets["smallBanner02"]}
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>Buy IPad Air</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $599.00 <br /> or $49.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3 "
                    src={assets["smallBanner03"]}
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>Buy IPad Air</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $599.00 <br /> or $49.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative  ">
                  <img
                    className="img-fluid rounded-3 "
                    src={assets["smallBanner04"]}
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute ">
                    <h4>Buy IPad Air</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $599.00 <br /> or $49.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src={assets["service01"]} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders from $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={assets["service02"]} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={assets["service03"]} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={assets["service04"]} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={assets["service05"]} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">!00% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  justify-content-between align-items-center ">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["camera"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["tv"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["headphone"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["camera"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["camera"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["tv"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["headphone"]} alt="camera" />
                </div>

                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={assets["camera"]} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feature Collection</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img className="img-fluid" src={assets["watch"]} alt="" />
                <div className="famous-content position-absolute ">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $16.62/.0. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img className="img-fluid" src={assets["watch"]} alt="" />
                <div className="famous-content position-absolute ">
                  <h5>Studio Display</h5>
                  <h6>600 nits brightness.</h6>
                  <p>27inch 5k retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img className="img-fluid" src={assets["watch"]} alt="" />
                <div className="famous-content position-absolute ">
                  <h5>Smart Phone</h5>
                  <h6>Smart Phone 13 Pro.</h6>
                  <p>
                    new in Green. From $999.00 or $41.62/mo. for 24 mo.
                    Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img className="img-fluid" src={assets["watch"]} alt="" />
                <div className="famous-content position-absolute ">
                  <h5>Home Speakers</h5>
                  <h6>Room-filling sound.</h6>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spacial-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row">
              <SpacialProduct />
              <SpacialProduct />
              <SpacialProduct />
              <SpacialProduct />
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper cart-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={assets["brand01"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand02"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand03"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand04"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand05"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand06"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand07"]} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={assets["brand08"]} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
