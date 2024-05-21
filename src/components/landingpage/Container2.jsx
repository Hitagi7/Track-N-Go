import { useState } from 'react'
import './Container2.css'
import ButtonStack from '../ButtonStack';
import deliveryMan from "/src/assets/Delivery Man.png";

function Container2() {

  return (
    <div className="Container2">
      <img
        src={deliveryMan}
        alt="Delivery Man"
        id="image"
        className="Resize-image2"
      />
      <div className="Text2">
        <h1>Why use Track N' Go?</h1>
        <p className="paragraph-text">
          With our intuitive platform, you can stay updated on your parcels'
          whereabouts in real-time, ensuring you're always in the loop. Receive
          instant notifications and enjoy seamless navigation as you track your
          shipments effortlessly, saving time and eliminating stress. Bid
          farewell to lost packages and embrace hassle-free parcel management –
          explore our website now and experience the ease of staying in control.
        </p>
        <div className="LoginBox">
          <div className="TitleLogin">
            Sign in now and join the community!
          </div>
          <ButtonStack/>
        </div>
      </div>
    </div>
  );
}

export default Container2