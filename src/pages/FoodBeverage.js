import React, { useRef, useState } from 'react';
import './FoodBeverage.css';

const StarRating = ({ rating }) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const halfStar = '⯪'; // Character for half star

    return (
        <div className="star-rating">
            {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.floor(rating)) {
                    return <span key={index} className="star">{fullStar}</span>;
                } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                    return <span key={index} className="star half">{halfStar}</span>; // Render half star
                } else {
                    return <span key={index} className="star">{emptyStar}</span>;
                }
            })}
        </div>
    );
};

const FoodBeverage = () => {
    const foodRef = useRef(null);
    const beverageRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ title: '', description: '', restaurants: [] });

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const foodOptions = [
        {
            title: 'Nasi Kandar',
            description: 'This is one of the food experiences...',
            image: 'images/indian.jpg',
            rating: 4.5,
            restaurants: [
                { name: 'Restaurant A', location: 'Location A', lat: 4.2105, lng: 101.9758 },
                { name: 'Restaurant B', location: 'Location B', lat: 4.2105, lng: 101.9758 },
            ],
        },
        // Other food options...
    ];

    const beverageOptions = [
        {
            title: 'Cold Drinks',
            description: 'Refreshing cold drinks to quench your thirst.',
            image: 'images/cold.jpg',
            rating: 4,
            restaurants: [
                { name: 'Drink Place A', location: 'Location A', lat: 4.2105, lng: 101.9758 },
                { name: 'Drink Place B', location: 'Location B', lat: 4.2105, lng: 101.9758 },
            ],
        },
        // Other beverage options...
    ];

    return (
        <div className="food-beverage-page">
            <header>
                <h1>Food & Beverages</h1>
                <p>Explore a variety of cuisines and drinks!</p>
            </header>

            <div className="button-container">
                <div
                    className="scroll-button"
                    style={{ backgroundImage: `url('images/food.jpg')` }}
                    onClick={() => scrollToSection(foodRef)}
                >
                    <h2>Food</h2>
                </div>
                <div
                    className="scroll-button"
                    style={{ backgroundImage: `url('images/drink.jpg')` }}
                    onClick={() => scrollToSection(beverageRef)}
                >
                    <h2>Beverages</h2>
                </div>
            </div>

            <div className="category" ref={foodRef}>
                <div className="section-header">
                    <h2>Food Options</h2>
                    <p>Discover a variety of delicious cuisines!</p>
                </div>
                <div className="grid">
                    {foodOptions.map((food) => (
                        <div
                            className="card"
                            onClick={() => handleCardClick(food)}
                            key={food.title}
                        >
                            <img src={food.image} alt={food.title} />
                            <div className="card-description">
                                <h4>{food.title}</h4>
                                <p>{food.description}</p>
                                <StarRating rating={food.rating} />
                                <p>{food.rating} / 5</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="category" ref={beverageRef}>
                <div className="section-header">
                    <h2>Beverage Options</h2>
                    <p>Enjoy refreshing drinks for any occasion!</p>
                </div>
                <div className="grid">
                    {beverageOptions.map((beverage) => (
                        <div
                            className="card"
                            onClick={() => handleCardClick(beverage)}
                            key={beverage.title}
                        >
                            <img src={beverage.image} alt={beverage.title} />
                            <div className="card-description">
                                <h4>{beverage.title}</h4>
                                <p>{beverage.description}</p>
                                <StarRating rating={beverage.rating} />
                                <p>{beverage.rating} / 5</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <h4>Suggested Restaurants:</h4>
                        <ul>
                            {selectedItem.restaurants.map((restaurant, index) => (
                                <li key={index}>
                                    <span>{restaurant.name} - {restaurant.location}</span>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${restaurant.lat},${restaurant.lng}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="location-button"
                                    >
                                        View on Maps
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodBeverage;
