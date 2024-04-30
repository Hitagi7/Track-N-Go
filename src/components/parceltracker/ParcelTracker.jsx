import React from 'react'
import './ParcelTracker.css'
import TrackedParcel from './TrackedParcel'
import ParcelTrackerBody from './ParcelTrackerBody'
import ParcelTrackerHeader from './ParcelTrackerHeader'

function ParcelTracker() {
  return (
    <div className="ParcelTracker">
        <ParcelTrackerHeader />         
        <hr />
        <TrackedParcel />
        <ParcelTrackerBody />
    </div>
  )
}

export default ParcelTracker