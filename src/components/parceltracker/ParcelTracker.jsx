import React from 'react'
import './ParcelTracker.css'
import TrackedParcel from './TrackedParcel'
import ParcelTrackerBody from './ParcelTrackerBody'

function ParcelTracker() {
  return (
    <div className="ParcelTracker">
        <TrackedParcel />
        <ParcelTrackerBody />
    </div>
  )
}

export default ParcelTracker