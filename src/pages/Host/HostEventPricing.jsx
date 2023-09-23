import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostEventPricing() {
  const {currentEvent} = useOutletContext();
  return (
    <div>
      <h4>Price: {currentEvent.price}</h4>
    </div>
  )
}

export default HostEventPricing