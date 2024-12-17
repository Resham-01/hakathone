import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <>
    {/* Main Footer */}
    <footer className="py-5" style={{ background: 'linear-gradient(135deg, #2c2c2c, #1f1f1f)' }}>
      <div className="container text-light">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-4" style={{ letterSpacing: '1px', color: '#ffcc00' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {['Home', 'Features', 'Pricing', 'About'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-light text-decoration-none" style={{ transition: 'color 0.3s' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-4" style={{ letterSpacing: '1px', color: '#ffcc00' }}>Contact Us</h5>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              <strong>Address:</strong> Explore Karnali, Street 123, City, Country
            </p>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              <strong>Email:</strong> contact@karnali.com
            </p>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="mb-4" style={{ letterSpacing: '1px', color: '#ffcc00' }}>Newsletter</h5>
            <p style={{ color: '#ccc' }}>Subscribe to our newsletter for travel updates.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email"
                required
              />
              <button className="btn btn-warning text-dark" type="submit" style={{ fontWeight: 'bold' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>

    {/* Bottom Footer */}
    <div
      className="text-center py-3"
      style={{ backgroundColor: '#181818', color: '#fff', fontSize: '14px' }}
    >
      <p className="mb-0 text-light">
        &copy; {new Date().getFullYear()} <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>Explore Karnali</span>.
        All Rights Reserved.
      </p>
    </div>
  </>
);

export default Footer;
