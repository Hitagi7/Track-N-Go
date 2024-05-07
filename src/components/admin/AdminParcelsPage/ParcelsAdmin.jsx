import "./ParcelsAdmin.css";
import AdminSideBar from "../AdminSideBar";
import AdminParcelBody from "./AdminParcelBody";
import { useState, useEffect } from "react";
import { getParcels, createParcel, updateParcel, deleteParcel } from './../AdminService';

const ParcelsAdmin = () => {
  // Add another file to store the parcel details, so that both parcel and tracking can access the data
  const [parcels, setParcels] = useState([]);
  // const [newParcel, setNewParcel] = useState({});

  // Add parcel
  const addParcel = (newParcel) => {
    setParcels([...parcels, newParcel]);
    createParcel(newParcel);
  };

  useEffect(() => {
    getParcels().then(data => setParcels(data));
  }, [])

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
