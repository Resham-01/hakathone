import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styling

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }} // Start with invisible and shifted down
          animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
          transition={{ duration: 1, staggerChildren: 0.3, ease: 'easeOut' }} // Animate the children with stagger
        >
          <motion.div className="col-6 col-md-2 mb-3" variants={{ opacity: 1 }}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="col-6 col-md-2 mb-3" variants={{ opacity: 1 }}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="col-md-5 offset-md-1 mb-3" variants={{ opacity: 1 }}>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </footer>

      {/* Footer copyright section */}
      <motion.footer
        className="text-black text-center py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p>&copy; 2024 Explore Karnali. All Rights Reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Footer;
