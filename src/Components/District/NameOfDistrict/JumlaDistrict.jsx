import React from "react";
import "./Common.css"; // For styles
import Header from "../../Navbar/NavbarComponent";
import Footer from "../../Footer/FooterComponent";

const JumlaDistrict = () => {
    const tourismSectors = [
        {
            id: 3,
            title: "Buddhist Monasteries",
            description:
                "Jumla is home to many ancient Buddhist monasteries where visitors can experience the unique culture and spirituality of the region.",
            buttonText: "Visit the Monasteries",
            imageUrl: "https://nepaltraveller.com/laravel-filemanager/photos/74/_100017165_20180213215007_bbtg2760.jpg", // Example online image
        },
        {
            id: 4,
            title: "Local Cuisine",
            description:
                "Taste the local flavors of Jumla with traditional dishes like ‘Chiya’, ‘Mitho Bhat’, and delicious local sweets made from indigenous ingredients.",
            buttonText: "Taste Jumla",
            imageUrl: "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221108141152/636a5f569c7e80680e056e22jpeg.jpg", // Example online image
        },
        {
            id: 5,
            title: "Historical Sites",
            description:
                "Jumla is rich in history, with many ancient forts, temples, and palaces that showcase the cultural legacy of the region.",
            buttonText: "Discover History",
            imageUrl: "https://nepaltraveller.com/images/main/1710665939.sidetrackimage1681971547.sidetrackimagethumb.jpg", // Example online image
        },
    ];

    return (
        <>
            <Header />
            <div className="feature-section">
                {tourismSectors.map((sector, index) => (
                    <div
                        key={sector.id}
                        className={`feature-card ${index % 2 === 0 ? "right" : "left"}`}
                        style={{ animation: `slide-up 1s ease-out ${index * 0.2}s` }} // Sliding animation
                    >
                        {index % 2 === 0 ? (
                            <>
                                <img
                                    src={sector.imageUrl}
                                    alt={sector.title}
                                    className="feature-image"
                                    style={{ animation: `3d-rotate 1s ease-out ${index * 0.3}s` }} // 3D animation
                                />
                                <div className="feature-content">
                                    <h2>{sector.title}</h2>
                                    <p>{sector.description}</p>
                                    <button>{sector.buttonText}</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="feature-content">
                                    <h2>{sector.title}</h2>
                                    <p>{sector.description}</p>
                                    <button>{sector.buttonText}</button>
                                </div>
                                <img
                                    src={sector.imageUrl}
                                    alt={sector.title}
                                    className="feature-image"
                                    style={{ animation: `3d-rotate 1s ease-out ${index * 0.3}s` }} // 3D animation
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default JumlaDistrict;
