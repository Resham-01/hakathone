import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Footer = () => (
  <>
    <footer className="bg-light text-white py-5">
      <div className="container">
        <div className="row">
          {/* First Section: Navigation Links */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="text-uppercase text-dark my-3" style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '1px' }}>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Second Section: Contact Info */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="text-uppercase text-dark my-3" style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '1px' }}>Contact Us</h5>
            <p className="text-muted mb-3">
              Explore Karnali, Street Address, City, Country
            </p>
            <p className="text-muted mb-3">
              <strong>Email:</strong> contact@karnali.com
            </p>
            <p className="text-muted mb-3">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>

          {/* Third Section: Newsletter Signup */}
          <div className="col-12 col-md-4 mb-3">
            <form>
              <h5 className="text-uppercase text-dark my-3" style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '1px' }}>Subscribe to our newsletter</h5>
              <p className="text-muted mb-3">Get the latest updates and travel tips.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>

    {/* Footer copyright section with improved styling */}
    <footer
      className="text-white text-center py-3"
      style={{ backgroundColor: '#222' }}
    >
      <p>&copy; 2024 <span style={{ fontWeight: 'bold', color: '#ffcc00' }}>Explore Karnali</span>. All Rights Reserved.</p>
    </footer>
  </>
);

export default Footer;
