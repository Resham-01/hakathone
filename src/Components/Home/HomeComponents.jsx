import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import gsap from 'gsap'; // GSAP for animations
import Banner from '../Banner/Banner';
import DistrictsSection from '../District/DistrictComponent';
import Service from '../Service/ServiceComponent';
import Footer from '../Footer/FooterComponent';

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const loginModalRef = useRef(null);
  const signupModalRef = useRef(null);
  const loginButtonRef = useRef(null);
  const signupButtonRef = useRef(null);

  useEffect(() => {
    // GSAP Animations for homepage elements
    gsap.fromTo(
      ".navbar-brand",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      ".navbar-nav .nav-item",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
    );

    // Animate Login and SignUp buttons
    gsap.fromTo(
      loginButtonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      signupButtonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 1, ease: 'power3.out' }
    );


    // Animate Login Modal when it opens
    if (showLoginModal) {
      gsap.fromTo(
        loginModalRef.current,
        { opacity: 0, scale: 0.8, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    // Animate SignUp Modal when it opens
    if (showSignupModal) {
      gsap.fromTo(
        signupModalRef.current,
        { opacity: 0, scale: 0.8, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [showLoginModal, showSignupModal]);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleSignupClick = () => setShowSignupModal(true);
  const handleCloseModal = () => {
    gsap.to(loginModalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setShowLoginModal(false),
    });
    gsap.to(signupModalRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setShowSignupModal(false),
    });
  };

  return (
    <div id="home" className="home-container">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">KARNALI</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" ref={loginButtonRef} onClick={handleLoginClick}>
                  <i className="bi bi-person-circle"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" ref={signupButtonRef} onClick={handleSignupClick}>
                  <i className="bi bi-person-plus-fill"></i> Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Login Modal */}
      {showLoginModal && (
        <div
          className="modal show"
          style={{ display: 'block' }}
          aria-labelledby="loginModalLabel"
          aria-hidden="false"
          ref={loginModalRef}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="text-center modal-title" id="loginModalLabel">Log In</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="loginEmail" placeholder="Email address" />
                    <label htmlFor="loginEmail">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                    <label htmlFor="loginPassword">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                  <div className="mt-3 text-center">
                    <p>Don't have an account? <a href="#" onClick={() => { setShowLoginModal(false); setShowSignupModal(true); }}>Sign up</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div
          className="modal show"
          style={{ display: 'block' }}
          aria-labelledby="signupModalLabel"
          aria-hidden="false"
          ref={signupModalRef}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="signupName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="signupName" placeholder="Enter your full name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                  <div className="mt-3 text-center">
                    <p>Already have an account? <a href="#" onClick={() => { setShowSignupModal(false); setShowLoginModal(true); }}>Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Banner />

      {/* District section */}
      <DistrictsSection />

      {/* Service section */}
      <Service />



    </div>
  );
};

export default Home;
