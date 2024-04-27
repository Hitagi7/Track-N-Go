import React from 'react'
import './DashboardTracker.css'
import { Link } from 'react-router-dom';

function DashboardTracker() {
  return (
    <div className="DashboardTracker">
        <p className="tracknum">Enter your parcel number to track your deliveries</p>
        <div className="SearchBar">
            <input
              type="text"
              className="InputTrackNum"
              placeholder="Enter parcel number"
            />
            <button className="Submit">Submit</button>
        </div>
    </div>
  )
}

export default DashboardTracker