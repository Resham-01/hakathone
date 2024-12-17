import React from "react";
import { Routes, Route, NavLink } from 'react-router';
import Home from "./Components/Home/HomeComponents";
import Accommodation from "./Components/Accomadation/accomadationComponent";
import ServicePage from "./Components/Service/AdvanceService";
import LocalGuides from "./Components/Service/ServicesPage/localGuide";
import TourPackages from "./Components/Service/ServicesPage/tourPackage";

import ContactUs from "./Components/Contact/contactComponent";
import FlightDetails from "./Components/BookingPage/flightDetails";
import FlightBookingWrapper from "./Components/BookingPage/FlightBookingWrapper";
import HumlaDistrict from "./Components/District/NameOfDistrict/HumlaDistrict";
import JumlaDistrict from "./Components/District/NameOfDistrict/JumlaDistrict";
import DolpaDistrict from "./Components/District/NameOfDistrict/DolpaDistrict";


const PageNotFound = () => {
    return (
        <div className="text-center">
            <h1 className="top-50 start-50 fs-2 fw-bold mt-5">Page Not Found</h1>
            <img
                src="https://static.vecteezy.com/system/resources/previews/024/217/744/non_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png"
                alt="404 error"
                width={"400px"}
                height={"400px"}
            />
            <p>Go To <NavLink to="/" className={"text-primary"}>Home Page</NavLink></p>
        </div>
    );
}

export const MyRoute = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route  path="/accomodation" element={<Accommodation />} />
                <Route  path="/service" element={<ServicePage />} />
                <Route  path="/local_guide" element={<LocalGuides />} />
                <Route  path="/tour_packages" element={<TourPackages />} />

                <Route  path="/contact" element={<ContactUs />} />
                <Route  path="/details" element={<FlightDetails />} />
                <Route  path="/booking_page" element={<FlightBookingWrapper />} />

                <Route  path="/humla" element={<HumlaDistrict />} />
                <Route  path="/jumla" element={<JumlaDistrict />} />
                <Route  path="/dolpa" element={<DolpaDistrict />} />




                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}
