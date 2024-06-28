import React from "react";
import "./PropertyListings.css";
import PropListing from "./proplisting";

const PropertyListings = () => {
  const propertyData = [
    {
      propPicture: "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg?t=st=1719581703~exp=1719585303~hmac=5daecdf3b75650190564334fdcf701507f0db0dd79b4a69e3f2c3b5621a43837&w=1380",
      title: "Hanuman Properties",
      location: "Khammam, Telangana",
      price: "$7000"
    },
    {
      propPicture: "https://img.freepik.com/free-photo/cozy-living-room-modern-apartment_181624-58445.jpg?t=st=1719581831~exp=1719585431~hmac=84ff12ad203069900b7ac157ab5a79cefc79be8570404d4dd8be8dfa06661a3d&w=1380",
      title: "Lasya Properties",
      location: "Vizag, Andhrapradesh",
      price: "$9000"
    },
    {
        propPicture: "https://img.freepik.com/free-photo/bedroom-with-bed-window-that-says-word-home-it_1340-32486.jpg?t=st=1719581987~exp=1719585587~hmac=b726dbbe6d439fab77193085383cc0f0fe9966cf32dafa836c24d10ac50d3990&w=1380",
        title: "Uday Properties",
        location: "Warangal, Telangana",
        price: "$6000"
      },
      {
        propPicture: "https://img.freepik.com/free-photo/realistic-interior-design-with-furniture_23-2151439788.jpg?t=st=1719582089~exp=1719585689~hmac=955966ebd683e2a0fa55b11a805da414e3b37bf915047377e27d1f0e81800d03&w=1380",
        title: "Sriman Properties",
        location: "Nizamabad, Telangana",
        price: "$5000"
      },
      {
        propPicture: "https://img.freepik.com/free-photo/gray-sofa-living-room-with-free-space_43614-893.jpg?t=st=1719581736~exp=1719585336~hmac=4323ff2687db329364b380983a48c87b23b7ac759306158c36308b68ecfc8282&w=1380",
        title: "Ajay Properties",
        location: "Kakinada, Telangana",
        price: "$8000"
      }
  ];

  return (
    <div className="property-container">
      <h2 className="heading1">Properties List</h2>
      <div className="props">
        {propertyData.map((proplist, index) => (
          <PropListing
            key={index}
            propPicture={proplist.propPicture}
            title={proplist.title}
            location={proplist.location}
            price={proplist.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;

