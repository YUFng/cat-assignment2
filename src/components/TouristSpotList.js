import React, { useState, useEffect } from "react";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpotList = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        fetch("/api/tourist-spots")
            .then((response) => response.json())
            .then((data) => setSpots(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="tourist-spot-list">
            {spots.map((spot) => (
                <TouristSpotCard key={spot.id} spot={spot} />
            ))}
        </div>
    );
};

export default TouristSpotList;
