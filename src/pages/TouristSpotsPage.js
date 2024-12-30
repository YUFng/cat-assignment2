import React from "react";
import TouristSpotCard from "../components/TouristSpotCard"; // Import your card component
import "./TouristSpotsPage.css"; // Import the CSS file

const TouristSpotsPage = () => {
    // Mock data for tourist spots (replace this with real data from an API later)
    const touristSpots = [
        {
            id: 1,
            name: "Penang Hill",
            description: "A scenic hilltop offering stunning views of Penang.",
            image: "/images/penang-hill.jpg", // Replace with a real image URL
            location: "George Town, Penang",
            rating: 4.7,
        },
        {
            id: 2,
            name: "Kek Lok Si Temple",
            description: "A stunning Buddhist temple complex with beautiful architecture.",
            image: "/images/tour.webp",
            location: "Air Itam, Penang",
            rating: 4.8,
        },
        {
            id: 3,
            name: "Penang Street Art",
            description: "Famous murals and artwork scattered across George Town.",
            image: "/images/bi hua.jpg",
            location: "George Town, Penang",
            rating: 4.6,
        },
        {
            id: 4,
            name: "Penang Komtar",
            description: "Famous murals and artwork scattered across George Town.",
            image: "/images/bi hua.jpg",
            location: "George Town, Penang",
            rating: 4.6,
        },
    ];

    return (
        <div className="tourist-spots-page">
            <h1>Tourist Spots in Penang</h1>
            <div className="tourist-spots-grid">
                {touristSpots.map((spot) => (
                    <TouristSpotCard key={spot.id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default TouristSpotsPage;
