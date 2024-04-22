import { useState } from 'react'
import './Container2.css'

function Container2() {

  return (
    <div className="Container2">
      <img
        src="/src/assets/Delivery Man.png"
        alt="Delivery Man"
        id="image"
        className="Resize-image2"
      />
      <div className="Text2">
        <div className="Header2">Why use Track N' Go?</div>
        <div className="Description2">
          With our intuitive platform, you can stay updated on your parcels'
          whereabouts in real-time, ensuring you're always in the loop. Receive
          instant notifications and enjoy seamless navigation as you track your
          shipments effortlessly, saving time and eliminating stress. Bid
          farewell to lost packages and embrace hassle-free parcel management –
          explore our website now and experience the ease of staying in control.
        </div>
      </div>
    </div>
  );
}

export default Container2