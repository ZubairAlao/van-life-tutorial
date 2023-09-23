import React from 'react';
import weddingHall from "../assets/images/wedding-hall.jpg";
import { Link } from 'react-router-dom';


function About() {
  return (
    <div>
        <div className="about-page-container">
            <img src={weddingHall} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Welcome to Event Naija Your Trusted Booking Partner!</h1>
                <p>At Event Naija, we are passionate about simplifying the booking process for you. 
                    Our mission is to provide a seamless and convenient way for you to book your appointments, reservations, and services with ease.😉</p>
                <p>We are committed to delivering the highest level of customer satisfaction. Our platform is designed to be reliable, secure, and user-centric. Whether you're booking a spa appointment, reserving a table at your favorite restaurant, or scheduling a business meeting, we've got you covered.</p>
            </div>
            <div className="about-page-cta">
                <h2>Book your appointments and reservations at any time.<br />From anywhere.</h2>
                <Link className="link-button" to="/events">Look at available Events</Link>
            </div>
        </div>
    </div>
  )
}


export default About;