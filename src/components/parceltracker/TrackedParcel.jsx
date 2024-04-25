import React from 'react'
import './TrackedParcel.css'
import Parcel from './Parcel'

function TrackedParcel() {
  return (
    <div className="TrackedParcel">
      <p className="font-20 font-semibold">Tracked Parcel</p>
      <Parcel />
    </div>
  )
}

export default TrackedParcel