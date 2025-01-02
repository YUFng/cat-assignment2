import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Importing the HomePage component
import TouristSpotsPage from "./pages/TouristSpotsPage"; // Importing the TouristSpotsPage component
import HotelsPage from './pages/HotelsPage';
import FoodBeverage from "./pages/FoodBeverage";
import "./App.css"; // Ensure you import your CSS file for styling.

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleScroll = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Router>
            <header className="toolbar">
                <div className="toolbar-content">
                    <a href="/" className="app-logo">
                        <img src="/images/logo.png" alt="Discover Penang Logo" className="logo-image"/>
                    </a>
                    <nav className="toolbar-nav">
                        <a href="/" className="toolbar-button">Home</a>
                        <a href="/tourist-spots" className="toolbar-button">Tourist Spots</a>
                        <a href="/foodbeverage" className="toolbar-button">Food & Beverages</a>
                        <a href="/hotel" className="toolbar-button">Hotels</a>
                    </nav>
                </div>
            </header>
            <div>
                <Routes>
                    {/* Define your routes */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/tourist-spots" element={<TouristSpotsPage/>}/>
                    <Route path="/hotel" element={<HotelsPage/>}/>
                    <Route path="/foodbeverage" element={<FoodBeverage/>}/>
                </Routes>
            </div>

            {/* Back to Top Button */}
            {isVisible && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}

            <section className="footer">
                <div className="footer-container">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <img src="/images/logo.png" alt="Visit Penang Logo" className="website-logo"/>
                        </div>
                        <h2>About Us</h2>
                        <p>
                            "Visit Penang" is your ultimate guide to exploring the beauty,
                            culture, and cuisine of Penang. From tourist attractions to hidden gems,
                            we are here to make your journey unforgettable.
                        </p>
                    </div>

                    {/* Contact Us Section */}
                    <div className="footer-contact">
                        <h2>Contact Us</h2>
                        <div className="contact-buttons">
                            <a
                                href="https://www.facebook.com/share/155fzxVVqE/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-button facebook-button"
                            >
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/penang.visit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-button instagram-button"
                            >
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a
                                href="mailto:info@visitpenang.com"
                                className="contact-button email-button"
                            >
                                <i className="fas fa-envelope"></i> Email Us
                            </a>
                        </div>
                        {/* Collaborator Icons */}
                        <div className="collaborator-icons">
                            <h3>Collaborator</h3>
                            <a
                                href="https://my.trip.com/?locale=en-my"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/trip.com icon.png" alt="Collaborator 1"/>
                            </a>
                            <a
                                href="https://www.collaborator2.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="collaborator2.png" alt="Collaborator 2"/>
                            </a>
                            <a
                                href="https://www.collaborator3.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="collaborator3.png" alt="Collaborator 3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="arr">
                <p>© 2025 Visit Penang Sdn Bhd. All Rights Reserved.</p>
            </footer>
        </Router>
    );
}

export default App;