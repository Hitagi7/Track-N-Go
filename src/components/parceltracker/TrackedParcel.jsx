import React from 'react'
import './TrackedParcel.css'
import Parcel from './Parcel'
import ParcelTransit from './ParcelTransit'

function TrackedParcel() {
  return (
    <div className="TrackedParcel">
      <p className="font-20 font-semibold">Tracked Parcel</p>
      <ParcelTransit />
      <Parcel />
    </div>
  )
}

export default TrackedParcel