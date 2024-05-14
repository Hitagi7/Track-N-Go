import React, { useState } from "react";
import "./DashboardTracker.css";
import { Link } from "react-router-dom";

function DashboardTracker({ parcels, addTrackedParcels, trackedParcels }) {
  const [searchParcel, setSearchParcel] = useState("");

  const onSubmit = () => {
    let flag = true;
    let exist = false;

    trackedParcels.map((trackedParcels) => {
      if (searchParcel === trackedParcels.id) {
        alert("Parcel Already Existed");
        exist = true;
      }
    });
    if (exist === true) {
      return;
    }

    parcels.map((parcel) => {
      if (parcel.id === searchParcel) {
        addTrackedParcels(parcel);
        setSearchParcel("");
        flag = false;
      }
    });
    if (flag === true) {
      alert("No Available Parcel ID");
      setSearchParcel("");
    }
  };
  return (
    <div className="DashboardTracker">
      <p className="tracknum">
        Enter your parcel number to track your deliveries
      </p>
      <div className="SearchBar">
        <input
          type="text"
          className="InputTrackNum"
          placeholder="Enter parcel number"
          onChange={(e) => {
            setSearchParcel(e.target.value);
          }}
          id="inputBar"
        />
        <button
          className="Submit"
          onClick={() => {
            onSubmit();
            document.getElementById("inputBar").value = "";
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default DashboardTracker;
