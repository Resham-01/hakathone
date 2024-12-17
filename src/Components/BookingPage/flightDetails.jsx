import React, { useState } from "react";
import { flightData } from "../../data";
import "./flightDetails.css";
import Header from "../Navbar/NavbarComponent";
import Footer from "../Footer/FooterComponent";
import { Link } from "react-router-dom";

function FlightDetails() {
    const [selectedFlights, setSelectedFlights] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null); // To store the selected flight

    const handleCheckboxChange = (flightId) => {
        setSelectedFlights((prev) =>
            prev.includes(flightId)
                ? prev.filter((id) => id !== flightId)
                : [...prev, flightId]
        );
    };

    const handleProceed = (flight) => {
        setSelectedFlight(flight);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFlight(null); // Reset the selected flight when closing the modal
    };

    return (
        <>
            <Header />
            <div className="container my-5">
                <h2 className="text-center text-dark mb-4 title fs-2">Flight Details - Surkhet</h2>
                <div className="row">
                    {flightData.map((flight) => (
                        <div key={flight.id} className="col-md-6 mb-4">
                            <div className={`flight-card ${selectedFlights.includes(flight.id) ? "selected" : ""}`}>
                                <div className="flight-card-header">
                                    <h5 className="text-uppercase">
                                        {flight.from} <i className="bi bi-arrow-right"></i> {flight.to}
                                    </h5>
                                    <span className="badge bg-warning text-dark">Price: ${flight.price}</span>
                                </div>
                                <div className="flight-details">
                                    <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
                                    <p><strong>Departure:</strong> {flight.departureTime}</p>
                                    <p><strong>Arrival:</strong> {flight.arrivalTime}</p>
                                    <p><strong>Duration:</strong> {flight.duration}</p>
                                </div>
                                <div className="text-center mt-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input me-2"
                                        checked={selectedFlights.includes(flight.id)}
                                        onChange={() => handleCheckboxChange(flight.id)}
                                    />
                                    <label className="form-check-label text-light">Select Flight</label>
                                </div>
                            </div>
                            {/* Proceed Button */}
                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-success btn-lg px-4"
                                    onClick={() => handleProceed(flight)}
                                    disabled={!selectedFlights.includes(flight.id)}
                                >
                                    Proceed
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Booking Confirmation */}
                {showModal && selectedFlight && (
                    <div className="modal-overlay">
                        <div className="modal-content bg-light">
                            <div className="modal-header">
                                <h5 className="modal-title fs-4">Book Your Flight</h5>
                                <button onClick={handleCloseModal} className="close-btn"><i className="bi bi-x-lg"></i></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="fw-semibold">Flight Summary</h4>
                                <p className="text-center">
                                    <strong>From:</strong> {selectedFlight.from} <br />
                                    <strong>To:</strong> {selectedFlight.to} <br />
                                    <strong>Flight No:</strong> {selectedFlight.flightNumber} <br />
                                    <strong>Price:</strong> ${selectedFlight.price}
                                </p>
                                {/* Booking Form Component */}
                                <BookingForm selectedFlight={selectedFlight} onClose={handleCloseModal} />
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <Footer />
        </>
    );
}

const BookingForm = ({ selectedFlight, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
    });

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proceed with confirmation or backend logic
        alert("Booking Confirmed!");
        onClose(); // Close modal after submission
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="my-2">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="mb-2">Contact</label>
                <input
                    type="text"
                    name="contact"
                    className="form-control"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Payment Method Selection */}
            <div className="mb-3 text-center">
                <label className="mb-2 fs-4 fw-semibold text-center">Payment Method</label>
                <div>
                    <button
                        type="button"
                        className={`btn btn-outline-primary w-100 my-2 ${selectedPaymentMethod === 'esewa' ? 'active' : ''}`}
                        onClick={() => handlePaymentMethodChange('esewa')}
                    >
                        Pay with eSewa
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-secondary w-100 my-2 ${selectedPaymentMethod === 'khalti' ? 'active' : ''}`}
                        onClick={() => handlePaymentMethodChange('khalti')}
                    >
                        Pay with Khalti
                    </button>
                </div>
            </div>

            {selectedPaymentMethod && (
                <div className="payment-method-info">
                    <p>
                        <strong>Selected Payment Method:</strong> {selectedPaymentMethod === 'esewa' ? 'eSewa' : 'Khalti'}
                    </p>
                </div>
            )}

            <button type="submit" className="btn btn-success w-100">Confirm Booking</button>
        </form>
    );
};

export default FlightDetails;
