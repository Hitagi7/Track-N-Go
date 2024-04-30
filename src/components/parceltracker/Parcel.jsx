import React from 'react'
import './Parcel.css'

function Parcel() {
  return (
    <div className='Parcel'>
        <div className="information">
            <div className="status">
                <img src="/src/assets/icons/box-delivered.svg" alt="box-delivered"/>
            </div>
            <div className="refnumber">
                #788667073435
            </div>
        </div>
        <hr />
        <div className="details">
            <div className="weight">
                <p className="detail-number">14.6 kg</p>
                <p className="detail-name">Weight</p>
            </div>
            <div className="size">
                <p className="detail-number">21 x 60 cm</p>
                <p className="detail-name">Size</p>
            </div>
            <div className="price">
                <p className="detail-number">₱567.00</p>
                <p className="detail-name">Price</p>
            </div>
        </div>
    </div>
  )
}

export default Parcel