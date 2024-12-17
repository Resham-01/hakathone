import React from "react";
import "./a.css"

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Safely Saved Lists",
      description:
        "Neatly arranged for your ease of access. Go to Saved at the top navigation bar, where we save your wanted items. Wrap up items based on category. Just a few clicks away from starting your journey! When you want to make a purchase from Saved.",
      buttonText: "Read More",
      imageUrl: "https://via.placeholder.com/300x200?text=Safely+Saved+Lists", // Replace with actual image
    },
    {
      id: 2,
      title: "Flight Price Alert",
      description:
        "Instant Notifications! You will get alerted as soon as the flight's prices match your budget, so you will be able to book the right flight at the right time. You only need to fill in the details of your desired flight, such as time of departure.",
      buttonText: "Find It Here",
      imageUrl: "https://via.placeholder.com/300x200?text=Flight+Price+Alert", // Replace with actual image
    },
  ];

  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`feature-card ${index % 2 === 0 ? "right" : "right"}`}
        >
          {index % 2 === 0 ? (
            <>
              <img src={feature.imageUrl} alt={feature.title} />
              <div className="feature-content">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <button>{feature.buttonText}</button>
              </div>
            </>
          ) : (
            <>
              <div className="feature-content">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <button>{feature.buttonText}</button>
              </div>
              <img src={feature.imageUrl} alt={feature.title} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;