import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TouristSpotsPage from "./pages/TouristSpotsPage";
import "./App.css"; // Ensure you import your CSS file for styling.

function HomePage() {
    return (
        <div className="home">
            <section className="hero-section">
                <h2>Welcome to Visit Penang</h2>
                <p>
                    Discover the wonders of Penang – its vibrant culture, historical landmarks, and beautiful beaches.
                </p>
                <img src="/images/penang%20bridge.jpg" alt="Penang Scenery" className="hero-image"/>
            </section>

            <section className="gallery-section">
            <h2>Gallery</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img
                            src="/images/komtar.jpg"
                            alt="Description 1"
                            className="gallery-image"
                        />
                        <p className="image-description">This is Penang Hill.</p>
                    </div>

                    <div className="gallery-item">
                        <img
                            src="/images/tour.webp"
                            alt="Description 2"
                            className="gallery-image"
                        />
                        <p className="image-description">A street in Georgetown.</p>
                    </div>

                    <div className="gallery-item">
                        <img
                            src="/images/bi hua.jpg"
                            alt="Description 3"
                            className="gallery-image"
                        />
                        <p className="image-description">The famous Penang Street Art.</p>
                    </div>

                    <div className="gallery-item">
                        <img
                            src="/images/beach.webp"
                            alt="Description 4"
                            className="gallery-image"
                        />
                        <p className="image-description">Penang Batu Ferringhi Beach.</p>
                    </div>
                </div>
            </section>

            <section className="info-section">
                <h2>Why Visit Penang?</h2>
                <p>
                    Penang is a melting pot of diverse cultures, offering unique culinary experiences,
                    stunning architecture, and captivating natural scenery.
                </p>
                <img
                    src="/images/penang-hill.jpg"
                    alt="Why Visit Penang"
                    className="info-image"
                />
            </section>
        </div>
    );
}

function App() {
    return (
        <Router>
            <header className="toolbar">
                <div className="toolbar-content">
                    <h1 className="app-title">Visit Penang</h1>
                    <nav className="toolbar-nav">
                        <a href="/" className="toolbar-button">Home</a>
                        <a href="/tourist-spots" className="toolbar-button">Tourist Spots</a>
                    </nav>
                </div>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tourist-spots" element={<TouristSpotsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
