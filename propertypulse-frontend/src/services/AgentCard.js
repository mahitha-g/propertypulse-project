import React from 'react';
import './AgentCard.css';

const AgentCard = ({ profilePicture, name, contactInfo,buttonText }) => {
  return (
    <div className="agent-card">
      <img src={profilePicture} alt="Agent" className="agent-picture" />
      <div className="agent-info">
        <h3>{name}</h3>
        <p>{contactInfo}</p>
        <button className="card-button"> {buttonText}</button>
        
      </div>
    </div>
  );
};

export default AgentCard;