import React from "react";
import "./PropertyListings.css";
import PropListing from "./proplisting";

const PropertyListings = () => {
  const propertyData = [
    {
      propPicture: "https://img.freepik.com/premium-vector/villa-holiday-travel-logo-icon-illustration-brand-identity_7109-786.jpg?w=826",
      title: "Family House",
      location: "Khammam,Telangana",
      price: "$1,200,000"
    },
    {
      propPicture: "https://i.pinimg.com/564x/d6/5c/dd/d65cdd9acc7fd1f9e92655c0861e7e6b.jpg",
      title: "House & Villa",
      location: "Vizag,Andhrapradesh",
      price: "$1,200,000"
    },
    {
        propPicture: "https://img.freepik.com/premium-photo/vector-building-invest-logo-design-with-modern-concept_951220-18293.jpg?w=1380",
        title: "Apartment",
        location: "Warangal,Telangana",
        price: "$900,000"
      },
      {
        propPicture: "https://img.freepik.com/free-psd/flat-design-office-building-isolated_23-2151579870.jpg?t=st=1718849333~exp=1718852933~hmac=aa058539042dce96139947276bcf16eb68ec19991d44525029ec56fbfc78ae27&w=826",
        title: "Office & Studio",
        location: "Nizamabad,Telangana",
        price: "$1,500,000"
      },
      {
        propPicture: "https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?t=st=1718863880~exp=1718867480~hmac=62e8d32b9658ea454fda35976fd9d4918637ddd4d2cb3a3cb30b975cf538b9cc&w=1380",
  
        title: "Villa&Condo",
        location: "Kakinada,Telangana",
        price: "$500,000"
      }
  ];

  return (
    <div className="property-container">
      <h2 className="heading1">Types of Properties</h2>
      <div className="props">
        {propertyData.map((proplist, index) => (
          <PropListing
            key={index}
            propPicture={proplist.propPicture}
            title={proplist.title}
            location={proplist.location}
             price= {proplist.price}
            
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
