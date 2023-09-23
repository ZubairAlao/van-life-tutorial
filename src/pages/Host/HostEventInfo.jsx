import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostEventInfo() {
  const {currentEvent} = useOutletContext();
  
  return (
    <div>
      <h4>Name: {currentEvent.name}</h4>
      <h4>Category: {currentEvent.type}</h4>
      <h4>Description: {currentEvent.description}</h4>
      <h4>Visibility: Public</h4>
    </div>
  )
}

export default HostEventInfo;