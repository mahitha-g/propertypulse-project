import React from 'react';
import './proplisting.css';

const PropCard = ({ propPicture, title, location,price }) => {
  return (
    <div className="prop-card">
      <img src={propPicture} alt="Propslist" className="prop-picture" />
      <div className="prop-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <button className="prop-button"> {price}</button>
        
      </div>
    </div>
  );
};

export default PropCard;