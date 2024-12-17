import React from "react";
import "./Common.css"; // For styles
import Header from "../../Navbar/NavbarComponent";
import Footer from "../../Footer/FooterComponent";

const HumlaDistrict = () => {
    const tourismSectors = [
        {
            id: 1,
            title: "Trekking Adventures",
            description:
                "Experience the stunning trails and breathtaking views of Humla's mountainous landscapes. Trek to the mystical Khyungla Pass and the remote villages of Humla.",
            buttonText: "Learn More",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GWq-T0mPI4LWL8lCRjL95GOQKn7dJ3Qa1g&s", // Example online image
        },
        {
            id: 2,
            title: "Cultural Heritage Sites",
            description:
                "Explore the rich cultural history of Humla with its ancient monasteries, temples, and historical landmarks that date back centuries.",
            buttonText: "Discover Heritage",
            imageUrl: "https://www.mountmania.com/uploads/img/humla-limi-valley-trek.jpg", // Example online image
        },
        {
            id: 3,
            title: "Wildlife and Nature",
            description:
                "Humla is home to a diverse range of wildlife and pristine natural beauty. Visit protected wildlife areas and spot rare animals and birds in their natural habitats.",
            buttonText: "Explore Nature",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWCRYYD9JCDZBf4knHtoeWCBS8RaXkfTx9w&s", // Example online image
        },
        {
            id: 4,
            title: "Local Cuisine",
            description:
                "Taste the authentic flavors of Humla, from traditional dishes to local beverages made from locally sourced ingredients.",
            buttonText: "Taste Humla",
            imageUrl: "https://whatthenepal.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-17.11.37_96222109.jpg", // Example online image
        },
        {
            id: 5,
            title: "Adventure Sports",
            description:
                "For the thrill-seekers, Humla offers various adventure sports like paragliding, rock climbing, and river rafting.",
            buttonText: "Get Adventurous",
            imageUrl: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/rafting1.jpg", // Example online image
        },
    ];

    return (
        <>
            <Header />
            <div className="feature-section">
                {tourismSectors.map((sector, index) => (
                    <div
                        key={sector.id}
                        className={`feature-card ${index % 2 === 0 ? "right" : "right"}`}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <img src={sector.imageUrl} alt={sector.title} />
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
                                <img src={sector.imageUrl} alt={sector.title} />
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default HumlaDistrict;
