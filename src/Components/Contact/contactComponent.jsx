import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { gsap } from "gsap";
import "./contactComponent.css";
import Footer from "../Footer/FooterComponent";
import Header from "../Navbar/NavbarComponent";

const ContactUs = () => {
    useEffect(() => {
        // GSAP Animation on Page Load
        gsap.from("#contact h2", { y: -50, duration: 1, ease: "power3.out" });
        gsap.from("#contact form .mb-3", {
            x: -50,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3, // Stagger animation for form fields
        });
        gsap.from("#contact .contact-info", { x: 50, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from("#contact iframe", { scale: 0.9, duration: 1, delay: 0.8, ease: "power3.out" });
    }, []);

    return (
        <>
            <Header />
            {/* Contact Section */}
            <section id="contact" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-animated">
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* Contact Info and Map */}
                        <div className="col-md-6 contact-info">
                            <h4>Contact Information</h4>
                            <p>
                                <strong>Address:</strong> 1234 Street Name, City, Country
                            </p>
                            <p>
                                <strong>Email:</strong> contact@domain.com
                            </p>
                            <p>
                                <strong>Phone:</strong> +123 456 7890
                            </p>
                            <h4>Find Us Here</h4>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508738!2d144.96305781531542!3d-37.816279979751524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577697edb1b563!2sMelbourne%20CBD%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2snp!4v1687558292113!5m2!1sen!2snp"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
