import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TouristSpotsPage from "./pages/TouristSpotsPage";

function App() {
  return (
      <Router>
        <div>
          <h1>Visit Penang</h1>
          <Routes>
            <Route path="/" element={<h1>Welcome to Visit Penang!</h1>} />
            <Route path="/tourist-spots" element={<TouristSpotsPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;


