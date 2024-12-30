import React, { useState } from 'react';
import HotelsList from '../components/HotelsList';
import './HotelsPage.css';

const hotelsData = [
    {
        name: 'Grand Plaza',
        location: 'City Center',
        rating: 4.5,
        image: '/images/hotel1.jpg',
        description: 'Experience luxury and comfort in the heart of the city. Grand Plaza offers top-notch amenities and exceptional service.',
        priceRange: '$$$',
        reviews: ['Amazing service!', 'Very clean and comfortable.', 'Perfect location for exploring the city.'],
    },
    {
        name: 'Seaside Inn',
        location: 'Beachfront',
        rating: 4.2,
        image: '/images/hotel2.jpg',
        description: 'Wake up to the sound of waves at Seaside Inn. Perfect for beach lovers looking for a relaxing getaway.',
        priceRange: '$$',
        reviews: ['Lovely beachfront views.', 'Cozy rooms.', 'Great value for money.'],
    },
    {
        name: 'Mountain Retreat',
        location: 'Highlands',
        rating: 4.7,
        image: '/images/hotel3.jpg',
        description: 'Nestled in the highlands, Mountain Retreat offers a tranquil escape with breathtaking views.',
        priceRange: '$$$$',
        reviews: ['Breathtaking scenery!', 'The perfect place to unwind.', 'Exceptional service and food.'],
    },
];

// Helper function to convert rating to stars
const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <>
            {'★'.repeat(fullStars)}
            {halfStar === 1 && '☆'}
            {'☆'.repeat(emptyStars)}
        </>
    );
};

function HotelsPage() {
    const [filter, setFilter] = useState('');

    const filteredHotels = hotelsData.filter((hotel) =>
        hotel.name.toLowerCase().includes(filter.toLowerCase()) ||
        hotel.location.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="hotels-page">
            <header className="hotels-header">
                <h1>Discover Your Perfect Stay</h1>
                <p>From vibrant cityscapes to serene retreats, explore our curated selection of hotels designed to fit every traveler's needs.</p>
                <input
                    type="text"
                    placeholder="Search by name or location"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="hotels-search"
                />
            </header>
            <div className="hotels-list">
                {filteredHotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <h2>{hotel.name}</h2>
                        <p>{hotel.location}</p>
                        <div className="hotel-rating">{getStars(hotel.rating)}</div>
                        <p>{hotel.description}</p>
                        <div className="hotel-reviews">
                            <h3>Reviews</h3>
                            <ul>
                                {hotel.reviews.map((review, idx) => (
                                    <li key={idx}>&quot;{review}&quot;</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




export default HotelsPage;
