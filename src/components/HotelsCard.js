import React from 'react';
import './HotelsCard.css';

function HotelsCard({ name, location, rating, image }) {
    return (
        <div className="hotel-card">
            <img src={image} alt={name} className="hotel-image" />
            <div className="hotel-info">
                <h3>{name}</h3>
                <p>{location}</p>
                <p>Rating: {rating}/5</p>
            </div>
        </div>
    );
}

export default HotelsCard;
