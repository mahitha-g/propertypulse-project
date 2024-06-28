import React from 'react';
import './Agents.css';

const FeaturedAgents = () => {
  const agents = [
    {
      image: 'https://img.freepik.com/premium-vector/beautiful-young-business-woman-cartoon-style_1057-55960.jpg?w=826',
      location: 'Vijayawada, Andhra Pradesh',
      experience: '10 years',
      specialty: 'Residential Properties',
      about: 'Alia is a seasoned real estate agent with over a decade of experience in the industry. She specializes in residential properties, including single-family homes, townhouses, and condominiums. Known for her attention to detail and exceptional customer service, Alia takes pride in helping families find their dream homes. Her deep knowledge of the local market and commitment to her clients\' needs ensure a smooth and successful buying or selling process.',
      phone: '(555) 123-4567',
      email: 'Alia.agent@realtypro.com',
      website: 'www.aliaagentrealty.com'
    },
    {
      image: 'https://img.freepik.com/free-vector/business-man-cartoon-character_1308-134239.jpg?t=st=1718989677~exp=1718993277~hmac=db34c80363b2f9ff8dea180914dc927d9cba1f9c60f40d61a485d0afcd01592d&w=826',
      location: 'Khammam, Telangana',
      experience: '15 years',
      specialty: 'Commercial Real Estate',
      about: 'Ajay is a highly experienced real estate agent specializing in commercial properties. With 15 years in the business, Ajay has an extensive network and a keen understanding of the complexities involved in commercial real estate transactions. Whether you\'re looking to buy, sell, or lease office spaces, retail locations, or industrial properties, Ajay\'s expertise and strategic approach make him an invaluable asset for any business looking to expand or relocate.',
      phone: '(555) 234-5678',
      email: 'Ajay.agent@realtypro.com',
      website: 'www.ajaygentrealty.com'
    },
    {
      image: 'https://img.freepik.com/premium-vector/chat-network-icon-colored-shapes_969863-51564.jpg?w=826',
      location: 'Mahabubnagar, Telangana',
      experience: '7 years',
      specialty: 'Luxury Real Estate',
      about: 'Mohan is a luxury real estate agent with a passion for high-end properties. With 7 years of experience, he has quickly made a name for himself in the luxury market, known for his discretion, professionalism, and deep understanding of the upscale housing sector. Mohan works closely with his clients to understand their lifestyle needs and preferences, ensuring a personalized and exclusive experience. From waterfront estates to penthouse apartments, Mohan\'s portfolio showcases some of the finest properties available.',
      phone: '(555) 345-6789',
      email: 'Mohan.agent@realtypro.com',
      website: 'www.mohangentrealty.com'
    }
  ];

  return (
    <div className="container">
      <h1 className="heading">Our Featured Agents</h1>
      <div className="cards d-flex flex-column justify-content-center">
        {agents.map((agent, index) => (
          <div key={index} className="card">
            <img src={agent.image} alt="Agent" className="card-image1" />
            <div className="d-flex flex-row justify-content-start">
              <img src="https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png" alt="Location" className="card-image" />
              <p className="para">{agent.location}</p>
            </div>
            <hr className="horizontal-rule" />
            <h1 className="heading1">Experience: {agent.experience}</h1>
            <h1 className="heading1">Specialty: {agent.specialty}</h1>
            <h1 className="heading1">About:</h1>
            <p>{agent.about}</p>
            <h1 className="heading1">Contact:</h1>
            <h1 className="heading1">Phone: {agent.phone}</h1>
            <h1 className="heading1">Email: {agent.email}</h1>
            <h1 className="heading1">Website: {agent.website}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;
