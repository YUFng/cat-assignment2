import React from "react";
import "./TouristSpotsPage.css";
import TouristSpotsCard  from "../components/TouristSpotsCard"// Import the CSS file

const TouristSpotsPage = () => {
    const places = [
        {
            name: "Penang Hill",
            description: "A scenic hilltop offering stunning views of Penang.",
            image: "/images/penang-hill.jpg", // Replace with a real image URL
            location: "George Town, Penang",
            mapLink: 'https://www.google.com/maps/place/Penang+Hill',
            rating: 4.7,
        },
        {
            name: "Kek Lok Si Temple",
            description: "A stunning Buddhist temple complex with beautiful architecture.",
            image: "/images/kek-lok-si-temple.jpg",
            location: "Air Itam, Penang",
            mapLink: 'https://maps.app.goo.gl/vyKoEjv8hSdCtyss7',
            rating: 4.4,
        },
        {
            name: "Batu Ferringhi Beach",
            description: "A popular beach destination featuring water sports, a night market, and breathtaking sunsets.",
            image: "/images/batu-ferringhi.jpg",
            location: "Batu Ferringhi, Penang",
            mapLink: 'https://maps.app.goo.gl/iBgHgwViXu8LHKjj6',
            rating: 4.3,
        },
        {
            name: "Penang Komtar",
            description: "An iconic skyscraper and the tallest building in Penang, featuring the famous Tech Dome and The Top amusement center.",
            image: "/images/komtar.jpg",
            location: "George Town, Penang",
            mapLink: 'https://maps.app.goo.gl/thPpGntiBSUrweNL6',
            rating: 4.1,
        },
        {
            name: "Penang Street Art",
            description: "World-renowned murals and artworks scattered across the streets of George Town, showcasing the city's heritage and creativity.",
            image: "/images/street-art.jpg",
            location: "George Town, Penang",
            mapLink: 'https://maps.app.goo.gl/4g3aNB58J7cxxYN66',
            rating: 4.4,
        },
        {
            name: "Escape Theme Park",
            description: "An adventure and eco theme park offering ziplining, rope courses, and water slides for visitors of all ages.",
            image: "/images/escape-penang.jpg",
            location: "Teluk Bahang, Penang",
            mapLink: 'https://maps.app.goo.gl/6oym122yZHAbukFA6',
            rating: 4.6,
        },
    ];

    return (
        <div
            className="tourist-spots-page"
            style={{
                backgroundImage: `url(${"./images/penang-bridge.jpg"})`,
                backgroundSize: "cover",
                backgroundColor: "#f9f9f9",
                backgroundPosition: "center",
                minHeight: "100vh",
                color: "#fff",
            }}
        >
            <h1>Tourist Spots in Penang</h1>
            <div className="tourist-spots-container">
                {places.map((place, index) => (
                    <TouristSpotsCard
                        key={index}
                        name={place.name}
                        description={place.description}
                        image={place.image}
                        mapLink={place.mapLink}
                        rating={place.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default TouristSpotsPage;
