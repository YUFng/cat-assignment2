import React from "react";
import "./TouristSpotsCard.css"; // Import the CSS file for card styling

const TouristSpotCard = ({ spot }) => {
    return (
        <div className="tourist-spot-card">
            <img src={spot.image} alt={spot.name} className="tourist-spot-image" />
            <h3 className="tourist-spot-name">{spot.name}</h3>
            <p className="tourist-spot-description">{spot.description}</p>
            <p className="tourist-spot-location">Location: {spot.location}</p>
            <p className="tourist-spot-rating">Rating: ⭐ {spot.rating}</p>
        </div>
    );
};

export default TouristSpotCard;
