import React from "react";
import "./TouristSpotsPage.css";
import TouristSpotsCard  from "../components/TouristSpotsCard"

const TouristSpotsPage = () => {
    const places = [
        {
            name: "Penang Hill",
            description: "A scenic hilltop offering stunning views of Penang.",
            image: "/images/penang-hill.jpg",
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
        <div className="tourist-spots-page">
            <header className="tourist-spots-header">
                <h1>Tourist Spots of Penang</h1>
                <p>
                    Discover the best attractions in Penang, from cultural landmarks to
                    breathtaking hills and temples. Plan your visit with our curated list of top spots.
                </p>
            </header>
            <div className="tourist-spots-list">
                {places.map((place, index) => (
                    <TouristSpotsCard
                        key={index}
                        name={place.name}
                        description={place.description}
                        image={place.image}
                        mapLink={place.mapLink}
                        rating={place.rating}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TouristSpotsPage;
