import React from 'react';
import AgentCard from './AgentCard';
import './AgentsContainer.css';

const AgentsContainer = () => {
  const agentsData = [
    {
      profilePicture: "https://img.freepik.com/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064844.jpg?t=st=1718940012~exp=1718943612~hmac=65e3206efda32ad59967b6ba3f372920089146b35e8bcb812c27296fb0dabd34&w=1480",
      name: 'Sagar',
      contactInfo: 'Phone: +1234567890, Email: Sagar.anneboina@example.com',
       buttonText: "Call Now"
    },
    {
      profilePicture: "https://img.freepik.com/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg?t=st=1718940276~exp=1718943876~hmac=758d349cc82cd59229caab11044cf32e5328a9a3ce5e31e7e83e20fb653128ef&w=1380",
      name: 'Chaitanya',
      contactInfo: 'Phone: +1987654321, Email: chaitanya.prathi@example.com',
       buttonText: "Call Now"
    },
    {
        profilePicture: "https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?t=st=1718941147~exp=1718944747~hmac=39c3028b86cc88f3f4019c282fa7cc30de75902067f110084ea17ceb16e5c229&w=1380",
        name: "Malathi",
        contactInfo: 'Phone: +1987654321, Email: malathi.raayana@example.com',
         buttonText: "Call Now"
      }
  ];

  return (
    <div className="agents-container">
      <h2 className="heading1">Our Agents</h2>
      <div className="agents">
        {agentsData.map((agent, index) => (
          <AgentCard
            key={index}
            profilePicture={agent.profilePicture}
            name={agent.name}
            contactInfo={agent.contactInfo}
            buttonText= {agent.buttonText}
            
          />
        ))}
      </div>
    </div>
  );
};

export default AgentsContainer;