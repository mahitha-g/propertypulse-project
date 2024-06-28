import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div>
      <div className="property-topsection">
        <h1 className="para">About Us - Who We Are?</h1>
      </div>
      <div className="property-bottomsection d-flex flex-row justify-content-center">
        <div className="about-us">
          <h1 className="heading1">Welcome to Propertypulse, where your property journey begins!</h1>
          <h1 className="heading2">Our Mission</h1>
          <p className="para1">
            At Propertypulse, our mission is to simplify and enhance the real estate experience for everyone. Whether you are buying, selling, renting, or investing, we strive to provide you with the best tools and resources to make informed decisions and achieve your property goals.
          </p>
          <h1 className="heading3">Who We Are</h1>
          <p className="para2">
            Founded in 2017, Propertypulse has grown to become a trusted name in the real estate industry. Our team comprises passionate real estate experts, innovative technologists, and dedicated customer service professionals, all working together to deliver a seamless and efficient experience for our users.
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/father-entertaining-three-kids-home-happy-children-playing-games-having-fun-with-their-dad-flat-vector-illustration-single-parents-family-fatherhood-concept_74855-10056.jpg?t=st=1718964371~exp=1718967971~hmac=22c98e201f9488b8ed047d6b44e8892a796aaf113500f3ab3e9a6695d59fb80f&w=1380"
            className="image"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
