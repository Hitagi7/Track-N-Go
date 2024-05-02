import React from 'react'
import ParcelTracker from '../parceltracker/ParcelTracker'
import ParcelTrackerHeader from '../parceltracker/ParcelTrackerHeader'

function ParcelTrackerPage() {
  return (
    <div className="ParcelTrackerPage">
        <ParcelTrackerHeader />         
        <hr />
        <ParcelTracker />
    </div>
  )
}

export default ParcelTrackerPage