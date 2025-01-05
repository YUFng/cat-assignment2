import React, { useState } from 'react';
import './HotelsPage.css';

const hotelsData = [
    {
        name: 'Eastern & Oriental Hotel',
        location: 'City Center',
        rating: 4.5,
        image: '/images/hotel1.jpg',
        description: 'Experience luxury and comfort in the heart of the city. Eastern & Oriental Hotel offers top-notch amenities and exceptional service.',
        priceRange: '$$$',
        reviews: ['Amazing service!', 'Very clean and comfortable.', 'Perfect location for exploring the city.'],
        bookingLink: 'https://www.eohotels.com'
    },
    {
        name: 'Hotel Mercure Penang Beach',
        location: 'Beachfront',
        rating: 4.2,
        image: '/images/hotel2.jpg',
        description: 'Wake up to the sound of waves at Hotel Mercure. Perfect for beach lovers looking for a relaxing getaway.',
        priceRange: '$$',
        reviews: ['Lovely beachfront views.', 'Cozy rooms.', 'Great value for money.'],
        bookingLink: 'https://mercurebeach.my-penang.com'
    },
    {
        name: 'Hickory Penang Hill',
        location: 'Highlands',
        rating: 4.7,
        image: '/images/hotel3.jpg',
        description: 'Nestled in the highlands, Hickory offers a tranquil escape with breathtaking views.',
        priceRange: '$$$$',
        reviews: ['Breathtaking scenery!', 'The perfect place to unwind.', 'Exceptional service and food.'],
        bookingLink: 'https://www.hickorypenanghill.com.my'
    },
    {
        name: 'Lexis Suites Penang',
        location: 'Beachfront',
        rating: 4.8,
        image: '/images/hotel4.jpg',
        description: 'Unwind at Lexis Suites, offering serene surroundings and charming accommodations.',
        priceRange: '$$$',
        reviews: ['Peaceful and quiet.', 'Lovely views!', 'Highly recommended for families.'],
        bookingLink: 'https://www.lexissuitespenang.com/rooms-suites'
    },
    {
        name: 'Hotel Neo+ Penang',
        location: 'City Center',
        rating: 4.6,
        image: '/images/hotel5.jpg',
        description: 'A modern retreat in the heart of the bustling city. Hotel Neo+ combines style and comfort.',
        priceRange: '$$$',
        reviews: ['Amazing design!', 'Very convenient location.', 'Great for business trips.'],
        bookingLink: 'https://www.neohotels.com/en/hotel/view/15/hotel-neo--penang---malaysia'
    },
    {
        name: 'Hard Rock Hotel Penang',
        location: 'Beachfront',
        rating: 4.3,
        image: '/images/hotel6.jpg',
        description: 'Enjoy the breathtaking coastal views and sandy beaches at Hard Rock Hotel.',
        priceRange: '$$',
        reviews: ['Beautiful sunsets!', 'Rooms could be bigger.', 'Great food and drinks.'],
        bookingLink: 'https://hotel.hardrock.com/penang/'
    },
    {
        name: 'Eastin Hotel',
        location: 'Downtown',
        rating: 4.9,
        image: '/images/hotel7.jpg',
        description: 'Step back in time with a stay at Eastin Hotel, offering classic elegance and modern amenities.',
        priceRange: '$$$$',
        reviews: ['Absolutely stunning!', 'Feels like living in history.', 'Wonderful staff.'],
        bookingLink: 'https://penang.eastin.com/'
    },
    {
        name: 'Nature Fruit Farm Hotel',
        location: 'Forest Reserve',
        rating: 4.4,
        image: '/images/hotel8.jpg',
        description: 'Reconnect with nature at Nature Fruit Farm Hotel, surrounded by lush greenery and tranquil views.',
        priceRange: '$$$',
        reviews: ['Very relaxing stay.', 'Lots of outdoor activities.', 'Perfect for nature lovers.'],
        bookingLink: 'https://www.naturefruitfarm.com'
    },
    {
        name: 'Flamingo Hotel by the Beach',
        location: 'Beachfront',
        rating: 4.7,
        image: '/images/hotel9.jpg',
        description: 'Stay in style at Flamingo Hotel by the Beach, featuring panoramic views and top-tier amenities.',
        priceRange: '$$$$',
        reviews: ['Amazing views!', 'Luxury at its best.', 'Perfect for a romantic getaway.'],
        bookingLink: 'https://penang.flamingo.com.my'
    },
    {
        name: 'Bayview Hotel Georgetown',
        location: 'City Center',
        rating: 4.5,
        image: '/images/hotel10.jpg',
        description: 'Discover the beauty of the desert at Bayview Hotel Georgetown, offering luxury and adventure.',
        priceRange: '$$$',
        reviews: ['Unique experience!', 'Great service.', 'The desert safari was a highlight.'],
        bookingLink: 'https://bhgp.bayviewhotels.com/?gad_source=1&gclid=CjwKCAiA-Oi7BhA1EiwA2rIu21CiJaiV0d4smxxn-dZdTRvpph7Cxw4MX-IaKlcGlZNx6jtcXGnrvhoCD9IQAvD_BwE'
    },
];


const getStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Check for half star
    const emptyStars = 5 - fullStars - halfStar; // Remaining stars

    return (
        <>
            {'★'.repeat(fullStars)}
            {halfStar === 1 && '☆'}
            {'☆'.repeat(emptyStars)}
            <span style={{ marginLeft: '0.5rem', fontSize: '1.0rem', color: '#555' }}>
                ({rating}/5)
            </span>
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
                        <div className="button-group">
                            <button
                                className="booking-button"
                                onClick={() => window.open(selectedHotel.bookingLink, '_blank')}
                            >
                                Book Now
                            </button>
                            <button
                                className="attractions-button"
                                onClick={() => window.open('/tourist-spots', '_blank')}
                            >
                                Attractions
                            </button>
                            <button
                                className="eats-button"
                                onClick={() => window.open('/foodbeverage', '_blank')}
                            >
                                Nearby Eats
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default HotelsPage;
