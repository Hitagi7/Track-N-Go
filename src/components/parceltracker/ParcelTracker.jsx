import React from "react";
import "./ParcelTracker.css";
import TrackedParcel from "./TrackedParcel";
import ParcelTrackerBody from "./ParcelTrackerBody";

function ParcelTracker({ parcel }) {
  return (
    <div className="ParcelTracker">
      <TrackedParcel parcel={parcel} />
      <ParcelTrackerBody parcel={parcel} />
    </div>
  );
}

export default ParcelTracker;
