import React, { useState } from 'react';
import './HotelsPage.css';

const hotelsData = [
    {
        name: 'Eastern & Oriental Hotel',
        location: 'City Center',
        rating: 4.5,
        image: '/images/hotel1.jpg',
        description: 'Experience luxury and comfort in the heart of the city. Grand Plaza offers top-notch amenities and exceptional service.',
        priceRange: '$$$',
        reviews: ['Amazing service!', 'Very clean and comfortable.', 'Perfect location for exploring the city.'],
        bookingLink: 'https://www.example.com/grand-plaza'
    },
    {
        name: 'Hotel Mercure Beachfront',
        location: 'Beachfront',
        rating: 4.2,
        image: '/images/hotel2.jpg',
        description: 'Wake up to the sound of waves at Seaside Inn. Perfect for beach lovers looking for a relaxing getaway.',
        priceRange: '$$',
        reviews: ['Lovely beachfront views.', 'Cozy rooms.', 'Great value for money.'],
        bookingLink: 'https://www.example.com/seaside-inn'
    },
    {
        name: 'Hickory Penang Hill',
        location: 'Highlands',
        rating: 4.7,
        image: '/images/hotel3.jpg',
        description: 'Nestled in the highlands, Mountain Retreat offers a tranquil escape with breathtaking views.',
        priceRange: '$$$$',
        reviews: ['Breathtaking scenery!', 'The perfect place to unwind.', 'Exceptional service and food.'],
        bookingLink: 'https://www.example.com/mountain-retreat'
    },
];

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
    const [selectedHotel, setSelectedHotel] = useState(null);

    const filteredHotels = hotelsData.filter((hotel) =>
        hotel.name.toLowerCase().includes(filter.toLowerCase()) ||
        hotel.location.toLowerCase().includes(filter.toLowerCase())
    );

    const truncateDescription = (description, length = 100) => {
        return description.length > length
            ? `${description.substring(0, length)}...`
            : description;
    };

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
                    <div
                        key={index}
                        className="hotel-card"
                        onClick={() => setSelectedHotel(hotel)}
                    >
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <h2>{hotel.name}</h2>
                        <p>{hotel.location}</p>
                        <div className="hotel-rating">{getStars(hotel.rating)}</div>
                        <p>{truncateDescription(hotel.description)}</p>
                    </div>
                ))}
            </div>
            {selectedHotel && (
                <div className="hotel-modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={() => setSelectedHotel(null)}>×</button>
                        <img src={selectedHotel.image} alt={selectedHotel.name} className="modal-image" />
                        <h2>{selectedHotel.name}</h2>
                        <p>{selectedHotel.location}</p>
                        <div className="hotel-rating">{getStars(selectedHotel.rating)}</div>
                        <p>{selectedHotel.description}</p>
                        <h3>Reviews</h3>
                        <ul>
                            {selectedHotel.reviews.map((review, idx) => (
                                <li key={idx}>&quot;{review}&quot;</li>
                            ))}
                        </ul>
                        <button
                            className="booking-button"
                            onClick={() => window.open(selectedHotel.bookingLink, '_blank')}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HotelsPage;
