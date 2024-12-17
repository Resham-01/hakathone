import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section id="tourist-guide" className="py-5">
      <div className="container fade-in">
        <h2 className="text-center fs-2 fw-bold mb-4">Tourist Guide Services</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="service-card bg-info p-4 text-dark">
              <i className="bi bi-person-fill fs-2 mb-3"></i>
              <h5 className='my-2 fw-semibold'>Local Guides</h5>
              <p>Explore Surkhet with our expert local guides who will show you the hidden gems of the valley.</p>
              <Link to="/local_guide" className="btn btn-primary mt-3">
                Read more...
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card bg-info p-4 text-dark">
              <i className="bi bi-map-fill fs-2 mb-3"></i>
              <h5 className='my-2 fw-semibold'>Tour Packages</h5>
              <p>Choose from our curated tour packages to make the most of your trip to Surkhet.</p>
              <Link to="/tour_packages" className="btn btn-primary mt-3">
                Read more...
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card bg-info p-4 text-dark">
              <i className="bi bi-chat-dots-fill fs-2 mb-3"></i>
              <h5 className='my-2 fw-semibold'>Support & Assistance</h5>
              <p>Our team is here to provide all the support you need during your travels in Surkhet.</p>
              <Link to="" className="btn btn-primary mt-3">
                Read more...
              </Link>
            </div>
          </div>
          <div className="service-card bg-info my-4 p-4 text-dark">
            <i className="bi bi-airplane-engines-fill"></i>
            <h3 className='my-2 fw-semibold'>Easy Online Booking</h3>
            <p>Book flights to Surkhet from any major city in Nepal with our simple, fast, and secure system.</p>
            <Link to="/details" className="btn btn-primary mt-3">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
