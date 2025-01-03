import React, { useRef, useState } from 'react';
import './FoodBeverage.css';

const StarRating = ({ rating }) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const halfStar = '⯪';

    return (
        <div className="star-rating">
            {Array.from({ length: 5 }, (_, index) => {
                if (index < Math.floor(rating)) {
                    return <span key={index} className="star">{fullStar}</span>;
                } else if (index === Math.floor(rating) && rating % 1 !== 0) {
                    return <span key={index} className="star half">{halfStar}</span>;
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
            restaurants: [
                {
                    name: 'Restaurant A',
                    location: 'George Town',
                    url: 'https://www.google.com/maps/place/Shariff+Nasi+Kandar/@5.3720526,100.2995885,16.75z/data=!4m6!3m5!1s0x304ac19f08eccec1:0x3f2f726f7fc0b409!8m2!3d5.3717645!4d100.3013492!16s%2Fg%2F11bccgkj2z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
                    rating: 4.4,
                },
                {
                    name: 'Restaurant B',
                    location: 'Batu Ferringhi',
                    url: 'https://maps.example.com/restaurant-b',
                    rating: 4.2,
                },
            ],
        },
        // Other food options...
    ];

    const beverageOptions = [
        {
            title: 'Cold Drinks',
            description: 'Refreshing cold drinks...',
            image: 'images/cold.jpg',
            restaurants: [
                {
                    name: 'Drink Place A',
                    location: 'Location A',
                    url: 'https://maps.example.com/drink-place-a',
                    rating: 4.0,
                },
                {
                    name: 'Drink Place B',
                    location: 'Location B',
                    url: 'https://maps.example.com/drink-place-b',
                    rating: 3.8,
                },
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                        <h4>Suggested Restaurants:</h4>
                        <ul className="restaurant-list">
                            {selectedItem.restaurants.map((restaurant, index) => (
                                <li key={index} className="restaurant-item">
                                    <div className="restaurant-info">
                                        <h5>{restaurant.name}</h5>
                                        <p>{restaurant.location}</p>
                                        <StarRating rating={restaurant.rating} />
                                    </div>
                                    <a
                                        href={restaurant.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="location-button"
                                    >
                                        View on Maps 🌎
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
