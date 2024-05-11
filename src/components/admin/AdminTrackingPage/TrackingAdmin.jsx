import { useState, useEffect } from "react";
import AdminSideBar from "../AdminSideBar";
import AdminTrackingBody from "./AdminTrackingBody";
import {
  getParcels,
  createParcel,
  updateParcel,
  deleteParcel,
} from "./../AdminService";
import "./TrackingAdmin.css";

const TrackingAdmin = () => {
  const [parcels, setParcels] = useState([]);

  const editParcel = (parcelId, updatedParcel) => {
    updateParcel(parcelId, updatedParcel);
    setParcels(
      parcels.map((parcel) => (parcel.id === parcelId ? updatedParcel : parcel))
    );
  };

  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);

  const removeParcel = (parcelId) => {
    deleteParcel(parcelId);
    setParcels(parcels.filter((parcel) => parcel.id !== parcelId));
  };

  return (
    <div className="admin-homepage">
      <div className="AdminTrackingSideNavigation">
        <AdminSideBar />
      </div>
      <div className="AdminTrackingBody">
        <p className="TrackingAdminHeader">Tracking - Admin View</p>
        <AdminTrackingBody
          parcelDetails={parcels}
          editParcel={editParcel}
          deleteParcel={removeParcel}
        />
      </div>
    </div>
  );
};

export default TrackingAdmin;
