import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./AdvanceService.css";  // Ensure you have the corresponding CSS for styling
import Header from "../Navbar/NavbarComponent";
import Footer from "../Footer/FooterComponent";

// ServiceCard Component
const ServiceCard = ({ iconClass, title, description, colorClass, path }) => {
    return (
        <div className="col-md-4 mb-4">
            <Link className="text-dark text-decoration-none" to={path}>
                <div className="service-card p-4 text-center shadow bg-white">
                    <div className={`icon-container mb-3 ${colorClass}`}>
                        <i className={`bi ${iconClass} display-3`}></i>
                    </div>
                    <h5 className="fs-5 fw-bold mb-2">{title}</h5>
                    <p className="text-muted">{description}</p>
                </div>
            </Link>
        </div>
    );
};

// ServicePage Component
const ServicePage = () => {
    useEffect(() => {
        // GSAP animation for fade-in effect
        gsap.from(".fade-in", {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, []);

    return (
        <>
            {/* Navbar Section */}
            <Header />

            {/* Service Section */}
            <section className="py-5 bg-light">
                <div className="container text-center mt-4">
                    <h2 className="fs-2 fw-bold mb-4 fade-in">Our Services</h2>
                    <div className="row">
                        <ServiceCard
                            iconClass="bi-person-fill"
                            colorClass="text-primary"
                            path="/local_guide"
                            title="Local Guides"
                            description="Explore Karnali Province with our expert local guides."
                        />
                        <ServiceCard
                            iconClass="bi-map-fill"
                            colorClass="text-success"
                            path="/tour_packages"
                            title="Tour Packages"
                            description="Choose from curated tour packages to explore Karnali."
                        />
                        <ServiceCard
                            iconClass="bi-chat-dots-fill"
                            colorClass="text-warning"
                            path="/support"
                            title="Support & Assistance"
                            description="Our team ensures a hassle-free journey for you."
                        />
                        <ServiceCard
                            iconClass="bi-building"
                            colorClass="text-danger"
                            path="/cultural_tours"
                            title="Cultural Heritage"
                            description="Discover Karnali's rich history and cultural festivals."
                        />
                        <ServiceCard
                            iconClass="bi-binoculars-fill"
                            colorClass="text-info"
                            path="/adventure_activities"
                            title="Adventure Activities"
                            description="Experience thrilling rafting, trekking, and wildlife tours."
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ServicePage;



