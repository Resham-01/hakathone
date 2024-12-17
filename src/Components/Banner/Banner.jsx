import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import gsap from "gsap";
import "./banner.css";

const Banner = () => {
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
    <section className="slider position-relative">
      <Carousel variant="dark">
        {/* Slide 1 */}
        <Carousel.Item>
          <img src={"/Rara.jpg"} className="d-block w-100" alt="First Slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading" ref={headingRef}>
                JOURNEY TO <span>EXPLORE KARNALI</span>
              </h5>
              <p className="sub_text" ref={subTextRef}>
                Discover the world's best travel destinations
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img src={"/Shey Phoksundo Lake.webp"} className="d-block w-100" alt="Second Slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading" ref={headingRef}>
                EXPLORE THE BEAUTY OF <span>RARA LAKE</span>
              </h5>
              <p className="sub_text" ref={subTextRef}>
                Experience the serenity of Nepal's largest lake
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img src={"/Kakrebhir 1.jpg"} className="d-block w-100" alt="Third Slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading" ref={headingRef}>
                TREK TO THE MAGICAL <span>KAKREBHIR</span>
              </h5>
              <p className="sub_text" ref={subTextRef}>
                Discover the scenic views and peaceful trails
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Search Form Above the Carousel */}
      {/* <div className="search-form position-absolute translate-middle" ref={searchFormRef}>
        <h5>Find Your Next Adventure</h5>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search destinations..."
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Banner;
