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
                <p className="detail-number">2.1 kg</p>
                <p className="detail-name">Weight</p>
            </div>
            <div className="size">
                <p className="detail-number">14 x 14 cm</p>
                <p className="detail-name">Size</p>
            </div>
            <div className="price">
                <p className="detail-number">₱178.00</p>
                <p className="detail-name">Price</p>
            </div>
        </div>
    </div>
  )
}

export default ParcelTransit