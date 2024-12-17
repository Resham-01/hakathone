import React from "react";
import { Routes, Route, NavLink } from 'react-router';
import Home from "./Components/Home/HomeComponents";
import Accommodation from "./Components/Accomadation/accomadationComponent";
import ServicePage from "./Components/Service/AdvanceService";
import ContactUs from "./Components/Contact/contactComponent";
// import LocalGuides from "./Components/Service/ServicesPage/localGuide";


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
                {/* <Route  path="/service/local_guide" element={<LocalGuides />} /> */}

                <Route  path="/contact" element={<ContactUs />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* <Routes isLoggedIn={false} /> */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/count" element={<Count />} />
                
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/category/add" element={<AddCategory />} />
                <Route path="/admin/category/view" element={<ViewCategory />} />
                <Route path="/admin/category/delete/:category_id" element={<DeleteCategory />} />
                <Route path="/admin/category/update/:category_id" element={<UpdateCategory />} />
                
                <Route path="/admin/product/add" element={<AddProduct />} />
                <Route path="/admin/product/view" element={<ViewProduct />} />
                <Route path="/admin/product/view_details/:product_id" element={<ProductDetails />} />
                <Route path="/admin/product/delete/:product_id" element={<DeleteProduct />} />
                <Route path="/admin/product/update/:product_id" element={<UpdateProduct />} />
                <Route path="/admin/product/search" element={<SearchProduct />} />
                
                <Route path="/admin/profile" element={<AdminDashboard />} />
                <Route path="/user/profile" element={<UserProfile />} />
                <Route path="/setting" element={<Setting />} />
                
                <Route path="*" element={<PageNotFound />} />
            </Routes> */}
        </>
    );
}
