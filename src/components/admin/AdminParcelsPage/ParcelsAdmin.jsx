import "./ParcelsAdmin.css";
import AdminSideBar from "../AdminSideBar";
import AdminParcelBody from "./AdminParcelBody";
import { useState, useEffect } from "react";
import {
  getParcels,
  createParcel,
  updateParcel,
  deleteParcel,
} from "./../AdminService";

const ParcelsAdmin = () => {
  const [parcels, setParcels] = useState([]);

  // Add parcel
  const addParcel = (newParcel) => {
    setParcels([...parcels, newParcel]);
    createParcel(newParcel);
  };

  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);

  return (
    <div className="admin-homepage">
      <div className="AdminBodySideNavigation">
        <AdminSideBar />
      </div>
      <div className="AdminParcelBody">
        <p className="ParcelAdminHeader">Parcels - Admin View</p>
        <AdminParcelBody parcelDetails={parcels} addParcel={addParcel} />
      </div>
    </div>
  );
};

export default ParcelsAdmin;
