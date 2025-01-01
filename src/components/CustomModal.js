import React from "react";
import "./CustomModal.css";

const CustomModal = ({ show, title, description, onMapClick, onHotelClick, onClose }) => {
    if (!show) return null; // Render nothing if 'show' is false

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="modal-buttons">
                    <button onClick={onMapClick} className="button-map">Go to Map</button>
                    <button onClick={onHotelClick} className="button-hotel">Go to Hotel Page</button>
                </div>
                <button onClick={onClose} className="close-modal">X</button>
            </div>
        </div>
    );
};

export default CustomModal;