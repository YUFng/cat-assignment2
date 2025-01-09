import React from "react";
import "./HomePage.css"; // Use a separate CSS file for HomePage (optional)

function HomePage() {
    return (
        <div className="home">
            <section
                className="hero-section"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/penang-bridge.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "80vh",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.9,
                    color: "rgba(300, 300, 300, 0.8)",
                }}
            >
                <h2>Welcome to Visit Penang</h2>
                <p>
                    Discover the wonders of Penang – its vibrant culture, historical landmarks, and beautiful beaches.
                </p>
            </section>

            <section className="gallery-section">
                <h2>Scenery</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img
                            src="/images/komtar.jpg"
                            alt="Description 1"
                            className="gallery-image"
                        />
                        <p className="image-description">This is Komtar.</p>
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

export default HomePage;