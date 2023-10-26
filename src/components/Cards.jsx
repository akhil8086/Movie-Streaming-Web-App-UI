


import React from 'react';
import './Cards.css'; 
import favouriteIcon from "../assets/favouriteIcon.svg"


function Cards({ title, description, imageUrl }) {
  return (
    
    <div className="card">
    <div className="favorite-icon">
        <img src={favouriteIcon} alt="Favorite" />
      </div>
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Cards;
