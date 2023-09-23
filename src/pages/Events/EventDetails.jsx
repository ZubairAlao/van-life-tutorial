import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const params = useParams();

  const [event, setEvent] = useState(null)

  const fetchData = () => {
    fetch(`/api/events/${params.id}`)
      .then(res => res.json())
      .then(data => setEvent(data.events));
  }

  console.log(event);
  
  useEffect(() => {
    fetchData();
  },[params.id])


  return (
    <div className="event-detail-container">
            {event ? (
                <div className="event-detail">
                    <img src={event.imageUrl} width={800}/>
                    <i className={`event-type ${event.type} selected`}>
                        {event.type}
                    </i>
                    <h2>{event.name}</h2>
                    <p className="event-price"><span>${event.price}</span>/day</p>
                    <p>{event.description}</p>
                    <button className="link-button">Book this Event</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}



export default EventDetails;