import React from 'react'
import './ParcelTransit.css'

function ParcelTransit() {
  return (
    <div className='ParcelTransit'>
        <div className="information">
            <div className="status">
                <img src="/src/assets/icons/box-in-transit.svg" alt="box-delivered"/>
            </div>
            <div className="refnumber">
                #SPEPH043036716934
            </div>
        </div>
        <hr />
        <div className="details">
            <div className="weight">
                <p className="font-14 font-semibold">2.1 kg</p>
                <p className="font-10">Weight</p>
            </div>
            <div className="size">
                <p className="font-14 font-semibold">14 x 14 cm</p>
                <p className="font-10">Size</p>
            </div>
            <div className="price">
                <p className="font-14 font-semibold">₱178.00</p>
                <p className="font-10">Price</p>
            </div>
        </div>
    </div>
  )
}

export default ParcelTransit