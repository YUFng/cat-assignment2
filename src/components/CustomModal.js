import React from "react";
import "./CustomModal.css";

const CustomModal = ({ show, title, description, onMapClick, onHotelClick, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-modal-btn">×</button>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="modal-buttons">
                    <button onClick={onMapClick} className="button-map">Go to Map</button>
                    <button onClick={onHotelClick} className="button-hotel">Go to Hotel Page</button>
                </div>
            </div>
        </div>
    );
};

export default CustomModal;