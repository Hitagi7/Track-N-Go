import React from "react";
import ParcelTracker from "../parceltracker/ParcelTracker";
import ParcelTrackerHeader from "../parceltracker/ParcelTrackerHeader";
import { useLocation } from "react-router-dom";

function ParcelTrackerPage() {
  const location = useLocation();
  const parcel = location.state;

  return (
    <div className="ParcelTrackerPage">
      <ParcelTrackerHeader />
      <hr />
      <ParcelTracker parcel={parcel} />
    </div>
  );
}

export default ParcelTrackerPage;
