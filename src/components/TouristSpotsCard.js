import React, { useState } from 'react';
import './TouristSpotsCard.css';
import CustomModal from './CustomModal';

const TouristSpotsCard = ({ name, description, image, mapLink, rating, style }) => {
    const renderStars = (rating) => {

        if (!rating || typeof rating !== "number") {
            return null;
        }

        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

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
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleMapClick = () => {
        window.open(mapLink, "_blank");
        setShowModal(false);
    };

    const handleHotelClick = () => {
        window.open("/hotel", "_blank");
        setShowModal(false);
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
                            {renderStars(rating)} {}
                            <span className="rating-value">({rating}/5)</span>
                        </>
                    ) : (
                        <span className="no-rating">Rating not available</span>
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