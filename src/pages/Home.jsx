import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <h1>Looking for exciting places to visit?</h1>
      <p>You are in the right place. Explore a world of possibilities and make unforgettable memories with us.</p>
      <Link to="events">Look for Events</Link>
    </div>
  );
}

export default Home;
