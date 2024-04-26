import React from 'react'
import ParcelTrackerHeader from '../parceltracker/ParcelTrackerHeader'
import ParcelTracker from '../parceltracker/ParcelTracker'

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