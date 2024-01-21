import React, { useState } from "react";
import BreadCrump from "../Components/BreadCrump";
import Meta from "../Components/Meta";
import { assets } from "../Components/ImageLoader";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../Components/ProductCart";
import Color from "../Components/Color";

const Store = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid);

  return (
    <div className="mt-5 pt-5">
      <div className="pt-4">
        <Meta title={"Store"} />
        <BreadCrump title="Store" />

        <div className="store-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className="ps-0">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Laptop</li>
                      <li>Camera</li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <div>
                    <h5 className="sub-title">Availability</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="inStock"
                        />
                        <label className="form-check-label" htmlFor="inStock">
                          In Stock (4)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="outOfStock"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="outOfStock"
                        >
                          Out of Stock (0)
                        </label>
                      </div>
                    </div>
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating ">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating ">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="To"
                        />
                        <label htmlFor="floatingInput">To</label>
                      </div>
                    </div>
                    <h5 className="sub-title">Color</h5>
                    <div>
                      <Color />
                      <Color />
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S (2)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-2"
                        />
                        <label className="form-check-label" htmlFor="color-2">
                          M (2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-1 py-2 px-3">
                        Headphone
                      </span>
                      <span className="badge bg-light text-secondary rounded-1 py-2 px-3">
                        Laptop
                      </span>
                      <span className="badge bg-light text-secondary rounded-1 py-2 px-3">
                        Mobile
                      </span>
                      <span className="badge bg-light text-secondary rounded-1 py-2 px-3">
                        Watch
                      </span>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                  <div>
                    <div className="random-products mb-3 d-flex">
                      <div className="w-50">
                        <img
                          className="img-fluid"
                          src={assets["watch"]}
                          alt=""
                        />
                      </div>
                      <div className="w-50">
                        <h5>Watch</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className="price">From $100</b>
                      </div>
                    </div>
                    <div className="random-products d-flex">
                      <div className="w-50">
                        <img
                          className="img-fluid"
                          src={assets["watch"]}
                          alt=""
                        />
                      </div>
                      <div className="w-50">
                        <h5>Watch</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <b className="price">From $100</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="filter-sort-grid mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 d-block" style={{ width: "100px" }}>
                        Sort By
                      </p>
                      <select
                        name=""
                        className="form-control form-select"
                        id=""
                      >
                        <option value="manual">Featured</option>
                        <option value="best-selling" selected="selected">
                          Best selling
                        </option>
                        <option value="title-ascending">
                          Alphabetically, A-Z
                        </option>
                        <option value="title-descending">
                          Alphabetically, Z-A
                        </option>
                        <option value="price-ascending">
                          Price, low to high
                        </option>
                        <option value="price-descending">
                          Price, high to low
                        </option>
                        <option value="created-ascending">
                          Date, old to new
                        </option>
                        <option value="created-descending">
                          Date, new to old
                        </option>
                      </select>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-10">
                        <p className="totalproducts mb-0">21 Products</p>
                        <div className="d-flex gap-10 align-items-center grid">
                          <img
                            onClick={() => {
                              setGrid(3);
                            }}
                            src={assets["gr4"]}
                            className="d-block img-fluid"
                            alt="grid"
                          />
                          <img
                            onClick={() => {
                              setGrid(4);
                            }}
                            src={assets["gr3"]}
                            className="d-block img-fluid"
                            alt="grid"
                          />
                        </div>
                        <div className="d-flex gap-10 align-items-center grid">
                          <img
                            onClick={() => {
                              setGrid(6);
                            }}
                            src={assets["gr2"]}
                            className="d-block img-fluid"
                            alt="grid"
                          />
                          <img
                            onClick={() => {
                              setGrid(12);
                            }}
                            src={assets["gr"]}
                            className="d-block img-fluid"
                            alt="grid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="products-list d-flex flex-wrap gap-10 pb-5">
                  <ProductCart grid={grid}/>
                  <ProductCart grid={grid}/>
                  <ProductCart grid={grid}/>
                  <ProductCart grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
