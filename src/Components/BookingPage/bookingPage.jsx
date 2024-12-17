import React, { useState } from "react";
import "./bookingPage.css";

function BookingPage({ selectedFlight, onConfirm }) {
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
        onConfirm(formData);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <div className="booking-container">
            <h2 className="text-center">Book Your Flight</h2>

            {/* Flight Summary Section */}
            <div className="flight-summary">
                <h4>Flight Summary</h4>
                <p>
                    <strong>From:</strong> {selectedFlight.from} <br />
                    <strong>To:</strong> {selectedFlight.to} <br />
                    <strong>Flight No:</strong> {selectedFlight.flightNumber} <br />
                    <strong>Departure:</strong> {selectedFlight.departureTime} <br />
                    <strong>Arrival:</strong> {selectedFlight.arrivalTime} <br />
                    <strong>Duration:</strong> {selectedFlight.duration} <br />
                    <strong>Price:</strong> ${selectedFlight.price}
                </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="mb-3">
                    <label>Name</label>
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
                    <label>Email</label>
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
                    <label>Contact</label>
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
                <div className="mb-3">
                    <label>Payment Method</label>
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
                            className={`btn btn-outline-success w-100 my-2 ${selectedPaymentMethod === 'khalti' ? 'active' : ''}`}
                            onClick={() => handlePaymentMethodChange('khalti')}
                        >
                            Pay with Khalti
                        </button>
                    </div>
                </div>

                {/* Display payment method choice */}
                {selectedPaymentMethod && (
                    <div className="payment-method-info">
                        <p>
                            <strong>Selected Payment Method:</strong> {selectedPaymentMethod === 'esewa' ? 'eSewa' : 'Khalti'}
                        </p>
                        <p>Please proceed with the selected payment method.</p>
                    </div>
                )}

                {/* Confirm Booking Button */}
                <button type="submit" className="btn btn-success w-100">
                    Confirm Booking
                </button>
            </form>
        </div>
    );
}

export default BookingPage;
