import React from "react";
import AdminSideBar from "../AdminSideBar";
import AdminParcelBody from "./AdminParcelBody";
import { useState } from "react";
import "./ParcelsAdmin.css";

const parcelPlaceHolder = [
  {
    id: "NDJ297ADM1EL",
    weight: 2.1,
    size: "14 x 14 x 2",
    price: 178.0,
    shipper: "Nat’l Bookstore",
    courier: "J&T",
    status: "In transit",
  },
  {
    id: "ERYEE2342H246",
    weight: 5.2,
    size: "20 x 20 x 10",
    price: 362.0,
    shipper: "Data Blitz",
    courier: "Lalamove",
    status: "In transit",
  },
];

const ParcelsAdmin = () => {
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
