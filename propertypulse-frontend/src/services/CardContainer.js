import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = () => {
  const cardsData = [
    {
      image: "https://img.freepik.com/free-photo/modern-hotel-room-with-illuminated-pictures_1203-1485.jpg?t=st=1718880822~exp=1718884422~hmac=b94931ad532f56d7c750d805441a2c7ed450c0d99ea67a442842f3bca63d53b1&w=1380",
      text: "Uday Properties",
      description: "A luxurious hotel room with modern amenities.",
      logo: "https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png",
      logoText: "Hanumantemple opp,Chennai,India",
      buttonText: "View Details"
      
      
    },
    {
      image: "https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-437.jpg?t=st=1718880985~exp=1718884585~hmac=dbc7d1e44b7793112f2b7ba16dd8c5cfbac2c44c3c63b6e6b602b5c0a985d6bd&w=1380",
      text: "Lasya Properties",
      description: "A realistic modern double bedroom with furniture.",
      logo: "https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png",
      logoText: "Shivaramstreet opp,Chennai,India",
      buttonText: "View Details"
    },
    {
      image: "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?t=st=1718881078~exp=1718884678~hmac=663fabc7b234fe256d701108c360bc0ffe499d672b052bc72a84f2c835666429&w=1380",
      text: "Fairmount Properties",
      description: "Indoor design of a luxury resort.",
      logo: "https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png",
      logoText: "beside Lebanaka building  ,Kolkata,  India.........",
      buttonText: "View Details"
    },
    {
      image: "https://img.freepik.com/premium-photo/bedrooisulam-interior-design-3d-visualization_757026-18.jpg?w=1480",
      text: "Red Carpet Real Estate",
      description: "Isulam interior design 3D visualization.",
      logo: "https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png",
      logoText: "opp kotak bank,Bangalore,India",
      buttonText: "View Details"
    },
    {
      image: "https://img.freepik.com/free-photo/modern-beadroom-hotel_1150-17926.jpg?t=st=1718881319~exp=1718884919~hmac=2f49ac16b075972b7ad7c011552a1e99bfd19f67285d8129f83999079582bafd&w=1380",
      text: "Sriman Properties",
      description: "Modern bedroom in a hotel.",
      logo: "https://assets.ccbp.in/frontend/static-website/flats-list-location-icon-img.png",
      logoText: "D/N 5-2,Food Street,Indore",
      buttonText: "View Details"
    },
  ];

  return (
    <div className="card-container">
      <div className="heading">
        <h2 className="heading">Latest Listings</h2>
        <p className="lead">Find your Property</p>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            text={card.text}
            description={card.description}
            logo={card.logo}
            logoText={card.logoText}
            buttonText={card.buttonText}
            
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;