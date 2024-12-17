import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./accomadationComponent.css";
import Footer from "../Footer/FooterComponent";
import Header from "../Navbar/NavbarComponent";
import { Link } from "react-router-dom";

function Accommodation() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const searchFormRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for heading and subtext
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 0.5, duration: 1.5, ease: "power3.out" }
    );

    // GSAP Animation for search form
    gsap.fromTo(
      searchFormRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 1.5, duration: 1.5, ease: "power3.out" }
    );
  }, []);

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
          <h1 ref={headingRef}>Discover your perfect stay in the heart of Karnali</h1>
          <p className="himalayas" ref={subTextRef}>
            Karnali Province offers cozy homestays and comfortable hotels, perfect for adventurers, families, and those seeking relaxation.
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGJEfvN9cAoMasBL0fF75Of3kq4ZhpfbT1A&s"
                    className="card-img-top"
                    alt="Hotel Karnali Luxury"
                  />
                  <Link className="text-decoration-none" to="/hotel-details">
                    <div className="card-body">
                      <h5 className="card-title text-dark">Hotel Karnali Luxury</h5>
                      <p className="card-text">
                        Premium stay with luxurious amenities and a rooftop view of the Himalayas.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Hotel Card 2 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="https://storage.googleapis.com/namchey-gcs-asia-east/article/61a750523e437d7a88395a3f/article-61a750523e437d7a88395a3f-1638357050224-1080w.jpeg"
                    className="card-img-top"
                    alt="Rara Haven Resort"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rara Haven Resort</h5>
                    <p className="card-text">
                      Serene environment close to Rara Lake, perfect for nature lovers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 3 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/a6/e3/56/siddhartha-resort-surkhet.jpg?w=1200&h=-1&s=1"
                    className="card-img-top"
                    alt="Surkhet Delight Inn"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Surkhet Delight Inn</h5>
                    <p className="card-text">
                      Your ideal stay in Surkhet with modern comforts and top-rated services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 4 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/fa/01/43/hotel-in-chisapani-with.jpg?w=700&h=-1&s=1"
                    className="card-img-top"
                    alt="Himalayan Vista Hotel"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Himalayan Vista Hotel</h5>
                    <p className="card-text">
                      Offering stunning Himalayan views and cozy accommodations for all.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 5 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvfnqFHBI7rOlLp9W2SZfXQLt75X1Jqj4kw&s"
                    className="card-img-top"
                    alt="Blue Sky Lodge"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Blue Sky Lodge</h5>
                    <p className="card-text">
                      Affordable comfort with beautiful landscapes and excellent food.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hotel Card 6 */}
              <div className="col-md-4 py-2">
                <div className="card destination-card">
                  <img
                    src="https://blueskyhotel.com.np/images/blue-sky/hotel.jpg"
                    className="card-img-top"
                    alt="Karnali Heritage Inn"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Karnali Heritage Inn</h5>
                    <p className="card-text">
                      A blend of cultural charm and modern facilities in the heart of Karnali.
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
