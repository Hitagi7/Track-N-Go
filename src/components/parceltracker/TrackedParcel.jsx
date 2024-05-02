import React from 'react'
import './TrackedParcel.css'
import ParcelTransit from './ParcelTransit'

function TrackedParcel() {
  return (
    <div className="TrackedParcel">
      <p className="font-20 font-semibold">Tracked Parcel</p>
      <ParcelTransit />
    </div>
  )
}

export default TrackedParcel