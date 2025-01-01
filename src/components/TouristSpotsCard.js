import React, { useState } from 'react';
import './TouristSpotsCard.css';
import CustomModal from './CustomModal';

const TouristSpotsCard = ({ name, description, image, mapLink, rating, style }) => {
    const renderStars = (rating) => {
        // Default rating to 0 if missing or invalid
        if (!rating || typeof rating !== "number") {
            return null; // Don't render stars if the rating is invalid
        }

        const fullStars = Math.floor(rating); // Number of full stars
        const halfStar = rating % 1 !== 0; // Check if there's a half star
        const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

        return (
            <div className="rating-stars">
                {Array(fullStars).fill().map((_, index) => (
                    <span key={`full-${index}`} className="star full-star">★</span>
                ))}
                {halfStar && <span className="star half-star">☆</span>}
                {Array(emptyStars).fill().map((_, index) => (
                    <span key={`empty-${index}`} className="star empty-star">☆</span>
                ))}
            </div>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const handleCardClick = () => {
        setShowModal(true); // Open the modal when the card is clicked
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    const handleMapClick = () => {
        window.open(mapLink, "_blank"); // Open the map in a new tab
        setShowModal(false); // Close the modal
    };

    const handleHotelClick = () => {
        window.open("/hotel", "_blank"); // Redirect to the hotel page
        setShowModal(false); // Close the modal
    };

    return (
        <>
        <div
            className="tourist-spot-card"
            onClick={handleCardClick} style={style}>
            <img src={image} alt={name} className="tourist-spot-image" />
            <div className="tourist-spot-info">
                <h2 className="tourist-spot-name">{name}</h2>
                <p className="tourist-spot-description">{description}</p>
                <div className="tourist-spot-rating">
                    {rating ? (
                        <>
                            {renderStars(rating)} {/* Renders stars if rating exists */}
                            <span className="rating-value">({rating}/5)</span>
                        </>
                    ) : (
                        <span className="no-rating">Rating not available</span> // Show a placeholder for missing ratings
                    )}
                </div>
            </div>
        </div>

        <CustomModal
                show={showModal}
                title={`Visit ${name}`}
                description="What would you like to do?"
                onMapClick={handleMapClick}
                onHotelClick={handleHotelClick}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default TouristSpotsCard;