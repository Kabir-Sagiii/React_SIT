import React from "react";
import "./Favourites.css";

function Favourites() {
  return (
    <div className="favourites-page">
      <div className="favourites-card">
        <h2>Your Favourites</h2>
        <p>Saved items for easy access later.</p>
        <div className="favourite-list">
          <div className="favourite-item">
            <span>Trail running shoes</span>
            <span className="tag">Popular</span>
          </div>
          <div className="favourite-item">
            <span>Camping backpack</span>
            <span className="tag">Saved</span>
          </div>
          <div className="favourite-item">
            <span>Waterproof jacket</span>
            <span className="tag">New</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
