import React from "react";

const TouristSpotCard = ({ spot }) => {
    return (
        <div className="tourist-spot-card">
            <img src={spot.image} alt={spot.name} />
            <h3>{spot.name}</h3>
            <p>{spot.description}</p>
            <p>Location: {spot.location}</p>
            <p>Rating: {spot.rating}</p>
        </div>
    );
};

export default TouristSpotCard;
