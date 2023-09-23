import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Header() {

  // const activeStyle = {
  //   fontWeight: "bold",
  //   textDecoration: "underline",
  //   color:"#161616",
  // }

  return (
    <header>
        <Link className="site-logo" to="/">
          <FontAwesomeIcon icon={faCalendar} />
          #EventNaija
        </Link>
        <nav>
          <NavLink 
            to="/about"
            className={({isActive}) => isActive ? "active-link" : null} 
            /* classname together with vanilla css */
            // style={({isActive}) => isActive ? activeStyle : null}
          >
            About
          </NavLink>
          <NavLink 
            to="/events"
            className={({isActive}) => isActive ? "active-link" : null}
            // style={({isActive}) => isActive ? activeStyle : null}
          >
            Events
          </NavLink>
          <NavLink 
            to="/host"
            className={({isActive}) => isActive ? "active-link" : null}
            // style={({isActive}) => isActive ? activeStyle : null}
          >
            Host
          </NavLink>
          </nav>
      </header>
  )
}

export default Header;