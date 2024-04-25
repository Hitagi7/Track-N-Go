import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Container1.css'

function Container1() {
  
  return (
    <div className="Container1">
      <div className="Text1">
        <h1>Effortlessly track your parcels</h1>
        <p>
          Stay connected with your shipments every step of the way with Track N'
          Go. Track your packages in real-time, receive timely updates on
          delivery status, and enjoy peace of mind knowing exactly where your
          parcels are.
        </p>
        <div className="Input">
          <div className="InputTitle">Track your parcel below!</div>
          <div className="Wrapper">
            <img
              src="/src/assets/icons/icon-search.svg"
              alt="icon-search"
              className="icon"
            />
            <input
              type="text"
              className="InputBox"
              placeholder="Enter tracking number"
            />
          </div>
          <button className="Search"><Link to="/ParcelTrackerPage">Search</Link></button>
        </div>
      </div>
      <img
          src="/src/assets/Map With Pin.png"
          alt="Map With Pin"
          className="Resize-image1"
        />
    </div>
  );
}

export default Container1