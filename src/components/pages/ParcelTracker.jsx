import React from 'react'
import Header from '../landingpage/Header'
import ParcelTrackerContainer from '../parceltracker/ParcelTrackerContainer'

function ParcelTracker() {
  return (
    <div className="ParcelTracker">
        <Header/>
        <hr/>
        <ParcelTrackerContainer/>
    </div>
  )
}

export default ParcelTracker