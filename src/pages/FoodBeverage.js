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

    return (
        <div>
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
                    <div className="card"
                         style={{ backgroundImage: `url('images/indian.jpg')` }}
                         onClick={() => handleCardClick('Indian Cuisine', 'Delicious Indian dishes with a variety of spices.')}
                    >
                        <h4>Indian Cuisine</h4>
                    </div>
                    <div className="card"
                         style={{ backgroundImage: `url('images/chinese.jpg')` }}
                         onClick={() => handleCardClick('Chinese Cuisine', 'Tasty Chinese dishes including noodles and dumplings.')}
                    >
                        <h4>Chinese Cuisine</h4>
                    </div>
                    <div className="card"
                         style={{ backgroundImage: `url('images/malay.jpg')` }}
                         onClick={() => handleCardClick('Malay Cuisine', 'Savory Malay dishes with rich flavors.')}
                    >
                        <h4>Malay Cuisine</h4>
                    </div>
                </div>
            </div>

            <div className="category" ref={beverageRef}>
                <div className="section-header">
                    <h2>Beverage Options</h2>
                    <p>Enjoy refreshing drinks for any occasion!</p>
                </div>
                <div className="grid">
                    <div className="card"
                         style={{ backgroundImage: `url('images/cold.jpg')` }}
                         onClick={() => handleCardClick('Cold Drinks', 'Refreshing cold drinks to quench your thirst.')}
                    >
                        <h4>Cold Drinks</h4>
                    </div>
                    <div className="card"
                         style={{ backgroundImage: `url('images/hot.jpg')` }}
                         onClick={() => handleCardClick('Hot Drinks', 'Warm and comforting hot drinks for any time.')}
                    >
                        <h4>Hot Drinks</h4>
                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedItem.title}</h2>
                        <p>{selectedItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodBeverage;
