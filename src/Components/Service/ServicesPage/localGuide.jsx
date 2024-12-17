import React from "react";
import ServiceDetailPage from "./ServiceDetailPage";
import localGuideImg from "./images/local-guides.jpg";

const LocalGuides = () => {
    return (
        <ServiceDetailPage
            title="Local Guides"
            description="Explore Karnali Province with our experienced local guides who know the region inside out. Discover hidden gems and enjoy the best of local culture and heritage."
            imageSrc={localGuideImg}
        />
    );
};

export default LocalGuides;
