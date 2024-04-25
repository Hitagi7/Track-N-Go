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
                <p className="font-14 font-semibold">14.6 kg</p>
                <p className="font-10">Weight</p>
            </div>
            <div className="size">
                <p className="font-14 font-semibold">21 x 60 cm</p>
                <p className="font-10">Size</p>
            </div>
            <div className="price">
                <p className="font-14 font-semibold">₱567.00</p>
                <p className="font-10">Price</p>
            </div>
        </div>
    </div>
  )
}

export default Parcel