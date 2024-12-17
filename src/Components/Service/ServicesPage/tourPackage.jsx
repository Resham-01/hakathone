import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tourPackages.css"; // Custom CSS
import Footer from "../../Footer/FooterComponent";
import Header from "../../Navbar/NavbarComponent";

const TourPackages = () => {
    return (
        <>
            <Header />
            <div className="tour-packages-container">
                {/* Hero Section */}
                <div className="hero-section d-flex align-items-center justify-content-center">
                    <div className="hero-content text-center">
                        <h1 className="display-3 fw-bold">Explore Our Tour Packages</h1>
                        <p className="lead text-light">
                            Choose from a variety of exclusive tour packages to discover the best of Karnali Province.
                            Whether you're looking for adventure, culture, or relaxation, we have something for every traveler.
                        </p>
                        <button className="btn btn-light btn-lg glass-btn mt-3">Book Now</button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="container my-5">
                    <div className="row g-5">
                        {/* Tour Package 1 */}
                        <div className="col-md-4">
                            <div className="tour-package-card shadow-lg p-4 text-center rounded">
                                <img
                                    src="/adventure-tours-1.png"
                                    alt="Adventure Package"
                                    className="feature-image mb-3"
                                />
                                <h3>Adventure Tours</h3>
                                <p>
                                    Embrace the thrill of Karnali's rugged landscapes with our exciting adventure packages. Hiking, rafting, and more await!
                                </p>
                            </div>
                        </div>

                        {/* Tour Package 2 */}
                        <div className="col-md-4">
                            <div className="tour-package-card shadow-lg p-4 text-center rounded">
                                <img
                                    src="/Cultural Exploration.png"
                                    alt="Cultural Package"
                                    className="feature-image mb-3"
                                />
                                <h3>Cultural Exploration</h3>
                                <p>
                                    Immerse yourself in the traditions, festivals, and local life of Karnali with our cultural tours.
                                </p>
                            </div>
                        </div>

                        {/* Tour Package 3 */}
                        <div className="col-md-4">
                            <div className="tour-package-card shadow-lg p-4 text-center rounded">
                                <img
                                    src="/Relaxation_Retreats-1.png"
                                    alt="Relaxation Package"
                                    className="feature-image mb-3"
                                />
                                <h3>Relaxation Retreats</h3>
                                <p>
                                    Escape to serene spots for relaxation and rejuvenation in the peaceful environments of Karnali.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TourPackages;