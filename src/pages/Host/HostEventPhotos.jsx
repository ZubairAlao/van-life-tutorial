import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostEventPhotos() {
  const {currentEvent} = useOutletContext();
  return (
    <div>
      <img src={currentEvent.imageUrl} width="800" />
    </div>
  )
}

export default HostEventPhotos