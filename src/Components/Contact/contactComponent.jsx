import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { gsap } from "gsap";
import "./contactComponent.css";
import Header from "../Navbar/NavbarComponent";
import Footer from "../Footer/FooterComponent";

const ContactUs = () => {
    useEffect(() => {
        // GSAP Animation for Section
        gsap.from(".contact-section h2", { y: -50, duration: 1, ease: "power3.out" });
        gsap.from(".contact-form", { x: -50, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from(".contact-info", { x: 50, duration: 1, delay: 0.5, ease: "power3.out" });
    }, []);

    return (
        <>
            <Header />
            <section className="contact-section">
                <div className="contact-title container  ">
                    <h2 className="mt-4">Contact Us</h2>
                    <div className="contact-wrapper">
                        {/* Contact Form */}
                        <div className="contact-form col-md-6 bg-transparent bg-gradient">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Your Phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info col-md-6 bg-transparent bg-gradient">
                            <h4>Contact Information</h4>
                            <p><strong>Address:</strong> Gyaneshwor, Kathmandu - Nepal</p>
                            <p><strong>Email:</strong> contact@domain.com</p>
                            <p><strong>Phone:</strong> +123 456 7890</p>
                            <h4>Find Us Here</h4>
                            <div className="ratio ratio-16x9">
                                
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.10445418591!2d85.33088859355917!3d27.706732018203624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a692fc1c5%3A0xb1c8685679ee4aff!2sMid-Valley%20International%20College!5e0!3m2!1sen!2snp!4v1734463552557!5m2!1sen!2snp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps">
                                </iframe>
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
