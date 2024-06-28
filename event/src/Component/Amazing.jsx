import React from "react";
import map from "../assets/images/map-image.jpg";

function Amazing() {
  return (
    <div>
      <div className="amazing-venues">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="left-content">
                <h4>Three Amazing Venues for events</h4>
                <p>
                  ArtXibition Event Template is brought to you by Tooplate
                  website and it included REACT pages. These are{" "}
                  <a href="index.html">Homepage</a>,{" "}
                  <a href="about.html">About</a>,
                  <a href="rent-venue.html">Rent a venue</a>,{" "}
                  <a href="shows-events.html">shows &amp; events</a>,
                  <a href="event-details.html">event details</a>,{" "}
                  <a href="tickets.html">tickets</a>, and{" "}
                  <a href="ticket-details.html">ticket details</a>. You can feel
                  free to modify any page as you like. If you have any question,
                  please visit our{" "}
                  <a
                    href="https://www.tooplate.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact page
                  </a>
                  .
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
                  Chennai
                
                </span>
                <div className="text-button">
                  {/* <a href="show-events-details.html">
                    Need Directions? <i className="fa fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-image">
        <img src={map} alt="Maps of 3 Venues" />
      </div>
    </div>
  );
}

export default Amazing;
