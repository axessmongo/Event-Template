import React from "react";
import like1 from '../assets/images/like-01.jpg'
import like2 from '../assets/images/like-02.jpg'
import like3 from '../assets/images/like-03.jpg'



function About() {
  return (
    <div className=" pb-5 pt-3">
      <div class="about-upcoming-shows">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <h2>About The Upcoming Show</h2>
              <p>
                <p>
                  ArtXibition Event Template is brought to you by Tooplate
                  website and it included total 7 HTML pages. These are{" "}
                  <a href="index.html">Homepage</a>,{" "}
                  <a href="about.html">About</a>,
                  <a href="rent-venue.html">Rent a venue</a>,{" "}
                  <a href="shows-events.html">shows &amp; events</a>,
                  <a href="event-details.html">event details</a>,{" "}
                  <a href="tickets.html">tickets</a>, and{" "}
                  <a href="ticket-details.html">ticket details</a>. You can feel
                  free to modify any page as you like. If you have any question,
                  please visit our{" "}
                  <a href="https://www.tooplate.com/contact" target="_blank">
                    Contact page
                  </a>
                  .
                </p>
              </p>
              <h4>Items That Are Restricted</h4>
              <ul>
                <li>* Flash Cameras</li>
                <li>* Food & Drinks</li>
                <li>* Any kind of flashy objects</li>
              </ul>
              
              <p>
                Art party vegan mixtape before they sold out raclette, cliche
                banh mi mumblecore ugh hell of. Art party kene ugh umami,
                readymade tbh small batch austin distillery aesthetic.Shoreditch
                narwhal livers edge actually godar affogato sartorial waistcoat
                ugh raw denim stumptown.
              </p>

              <h4>Directions & Car Parking</h4>
              <p>
                Art party vegan mixtape before they sold out raclette, cliche
                banh mi mumblecore ugh hell of. Art party kene ugh umami,
                readymade tbh small batch austin distillery aesthetic.Shoreditch
                narwhal livers edge actually godar affogato sartorial waistcoat
                ugh raw denim stumptown.
              </p>
              <div class="text-button">
                <a href="event-details.html">
                  Need Directions? <i class="fa fa-arrow-right"></i>
                </a>
              </div>
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
                            <a href="event-details.html"><img src={like1} alt=""/></a>
                            
                        </div>
                        <div class="down-content">
                            <span>Sept 10 to 14, 2021</span>
                            <a href="event-details.html"><h4>Wonder Land Music and Arts Festival</h4></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="like-item">
                        <div class="thumb">
                            <a href="event-details.html"><img src={like2} alt=""/></a>
                            
                        </div>
                        <div class="down-content">
                            <span>Oct 11 to 16, 2021</span>
                            <a href="event-details.html"><h4>Big Water Splashing Festival</h4></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="like-item">
                        <div class="thumb">
                            <a href="event-details.html"><img src={like3}alt=""/></a>
                            
                        </div>
                        <div class="down-content">
                            <span>Nov 10 to 18, 2021</span>
                            <a href="event-details.html"><h4>Tiger Dance Hip Hop Festival</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;
