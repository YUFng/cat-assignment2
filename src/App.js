import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Importing the HomePage component
import TouristSpotsPage from "./pages/TouristSpotsPage"; // Importing the TouristSpotsPage component
import HotelsPage from './pages/HotelsPage';
import "./App.css"; // Ensure you import your CSS file for styling.

function App() {
    return (
        <Router>
            <header className="toolbar">
                <div className="toolbar-content">
                    <h1 className="app-title">Visit Penang</h1>
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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tourist-spots" element={<TouristSpotsPage />} />
                    <Route path="/hotel" element={<HotelsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;