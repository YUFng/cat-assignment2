import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const members = [
        {
            name: 'Queek Yu Feng',
            position: 'Team Leader',
            image: '/images/yf-pic.jpg', // Replace with actual image path
        },
        {
            name: 'Shivabala A/L Ganeish',
            position: 'GUI Developer',
            image: '/images/shiva-pic.jpg', // Replace with actual image path
        },
        {
            name: 'Pavithran A/L Muthiah',
            position: 'Content Creator Developer',
            image: '/images/pavi-pic.jpg', // Replace with actual image path
        },
    ];

    return (
        <div className="about-us">

            <div className="about-us-content">
                <header>
                    <h1>About Us</h1>
                    <p>
                        Welcome to Visit Penang, your trusted companion for discovering the wonders of Penang!
                        We are a passionate team dedicated to showcasing the charm, history, and modern vibrancy of
                        Penang.
                        Our goal is to provide visitors with all the tools and information needed to create
                        unforgettable
                        memories.
                        Whether you are a foodie, an adventurer, or someone seeking cultural experiences, we’ve got you
                        covered.
                    </p>
                </header>

                <h2>Meat Our Team</h2>
                <div className="members">
                    {members.map((member, index) => (
                        <div className="member-card" key={index}>
                            <img src={member.image} alt={member.name} className="member-image"/>
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                        </div>
                    ))}
                </div>

                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        To inspire and connect travelers with the unique experiences Penang has to offer,
                        while supporting local communities and preserving the island's heritage.

                        Watch our exclusive promotional video below and start planning your next adventure with Visit
                        Penang
                        today!
                    </p>
                </div>

                    <div className="promo-video">
                        <h2>Promotional Video</h2>
                        <video controls className="promo-video-element">
                            <source src="images/promotional-video.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            );
            };

            export default AboutUs;