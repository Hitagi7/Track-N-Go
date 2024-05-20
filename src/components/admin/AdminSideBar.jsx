<<<<<<< Updated upstream
import React from "react";
import "./AdminSideBar.css";
import { Link } from "react-router-dom";

function AdminSideBar() {
  return (
=======
import React from 'react'
import './AdminSideBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

function AdminSideBar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log("Admin logged out successfully!");
        navigate('/'); // Redirect to homepage after logout
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    return (
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      </div>
      <div className="a-profile-button">
=======
        </div>
        <button className="a-logout" onClick={handleLogout}>
          Log Out
        </button>
        <div className="a-profile-button">
>>>>>>> Stashed changes
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
