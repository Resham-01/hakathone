import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import gsap from 'gsap'; // GSAP for animation
import Banner from '../Banner/Banner';
import DistrictsSection from '../District/DistrictComponent';
import Service from '../Service/ServiceComponent';
import Footer from '../Footer/FooterComponent';
import Header from '../Navbar/NavbarComponent';

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
    <>
      <div id="home" className="home-container">

        {/* header section */}
        <Header />

        {/* Hero Section */}
        <Banner />

        {/* District section */}
        <DistrictsSection />

        {/* Service section */}
        <Service />

        {/* footer section */}
        <Footer />

      </div>
    </>
  );
};

export default Home;
