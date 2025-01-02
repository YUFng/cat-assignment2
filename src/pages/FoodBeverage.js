import React, { useRef, useState } from 'react';
import './FoodBeverage.css';

const FoodBeverage = () => {
    const foodRef = useRef(null);
    const beverageRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ title: '', description: '' });

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCardClick = (title, description) => {
        setSelectedItem({ title, description });
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const foodOptions = [
        {
            title: 'Indian Cuisine',
            description: 'Delicious Indian dishes with a variety of spices.',
            image: 'images/indian.jpg',
        },
        {
            title: 'Chinese Cuisine',
            description: 'Tasty Chinese dishes including noodles and dumplings.',
            image: 'images/chinese.jpg',
        },
        {
            title: 'Malay Cuisine',
            description: 'Savory Malay dishes with rich flavors.',
            image: 'images/malay.jpg',
        },
    ];

    const beverageOptions = [
        {
            title: 'Cold Drinks',
            description: 'Refreshing cold drinks to quench your thirst.',
            image: 'images/cold.jpg',
        },
        {
            title: 'Hot Drinks',
            description: 'Warm and comforting hot drinks for any time.',
            image: 'images/hot.jpg',
        },
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
                            onClick={() => handleCardClick(food.title, food.description)}
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
                            onClick={() => handleCardClick(beverage.title, beverage.description)}
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
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodBeverage;
