import React from 'react'
import Header from '../parceltracker/Header'
import ParcelTracker from '../parceltracker/ParcelTracker'

function ParcelTrackerPage() {
  return (
    <div className="ParcelTrackerPage">
        <Header />
        <hr />
        <ParcelTracker />
    </div>
  )
}

export default ParcelTrackerPage