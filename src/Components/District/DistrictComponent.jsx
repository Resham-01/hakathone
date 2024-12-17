import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import "./DistrictComponent.css";
import { Link } from "react-router-dom";

const districts = [
  {
    path: "/humla",
    image: "/Districts/Humla.webp",
    title: "Humla",
    description: "Explore the untouched beauty of Humla, known for its trekking routes and cultural richness.",
    altText: "Humla District",
  },
  {
    path: "/jumla",  
    image: "/Districts/Jumla11.jpg",
    title: "Jumla",
    description: "Discover Jumla, famous for its unique apple orchards and beautiful Rara Lake.",
    altText: "Jumla District",
  },
  {
    path: "/dolpa",  
    image: "/Districts/Dolpa.webp",
    title: "Dolpa",
    description: "Dolpa is home to Shey Phoksundo Lake and an incredible Himalayan landscape.",
    altText: "Dolpa District",
  },
  {
    path: "/mugu",  
    image: "/Districts/Mugu.jpg",
    title: "Mugu",
    description: "Mugu offers serene landscapes and Rara Lake, the largest lake in Nepal.",
    altText: "Mugu District",
  },
  {
    path: "/kalikot",  
    image: "/Districts/Kalikot.jpg",
    title: "Kalikot",
    description: "Experience the cultural heritage and rugged terrains of Kalikot.",
    altText: "Kalikot District",
  },
  {
    path: "/surkhet",  
    image: "/Districts/Surkhet.jpg",
    title: "Surkhet",
    description: "A gateway to Karnali, Surkhet is known for its valley beauty and rich biodiversity.",
    altText: "Surkhet District",
  },
  {
    path: "/dailekh",
    image: "/Districts/Dailekh-bazar.jpg",
    title: "Dailekh",
    description: "Famous for its temples and natural hot springs, Dailekh is a must-visit.",
    altText: "Dailekh District",
  },
  {
    path: "/jajarkot",  
    image: "/Districts/Jajarkot.jpg",
    title: "Jajarkot",
    description: "Jajarkot is rich in history, culture, and beautiful sceneries.",
    altText: "Jajarkot District",
  },
  {
    path: "/salyan",  
    image: "/Districts/Salyan.jpg",
    title: "Salyan",
    description: "Salyan is rich in history, culture, and beautiful sceneries.",
    altText: "Salyan District",
  },
  {
    path: "/western-rukum",  
    image: "/Districts/Western Rukum.jpg",
    title: "Western Rukum",
    description: "Western Rukum is known for its stunning natural beauty, unique culture, and historical significance.",
    altText: "Western Rukum District",
  },
];


const DistrictCard = ({ image, title, description, altText, path }) => (
  <motion.div
    className="col-md-4 py-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }} // Fade-in effect
  >
    <motion.div
      className="card destination-card"
      whileHover={{ scale: 1.05 }} // Scale effect on hover
      transition={{ duration: 0.3 }}
    >
      <img src={image} className="card-img-top" alt={altText} />
      <Link className="text-decoration-none" to={path}>
        <div className="card-body">
          <h5 className="card-title fs-5 fw-semibold text-dark">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </Link>
    </motion.div>
  </motion.div>
);

const DistrictsSection = () => {
  return (
    <motion.section
      id="destinations"
      className="py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }} // Fade-in effect for the entire section
    >
      <div className="container">
        <h2 className="text-center fs-2 fw-bold mb-4">Districts in Karnali</h2>
        <div className="row">
          {districts.map((district, index) => (
            <DistrictCard
              key={index}
              image={district.image}
              title={district.title}
              description={district.description}
              altText={district.altText}
              path={district.path}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DistrictsSection;
