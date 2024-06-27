import React from "react";
import like1 from "../assets/images/like-01.jpg";
import like2 from "../assets/images/like-02.jpg";
import like3 from "../assets/images/like-03.jpg";
import Venue1 from "../assets/images/venue-01.jpg";
import Venue2 from "../assets/images/venue-02.jpg";
import Venue3 from "../assets/images/venue-03.jpg";
import logo from "../assets/images/logo.png";
import map from "../assets/images/map-image.jpg";
import Footer from "./Footer";
// import { a } from 'react-router-dom';

function Nav() {
  return (
    <div>
      {/* nav */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12">
              <nav className="main-nav fixed-top bg-white">
                {/* ***** Logo Start ***** */}
                <div className="d-flex ">
                  <div className="d-flex ">
                    <img src={logo} className="img-fluid logo1" alt="" />
                    <a href="index.html" className="logo">
                      Event<em> Excellence</em>
                    </a>
                  </div>

                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav mx-5 px-5 ">
                    <li>
                      <a href="./" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#rent">Rent Venue</a>
                    </li>
                    <li>
                      <a href="shows">Shows & Events</a>
                    </li>
                    <li>
                      <a href="tickets">Tickets</a>
                    </li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </div>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* nav end */}
      {/* banner start */}
      <div class="main-banner" id="./">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="main-content">
                <div class="next-show">
                  <i class="fa fa-arrow-up"></i>
                  <span>Next Show</span>
                </div>
                <h6>Launching on Thursday, August 1st</h6>
                <h2>The Independence Day Celebrations 2024</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* about start */}
      <div className=" pb-5 pt-3" id="about">
        <div class="about-upcoming-shows">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <h2>About The Upcoming Show</h2>
                <p>
                  <p>
                    Celebrate Independence Day 2024 with a spectacular showcase
                    of cultural performances and patriotic festivities.
                  </p>
                </p>
                <h4>Items That Are Restricted</h4>
                <ul>
                  <li>* Outside food and beverages</li>
                  <li>* Weapons and sharp objects</li>
                  <li>* Large bags or backpacks</li>
                </ul>
                <h4>Directions & Car Parking</h4>
                <p>
                  Find hassle-free directions and convenient parking options for
                  Independence Day celebrations 2024.
                </p>
              </div>
              <div class="col-lg-3 ">
                <div class="next-shows bg-light">
                  <h4>
                    <i class="fa fa-clock-o"></i> Get The Next Show Tickets
                  </h4>
                  <ul>
                    <li>
                      <h5>Copacabana Festival</h5>
                      <span>Sep 24 Fri 08:30 AM - 11:00 PM</span>
                    </li>
                    <li>
                      <h5>Rock Music Festival</h5>
                      <span>Sep 22 Wed 11:00 AM - 09:00 PM</span>
                    </li>
                    <li>
                      <h5>Water Splash Festival</h5>
                      <span>July 18 Friday 10:00 AM - 11:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="also-like">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2>You Might Also Like...</h2>
              </div>
              <div class="col-lg-4">
                <div class="like-item">
                  <div class="thumb">
                    <a href="event-details.html">
                      <img src={like1} alt="" />
                    </a>
                    <div class="icons">
                      <ul>
                        <li>
                          <a href="event-details.html">
                            <i class="bi bi-arrow-right"></i>
                          </a>
                        </li>
                        <li>
                          <a href="ticket-details.html">
                            <i class="bi bi-ticket"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="down-content">
                    <span>Sept 10 to 14, 2024</span>
                    <a href="event-details.html">
                      <h4>Wonder Land Music and Arts Festival</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="like-item">
                  <div class="thumb">
                    <a href="event-details.html">
                      <img src={like2} alt="" />
                    </a>
                    <div class="icons">
                      <ul>
                        <li>
                          <a href="event-details.html">
                            <i class="bi bi-arrow-right"></i>
                          </a>
                        </li>
                        <li>
                          <a href="ticket-details.html">
                            <i class="bi bi-ticket"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="down-content">
                    <span>Oct 11 to 16, 2024</span>
                    <a href="event-details.html">
                      <h4>Big Water Splashing Festival</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="like-item">
                  <div class="thumb">
                    <a href="event-details.html">
                      <img src={like3} alt="" />
                    </a>
                    <div class="icons">
                      <ul>
                        <li>
                          <a href="event-details.html">
                            <i class="bi bi-arrow-right"></i>
                          </a>
                        </li>
                        <li>
                          <a href="ticket-details.html">
                            <i class="bi bi-ticket"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="down-content">
                    <span>Nov 10 to 18, 2024</span>
                    <a href="event-details.html">
                      <h4>Tiger Dance Hip Hop Festival</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* amazing start */}

      <div id="rent">
        <div className="amazing-venues">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="left-content">
                  <h4>Three Amazing Venues for events</h4>
                  <p>
                    <span className="fw-bold">Chennai Trade Centre:</span> Known
                    for its spacious halls and modern amenities, ideal for
                    exhibitions, conferences, and large-scale events.
                  </p>
                  <p>
                    <span className="fw-bold">IC Hotel:</span> Offers elegant
                    banquet halls and outdoor spaces with a scenic view, perfect
                    for weddings, corporate events, and parties.
                  </p>
                  <p>
                    <span className="fw-bold">ITC Grand Chola:</span> Known for
                    its luxurious ambiance and sophisticated event spaces,
                    suitable for upscale weddings, conferences, and gala
                    dinners.
                  </p>
                  <br />
                  <p>
                    You can use this event template for your commercial or
                    business website. You are not permitted to redistribute this
                    template ZIP file on any template download website. If you
                    need the latest REACT templates, you may visit{" "}
                    <a
                      href="https://www.toocss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Too CSS
                    </a>{" "}
                    website that features a great collection of templates in
                    different categories.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right-content">
                  <h5>
                    <i className="fa fa-map-marker"></i> Visit Us
                  </h5>
                  <span>
                    5 College St NW, <br />
                    Norcross, GA 30071
                    <br />
                    United States
                  </span>
                  <div className="text-button">
                    <a href="show-events-details.html">
                      Need Directions? <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="map-image">
          <img src={map} alt="Maps of 3 Venues" />
        </div> */}
        <section id="Contact">
          <section class="common-padding" id="location">
            <div class="container">
              <div class="text-center">
                <h4
                  className="heading10 mt-5 text-center"
                  style={{ color: "black" }}
                >
                  {" "}
                  Maps & Directions
                </h4>
              </div>
              <div class="row align-items-center g-5">
                <div class="col-md-7">
                  <div
                    class="map text-center"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!13887.7228006895866!2d80.24859830000001!3d12.9895733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d48aabc65c1%3A0x6f54da323bd9c8d0!2sATIT!5e0!3m2!1sen!2sin!4v1703158465961!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      style={{ width: "100%", height: "450px", border: "0" }}
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div class="col-md-5">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <div class="card  border-0 justify-content-center align-items-center align-items-md-center">
                      <div class="d-inline-block py-3 px-5 shadow-1 text-center col-10">
                        <h4 class="new-header text-dark mb-2">Visit Us</h4>
                        <p class="primary-text text-dark">
                          xxxxxx,
                          <br />
                          xxxxxxxx Chennai - 600113.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      {/* amazing end */}
      {/* venue start */}
      <div class="venue-tickets">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Our Venues & Tickets</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="venue-item">
                <div class="thumb">
                  <img src={Venue1} alt="" />
                </div>
                <div class="down-content">
                  <div class="left-content">
                    <div class="main-white-button">
                      <a href="ticket-details.html">Purchase Tickets</a>
                    </div>
                  </div>
                  <div class="right-content">
                    <h4>Radio City Musical Hall</h4>
                    <p>
                      Radio City Music Hall, located in New York City, is renowned for hosting a variety of events, including concerts, theater performances, and the famous Radio City Christmas Spectacular featuring the Rockettes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="venue-item">
                <div class="thumb">
                  <img src={Venue2} alt="" />
                </div>
                <div class="down-content">
                  <div class="left-content">
                    <div class="main-white-button">
                      <a href="ticket-details.html">Purchase Tickets</a>
                    </div>
                  </div>
                  <div class="right-content">
                    <h4>Madison Square Garden</h4>
                    <p>
                      Madison Square Garden, situated in New York City, is a historic arena renowned for hosting major sporting events, concerts featuring top artists, and historic other entertainment spectacles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="venue-item">
                <div class="thumb">
                  <img src={Venue3} alt="" />
                </div>
                <div class="down-content">
                  <div class="left-content">
                    <div class="main-white-button">
                      <a href="ticket-details.html">Purchase Tickets</a>
                    </div>
                  </div>
                  <div class="right-content">
                    <h4>Royce Hall</h4>
                    <p>
                      Royce Hall, located on the campus of the University of California, Los Angeles (UCLA), is a prominent venue known for its stunning Romanesque architecture and cultural significance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="venue-item">
              <div class="thumb">
                <img src={Venue1} alt="" />
              </div>
              <div class="down-content">
                <div class="left-content">
                  <div class="main-white-button">
                    <a href="ticket-details.html">Purchase Tickets</a>
                  </div>
                </div>
                <div class="right-content">
                  <h4>Radio City Musical Hall</h4>
                  <p>
                  Radio City Music Hall, located in New York City, is renowned for hosting a variety of events, including concerts, theater performances, and the famous Radio City Christmas Spectacular featuring the Rockettes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="venue-item">
              <div class="thumb">
                <img src={Venue2} alt="" />
              </div>
              <div class="down-content">
                <div class="left-content">
                  <div class="main-white-button">
                    <a href="ticket-details.html">Purchase Tickets</a>
                  </div>
                </div>
                <div class="right-content">
                  <h4>Madison Square Garden</h4>
                  <p>
                    Madison Square Garden, situated in New York City, is a historic arena renowned for hosting major sporting events, concerts featuring top artists, and historic other entertainment spectacles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="venue-item">
              <div class="thumb">
                <img src={Venue3} alt="" />
              </div>
              <div class="down-content">
                <div class="left-content">
                  <div class="main-white-button">
                    <a href="ticket-details.html">Purchase Tickets</a>
                  </div>
                </div>
                <div class="right-content">
                  <h4>Royce Hall</h4>
                  <p>
                  Royce Hall, located on the campus of the University of California, Los Angeles (UCLA), is a prominent is venue known for its stunning Romanesque architecture and cultural significance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* venum end */}
      <Footer />
    </div>
  );
}

export default Nav;
