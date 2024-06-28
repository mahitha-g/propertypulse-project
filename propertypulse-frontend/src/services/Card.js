import React from 'react';
import './Card.css';

const Card = ({ image, text  ,description, logo, buttonText, logoText, buttonprice}) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="Card" className="card-image" />
        <div className="card-content">
        <h3>{text}</h3>
        <p>{description}</p>
        <img src={logo} alt="logo" className="card-logo" />
        <span className="card-logo-text">{logoText}</span>
        <button className="button-card">{buttonText}</button>
        
      </div>
    </div>
    </div>
  );
};

export default Card;