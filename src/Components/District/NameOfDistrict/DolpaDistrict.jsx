import React from "react";
import "./Common.css"; // Updated for Dolpa styles
import Header from "../../Navbar/NavbarComponent";
import Footer from "../../Footer/FooterComponent";

const DolpaDistrict = () => {
    const tourismSectors = [
        {
            id: 1,
            title: "Shey Phoksundo Lake",
            description:
                "Shey Phoksundo Lake is one of the most beautiful and largest lakes in Nepal, located in Dolpa. Surrounded by the majestic Himalayas, it is a must-visit for trekkers and nature lovers.",
            buttonText: "Explore Shey Phoksundo Lake",
            imageUrl: "https://i0.wp.com/ghumante.com/wp-content/uploads/2021/03/72879400_3594431213904214_4152555221370798080_o.jpg?resize=1140%2C760&ssl=1", // Example online image
        },
        {
            id: 2,
            title: "Upper Dolpo Trek",
            description:
                "The Upper Dolpo Trek is one of the most remote and challenging trekking routes in Nepal, offering stunning views of snow-capped mountains and the opportunity to experience the ancient Tibetan culture.",
            buttonText: "Plan Your Trek",
            imageUrl: "https://nepalbasecamptreks.com/wp-content/uploads/2024/07/dolpo-trekking.webp", // Example online image
        },
        {
            id: 3,
            title: "Dunai-headquarters of Dolpa",
            description:
                "Dunai is the district headquarters of Dolpa and a perfect base for trekking. The town offers breathtaking views and is rich in culture and tradition.",
            buttonText: "Visit Dunai",
            imageUrl: "https://exploredolpotrekking.com/wp-content/uploads/2019/04/Dunai-Bajar-Dolpa-1024x683.jpg", // Example online image
        },
        {
            id: 4,
            title: "Tibetan Culture and Monasteries",
            description:
                "Dolpa is rich in Tibetan culture, with many monasteries and Buddhist sites. The region is home to ancient Tibetan traditions and practices.",
            buttonText: "Discover Tibetan Culture",
            imageUrl: "https://travelwithraby.com/wp-content/uploads/2023/01/Dolpo-Trek.jpg", // Example online image
        },
        {
            id: 5,
            title: "Mountains of Dolpa",
            description:
                "Dolpa is home to some of the most majestic mountains in Nepal, including Kanjirowa, a peak that stands tall above the valley and offers stunning panoramic views.",
            buttonText: "Climb the Peaks",
            imageUrl: "https://peakvisor.com/photo/5/5c/Dhaulagiri_mountain.jpg", // Example online image
        },
    ];

    return (
        <>
            <Header />
            <div className="feature-section">
                {tourismSectors.map((sector, index) => (
                    <div
                        key={sector.id}
                        className={`feature-card ${index % 2 === 0 ? "left" : "right"}`}
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

export default DolpaDistrict;
