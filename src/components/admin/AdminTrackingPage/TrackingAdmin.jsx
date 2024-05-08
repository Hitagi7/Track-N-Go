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

  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);

  return (
    <div className="admin-homepage">
      <div className="AdminTrackingSideNavigation">
        <AdminSideBar />
      </div>
      <div className="AdminTrackingBody">
        <p className="TrackingAdminHeader">Tracking - Admin View</p>
        <AdminTrackingBody parcelDetails={parcels} />
      </div>
    </div>
  );
};

export default TrackingAdmin;
