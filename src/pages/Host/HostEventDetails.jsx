import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

function HostEventDetails() {
  const {id} = useParams();

  const [currentEvent, setCurrentEvent] = useState({});

  const fetchData = () => {
    fetch(`/api/host/events/${id}`)
      .then(res => res.json())
      .then(data => setCurrentEvent(data.events));
  }
  
  useEffect(() => {
    fetchData();
  },[])

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color:"#161616",
  }

  return (
    <div className="event-detail-container">
      <Link
          to=".."
          relative="path"
          className="back-button"
      >&larr; <span>Back to all vans</span>
      </Link>
            {currentEvent ? (
                <div className="event-detail">
                    <img src={currentEvent.imageUrl} />
                    <i className={`event-type ${currentEvent.type} selected`}>
                        {currentEvent.type}
                    </i>
                    <h2>{currentEvent.name}</h2>
                    <p className="event-price"><span>${currentEvent.price}</span>/day</p>
                  </div>
            ) : <h2>Loading...</h2>}
            <nav className='host-events-detail-nav'> 
              <NavLink
                to="."
                end
                style={({isActive}) => isActive ? activeStyle : null}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                style={({isActive}) => isActive ? activeStyle : null}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                style={({isActive}) => isActive ? activeStyle : null}
              >
                Photo
              </NavLink>
            </nav>
            <Outlet context={{ currentEvent }} />
        </div>
  )
}



export default HostEventDetails;