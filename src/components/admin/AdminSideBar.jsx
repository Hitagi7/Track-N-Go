import React from "react";
import "./AdminSideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import logo from "/src/assets/TNG Logo V2.png";
import iconProfile from "/src/assets/icons/icon-profile.svg";
import iconParcel from "/src/assets/icons/icon-parcel.svg";
import iconPin from "/src/assets/icons/icon-pin.svg";
import profilePlaceholder from "/src/assets/icons/profile-placeholder.svg";

function AdminSideBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Admin logged out successfully!");
      navigate("/track-n-go/"); // Redirect to homepage after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="a-side-navigation">
      <img src={logo} alt="" className="a-tng-logo" />

      <div className="a-navigation">
        <Link to="/track-n-go/AdminHomePage">
          <div className="sidenav-frame1">
            <img src={iconProfile} alt="User Icon" className="a-icon-user" />
            <p className="font-16 font-semibold">Users</p>
          </div>
        </Link>

        <Link to="/track-n-go/ParcelsAdmin">
          <div className="sidenav-frame2">
            <img src={iconParcel} alt="Parcel Icon" className="a-icon-parcel" />
            <p className="font-16 font-semibold">Parcels</p>
          </div>
        </Link>

        <Link to="/track-n-go/TrackingAdmin">
          <div className="sidenav-frame3">
            <img
              src={iconPin}
              alt="Tracking Icon"
              className="a-icon-tracking"
            />
            <p className="font-16 font-semibold">Tracking</p>
          </div>
        </Link>
        
        <button className="a-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default AdminSideBar;
