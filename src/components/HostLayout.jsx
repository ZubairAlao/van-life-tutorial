import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


function HostLayout() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color:"#161616",
    }
  return (
    <>
        <h1>host layout</h1>
        <nav className='host-nav'>
            <NavLink 
                to="."
                end
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Dashboard
            </NavLink>
            <NavLink 
                to="income"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Income
            </NavLink>
            <NavLink 
                to="events"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Events
            </NavLink>
            <NavLink 
                to="reviews"
                style={({isActive}) => isActive ? activeStyle : null}
            >
                Reviews
            </NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout;