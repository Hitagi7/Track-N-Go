import React from "react";
import "./DashboardDeliveryDetails.css";
import { Link } from "react-router-dom";
import truck from "/track-n-go/src/assets/icons/truck.svg";

function DashboardDeliveryDetails({ trackedParcels }) {
  const inDelivery = () => {
    let total = 0;
    trackedParcels.map((parcel) => {
      if (parcel.status !== "[5] Delivered") {
        total++;
      }
    });
    return total;
  };
  return (
    <div className="DashboardDeliveryDetails">
      <div className="Frame6">
        <div className="Frame8">
          <p className="font-bold">{inDelivery()}</p>
          <p className="delivery">in delivery today</p>
        </div>
        <img src={truck} alt="Delivery Truck" className="truck" />
      </div>
      <div className="Frame7">
        <p className="DeliveryNumber">
          There are currently {inDelivery()} parcels out for delivery today.
        </p>
      </div>
      <div className="Frame9">
        <Link to={"/track-n-go/ParcelHistoryPage"} state={trackedParcels}>
          <button className="SeeHistory">See History</button>
        </Link>
        <Link to="/track-n-go/SettingsPage">
          <button className="ManageSettings">Manage Settings</button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardDeliveryDetails;
