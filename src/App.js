import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// const baseURL = "http://localhost:8080/getListOfproducts";
const baseURL = "https://sahitha.uc.r.appspot.com/getListOfproducts";
// const navigate = useNavigate();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      isClick: false,
    };
  }

  componentDidMount() {
    axios.get(baseURL).then((response) => {
      console.log(response);
      this.setState({
        items: response.data.productInfoVOS,
        DataisLoaded: true,
      });
    });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    return (
      <div className="App">
        <header class="section-header">
          <section class="header-main border-bottom">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-2 col-4">
                  <a href="#" class="brand-wrap">
                    Google Store
                  </a>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <form action="#" class="search">
                    <div class="input-group w-100">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                      <a href="#" class="icon icon-sm rounded-circle border">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                      <span class="badge badge-pill badge-danger notify">
                        0
                      </span>
                    </div>
                    <div class="widget-header icontext">
                      <a href="#" class="icon icon-sm rounded-circle border">
                        <i class="fa fa-user"></i>
                      </a>
                      <div class="text">
                        <span class="text-muted">Welcome!</span>
                        <div>
                          <a href="#">Sign in</a> |<a href="#"> Register</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section class="section-pagetop bg">
          <div class="container">
            <h2 class="title-page">Category products</h2>
            <nav>
              <ol class="breadcrumb text-white">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Best category</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Products
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section class="section-content padding-y">
          <div class="container">
            <div class="row">
              <aside class="col-md-3">
                <div class="card">
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_1"
                        aria-expanded="true"
                        class=""
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Product type</h6>
                      </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_1">
                      <div class="card-body">
                        <form class="pb-3">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-light" type="button">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>

                        <ul class="list-menu">
                          <li>
                            <a href="#">Combo </a>
                          </li>
                          <li>
                            <a href="#">Offers </a>
                          </li>
                          <li>
                            <a href="#">Individual </a>
                          </li>
                          <li>
                            <a href="#">Pack of 6 </a>
                          </li>
                          <li>
                            <a href="#">Home items </a>
                          </li>
                          <li>
                            <a href="#">Light</a>
                          </li>
                          <li>
                            <a href="#">New </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_2"
                        aria-expanded="true"
                        class=""
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Vendors </h6>
                      </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_2">
                      <div class="card-body">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">
                            DIAGEO AMERICAS
                            <b class="badge badge-pill badge-light float-right">
                              120
                            </b>{" "}
                          </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">
                            Jim Beam Brands
                            <b class="badge badge-pill badge-light float-right">
                              15
                            </b>{" "}
                          </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">
                            E and J Gallo Winery
                            <b class="badge badge-pill badge-light float-right">
                              35
                            </b>{" "}
                          </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">
                            Heaven Hill Brands
                            <b class="badge badge-pill badge-light float-right">
                              89
                            </b>{" "}
                          </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">
                            Campari America
                            <b class="badge badge-pill badge-light float-right">
                              30
                            </b>{" "}
                          </div>
                        </label>
                      </div>
                    </div>
                  </article>
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_3"
                        aria-expanded="true"
                        class=""
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Price range </h6>
                      </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_3">
                      <div class="card-body">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="100"
                          name=""
                        />
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label>Min</label>
                            <input
                              class="form-control"
                              placeholder="$0"
                              type="number"
                            />
                          </div>
                          <div class="form-group text-right col-md-6">
                            <label>Max</label>
                            <input
                              class="form-control"
                              placeholder="$1,000"
                              type="number"
                            />
                          </div>
                        </div>
                        <button class="btn btn-block btn-primary">Apply</button>
                      </div>
                    </div>
                  </article>
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_4"
                        aria-expanded="true"
                        class=""
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Combos </h6>
                      </a>
                    </header>
                    <div class="filter-content collapse show" id="collapse_4">
                      <div class="card-body">
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> Large </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> Medium </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> Small </span>
                        </label>
                        <label class="checkbox-btn">
                          <input type="checkbox" />
                          <span class="btn btn-light"> Tiny Pack </span>
                        </label>
                      </div>
                    </div>
                  </article>
                  <article class="filter-group">
                    <header class="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse_5"
                        aria-expanded="false"
                        class=""
                      >
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">More filter </h6>
                      </a>
                    </header>
                    <div class="filter-content collapse in" id="collapse_5">
                      <div class="card-body">
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            checked=""
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Any condition</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Brand new </div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Used items</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input
                            type="radio"
                            name="myfilter_radio"
                            class="custom-control-input"
                          />
                          <div class="custom-control-label">Very old</div>
                        </label>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <main class="col-md-9">
                <header class="border-bottom mb-4 pb-3">
                  <div class="form-inline">
                    {/* Add no of products TODO */}
                    <span class="mr-md-auto">
                      {Object.keys(items).length} Items found{" "}
                    </span>
                    <select class="mr-2 form-control">
                      <option>Latest items</option>
                      <option>Trending</option>
                      <option>Most Popular</option>
                      <option>Cheapest</option>
                    </select>
                    <div class="btn-group">
                      <a
                        href="#"
                        class="btn btn-outline-secondary active"
                        data-toggle="tooltip"
                        title="List view"
                      >
                        <i class="fa fa-bars"></i>
                      </a>
                      <a
                        href="#"
                        class="btn  btn-outline-secondary"
                        data-toggle="tooltip"
                        title="Grid view"
                      >
                        <i class="fa fa-th"></i>
                      </a>
                    </div>
                  </div>
                </header>
                {items
                  .sort((a, b) => a.productName.localeCompare(b.productName))
                  .map((item) => (
                    <article
                      class="card card-product-list"
                      style={{ backgroundColor: item.outOfStock ? "#F5F8F9" : "" }}
                    >
                      <div class="row no-gutters">
                        <aside class="col-md-3">
                          <a href="#" class="img-wrap">
                            {/* <span class="badge badge-danger"> NEW </span> */}
                            <img src={item.productImage} />
                          </a>
                        </aside>
                        <div class="col-md-6">
                          <div class="info-main">
                            <a href="#" class="h5 title">
                              {item.productName}
                            </a>
                            <div class="rating-wrap mb-3">
                              <ul class="rating-stars">
                                <li class="stars-active w-80">
                                  <i class="fa fa-star"></i>{" "}
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>{" "}
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                </li>
                                <li>
                                  <i class="fa fa-star"></i>{" "}
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>{" "}
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                </li>
                              </ul>
                              <div class="label-rating">7/10</div>
                            </div>

                            {item.outOfStock ? (
                              <p style={{ color: "red", fontWeight: "bold" }}>
                                Out of stock!
                              </p>
                            ) : item.likelyToBeSold ? (
                              <p style={{ color: "red", fontWeight: "bold" }}>
                                Likely to be sold out in{" "}
                                {item.likelyToBeSoldDays}{" "}
                                {item.likelyToBeSoldDays > 1 ? "days" : "day"}
                              </p>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        <aside class="col-sm-3">
                          <div class="info-aside">
                            <div class="price-wrap">
                              <span class="price h5">
                                {" "}
                                ${item.productPrice}{" "}
                              </span>
                              {/* <del class="price-old"> $198</del> */}
                            </div>
                            <p class="text-success">Free shipping</p>
                            <br />
                            <p>
                              <a href="#" class="btn btn-primary btn-block">
                                {" "}
                                Details{" "}
                              </a>
                              <a href="#" class="btn btn-light btn-block">
                                <i class="fa fa-heart"></i>
                                <span class="text">Add to wishlist</span>
                              </a>
                            </p>
                          </div>
                        </aside>
                      </div>
                    </article>
                  ))}
                <nav class="mt-4" aria-label="Page navigation sample">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </main>
            </div>
          </div>
        </section>

        <footer class="section-footer border-top padding-y">
          <div class="container">
            <p>
              <a href="#">Terms and conditions</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
