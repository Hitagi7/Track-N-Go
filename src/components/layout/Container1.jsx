import { useState } from 'react'
import './Container1.css'

function Container1() {

  return (
    <div className='Container1'>
        <img src="/src/assets/Map Pin.png" alt="Map With Pin" id='image'className="Resize-image1"/>
        <div className="Text1">
            <div className="Header1">
              Effortlessly track your parcels
            </div>
            <div className="Description1">
              Stay connected with your shipments every step of the way with Track N’ Go. Track your packages in real-time, receive timely updates on delivery status, and enjoy peace of mind knowing exactly where your parcels are.
            </div>
            <div className="Input">
              <div className="InputTitle">
                Track your parcel below!
              </div>
              <div className="InputSquare">
                <input type="text" className='InputBox'/>
                <button className="Search">
                  Search
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Container1