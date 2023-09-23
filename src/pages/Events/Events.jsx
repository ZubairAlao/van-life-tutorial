import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Events() {

  const [events, setEvents] = useState([])

  const fetchData = () => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data.events));
  }

  useEffect(() => {
  fetchData();
  }, []);

  console.log(events);

  const eventElements = events.map(event => (
      <div key={event.id} className="event-tile">
        <Link to={`/events/${event.id}`}>
          <img src={event.imageUrl} />
          <div className="event-info">
              <h3>{event.name}</h3>
              <p>${event.price}<span>/day</span></p>
          </div>
          <i className={`event-type ${event.type} selected`}>{event.type}</i>
        </Link>
      </div>
  ))
  return (
    <div className="event-list-container">
        <h1>Explore our event options</h1>
        < div className="event-list">
            {eventElements}
        </div>
    </div>
  )
}



export default Events;