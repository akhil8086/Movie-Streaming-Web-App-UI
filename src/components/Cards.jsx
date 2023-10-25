


import React from 'react';
import './Cards.css'; // Create a CSS file for styling

function Cards({ title, description, imageUrl }) {
  return (
    
    <div>
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})`, marginTop:"0" }}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

export default Cards;
