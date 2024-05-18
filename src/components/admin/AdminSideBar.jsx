import React from "react";
import "./AdminSideBar.css";
import { Link } from "react-router-dom";

function AdminSideBar() {
  return (
    <div className="a-side-navigation">
      <Link to="/">
        <img
          src="src/assets/TNG Logo V2.png"
          alt=""
          className="a-tng-logo"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="a-navigation">
        <Link to="/AdminHomePage">
          <button className="a-users a-navigation-item">
            <p className="font-16 font-semibold">Users</p>
          </button>
        </Link>
        <Link to="/ParcelsAdmin">
          <button className="a-parcels a-navigation-item">
            <p className="font-16 font-semibold">Parcels</p>
          </button>
        </Link>
        <Link to="/TrackingAdmin">
          <button className="a-tracking a-navigation-item">
            <p className="font-16 font-semibold">Tracking</p>
          </button>
        </Link>
      </div>
      <div className="a-profile-button">
        <img
          src="src/assets/icons/profile-placeholder.svg"
          alt=""
          className="a-profile-placeholder"
        />
        <div className="a-profile-label">
          <p className="font-16 font-semibold">Admin</p>
          <p className="font-14 font-light">Admin Account</p>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
