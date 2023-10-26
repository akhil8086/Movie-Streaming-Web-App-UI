


import React from 'react';
import './Cards.css'; 



function Cards({ title, description, imageUrl }) {
  return (
    
    <div>
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

export default Cards;
