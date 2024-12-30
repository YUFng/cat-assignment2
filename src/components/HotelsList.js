import React from 'react';
import HotelsCard from './HotelsCard';

function HotelsList({ hotels }) {
    return (
        <div className="hotels-list">
            {hotels.map((hotel, index) => (
                <HotelsCard
                    key={index}
                    name={hotel.name}
                    location={hotel.location}
                    rating={hotel.rating}
                    image={hotel.image}
                />
            ))}
        </div>
    );
}

export default HotelsList;
