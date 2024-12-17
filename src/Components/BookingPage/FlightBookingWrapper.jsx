// src/components/FlightBookingWrapper.js
import React from "react";
import { useLocation } from "react-router-dom";
import { flightData } from "../../data";

function FlightBookingWrapper() {
    const location = useLocation();
    const { selectedFlights } = location.state || {}; // Access the passed state

    if (!selectedFlights || selectedFlights.length === 0) {
        return <div className="text-center">No flights selected.</div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center text-dark mb-4 title fs-2">Booking Details</h2>
            <div className="selected-flights-container">
                <h4 className="text-center text-light mb-3">Your Selected Flights</h4>
                <ul className="list-group">
                    {selectedFlights.map((id) => {
                        const flight = flightData.find((f) => f.id === id);
                        return (
                            <li key={id} className="list-group-item list-group-item-action">
                                <strong>{flight.from} to {flight.to}</strong> - Flight No: {flight.flightNumber} - ${flight.price}
                            </li>
                        );
                    })}
                </ul>
                <div className="text-center mt-4">
                    <button className="btn btn-info btn-lg px-4">Confirm Booking</button>
                </div>
            </div>
        </div>
    );
}

export default FlightBookingWrapper;
