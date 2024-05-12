import React from "react";
import "./DashboardDeliveryDetails.css";
import { Link } from "react-router-dom";

function DashboardDeliveryDetails({ parcels }) {
  const inDelivery = () => {
    let total = 0;
    parcels.map((parcel) => {
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
        <img
          src="/src/assets/icons/truck.svg"
          alt="Delivery Truck"
          className="truck"
        />
      </div>
      <div className="Frame7">
        <p className="DeliveryNumber">
          There are currently {inDelivery()} parcels out for delivery today.
        </p>
      </div>
      <div className="Frame9">
        <Link to="/ParcelHistoryPage">
          <button className="SeeHistory">See History</button>
        </Link>
        <Link to="/SettingsPage">
          <button className="ManageSettings">Manage Settings</button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardDeliveryDetails;
