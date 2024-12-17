import React from "react";
import "./accomadationComponent.css";
import Footer from "../Footer/FooterComponent";
import Header from "../Navbar/NavbarComponent";

function Accommodation() {
  return (

    <>
      <div>
        <Header />
        {/* Video Background */}
        <div className="video-background">
          <video autoPlay muted loop>
            <source src={"/hotel-video.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="content">
          <h1>Discover your perfect stay in the heart of Karnali</h1>
          <p className="himalayas">
            Karnali Province offers cozy homestays and comfortable hotels, perfect for adventurers, families, and those seeking relaxation.
          </p>
        </div>

        {/* Hotels Section */}
        <section id="hotels" className="py-5">
          <div className="container">
            <h2 className="text-center fs-2 fw-bold mb-4">Popular Hotels in Karnali</h2>
            <div className="row">
              {/* Hotel Card 1 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="/karnali-hotel.webp"
                    className="card-img-top"
                    alt="Hotel Karnali"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hotel Karnali</h5>
                    <p className="card-text">
                      Experience top-notch hospitality with breathtaking mountain
                      views.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 2 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="/rara-resort.jpg"
                    className="card-img-top"
                    alt="Rara Resort"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rara Resort</h5>
                    <p className="card-text">
                      Enjoy serene surroundings near the beautiful Rara Lake.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 3 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="/siddhartha-sunny-resort.jpg"
                    className="card-img-top"
                    alt="Surkhet Inn"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Surkhet Inn</h5>
                    <p className="card-text">
                      Perfect blend of comfort and convenience in the heart of
                      Surkhet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Accommodation;
