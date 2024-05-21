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
    <div className="a-side-navigation">
      <Link to="/">
        <img
          src="/track-n-go/src/assets/TNG Logo V2.png"
          alt=""
          className="a-tng-logo"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="a-navigation">
        
        <Link to="/AdminHomePage">
          <div className='sidenav-frame1'>
            <img src="/track-n-go/src/assets/icons/icon-profile.svg"
              alt="User Icon"
              className="a-icon-user"
            />
            <p className="font-16 font-semibold">Users</p>
          </div>
        </Link>
        
        <Link to="/ParcelsAdmin">
          <div className='sidenav-frame2'>
            <img src="/track-n-go/src/assets/icons/icon-parcel.svg"
              alt="Parcel Icon"
              className="a-icon-parcel"
            />
            <p className="font-16 font-semibold">Parcels</p>
          </div>
        </Link>
        
        <Link to="/TrackingAdmin">
          <div className='sidenav-frame3'>
            <img src="/track-n-go/src/assets/icons/icon-pin.svg"
              alt="Tracking Icon"
              className="a-icon-tracking"
            />
            <p className="font-16 font-semibold">Tracking</p>
          </div>
        </Link>
        
        </div>
        <button className="a-logout a-navigation-item" onClick={handleLogout}>
          Log Out
        </button>
        <div className="a-profile-button">
        <img
          src="/track-n-go/src/assets/icons/profile-placeholder.svg"
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
