import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./localGuide.css"; // Custom CSS
import Footer from "../../Footer/FooterComponent";
import Header from "../../Navbar/NavbarComponent";

const LocalGuides = () => {
    return (
        <>
            <Header />
            <div className="local-guides-container">
                {/* Hero Section */}
                <div className="hero-section d-flex align-items-center justify-content-center">
                    <div className="hero-content text-center">
                        <h1 className="display-3 fw-bold">Explore with Local Guides</h1>
                        <p className="lead text-light">
                            Discover the magic of Karnali Province with our expert guides. Unlock hidden gems, embrace local culture, and experience unforgettable adventures.
                        </p>
                        <button className="btn btn-light btn-lg glass-btn mt-3">Get Started</button>
                    </div>
                </div>

                {/* Features Section */}
                <div className="container my-5">
                    <div className="row g-5 align-items-stretch">
                        {/* Feature Card 1 */}
                        <div className="col-md-4">
                            <div className="feature-card shadow-lg rounded text-center">
                                <img
                                    src="/gem.png"
                                    alt="Hidden Gems"
                                    className="feature-image img-fluid mb-3 mx-auto d-block"
                                />
                                <h3 className="mt-3 text-light">Hidden Gems</h3>
                                <p className="text-light">
                                    Discover secret locations and breathtaking natural beauty with our experienced local guides.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="col-md-4">
                            <div className="feature-card shadow-lg rounded text-center">
                                <img
                                    src="/rich-culture-1.png"
                                    alt="Local Culture"
                                    className="feature-image img-fluid mb-3 mx-auto d-block"
                                />
                                <h3 className="mt-3 text-light">Rich Culture</h3>
                                <p className="text-light">
                                    Immerse yourself in the traditions, stories, and festivals of Karnali's vibrant communities.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="col-md-4">
                            <div className="feature-card shadow-lg rounded text-center">
                                <img
                                    src="/Adventure-1.png"
                                    alt="Adventure"
                                    className="feature-image img-fluid mb-3 mx-auto d-block"
                                />
                                <h3 className="mt-3 text-light">Thrilling Adventures</h3>
                                <p className="text-light">
                                    Whether hiking, rafting, or exploring, enjoy thrilling adventures tailored to you.
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

export default LocalGuides;
