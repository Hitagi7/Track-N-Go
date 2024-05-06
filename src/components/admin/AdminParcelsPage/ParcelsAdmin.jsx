import React from "react";
import AdminSideBar from "../AdminSideBar";
import AdminParcelBody from "./AdminParcelBody";
import { useState } from "react";
import "./ParcelsAdmin.css";

const ParcelsAdmin = () => {
  // Add another file to store the parcel details, so that both parcel and tracking can access the data
  const [parcelDetails, setParcelDetails] = useState([]);

  // Add parcel
  const addParcel = (newParcel) => {
    setParcelDetails([...parcelDetails, newParcel]);
  };

  return (
    <div className="admin-homepage">
      <div className="AdminBodySideNavigation">
        <AdminSideBar />
      </div>
      <div className="AdminParcelBody">
        <p className="ParcelAdminHeader">Parcels - Admin View</p>
        <AdminParcelBody parcelDetails={parcelDetails} addParcel={addParcel} />
      </div>
    </div>
  );
};

export default ParcelsAdmin;
