import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HostEvents() {

  const [events, setEvents] = useState([])

  const fetchData = () => {
    fetch("/api/host/events")
      .then(res => res.json())
      .then(data => setEvents(data.events));
  }

  useEffect(() => {
  fetchData();
  }, []);

  console.log(events);

    const hostEventElements = events.map(event => (
        <Link 
            to={`/host/events/${event.id}`} 
            key={event.id} 
            className='host-event-link-wrapper'
        > 
            <div className='host-event-single' key={event.id} >
                <img src={event.imageUrl} alt={`photo of ${event.name}`}/>
                <div className="host-event-info">
                    <h3>{event.name}</h3>
                    <p>${event.price}<span>/day</span></p>
                </div>
            </div>
        </Link>
    ))
  return (
    <section>
        <h1 className='host-events-title'>Your Listed events</h1>
        <div className="host-events-list">
            {
                events.length > 0 ? (
                    < section>
                        {hostEventElements}
                    </section>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    </section>
  )
}



export default HostEvents;