import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './SideNavigation.css'
import { Link } from 'react-router-dom'

function SideNavigation() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db,"TNG Users", user.uid);
      const docSnap = await getDoc(docRef);
      
      if(docSnap.exists()){
        setUserDetails(docSnap.data());
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  
  }, [])
  

  return (
    <div className="SideNavigation">
        {userDetails ? (
          <>
          <Link to='/'><img src="/src/assets/TNG Logo V2.png" alt="Logo Text" className="logo"/></Link>
          <hr className="hr1"/>
          <div className="Frames">
            <Link to="/DashboardPage"><div className="Frame1">
              <img src="/src/assets/icons/icon-dashboard.svg" alt="Dashboard Icon" className="icon1"/>
              <p className="font-16">Dashboard</p>
            </div></Link>
  
            <Link to="/ProfilePage"><div className="Frame2">
              <img src="/src/assets/icons/icon-profile.svg" alt="Profile Icon" className="icon2"/>
              <p className="font-16">Profile</p>
            </div></Link>
  
            <Link to="/SettingsPage"><div className="Frame3">
              <img src="/src/assets/icons/icon-settings.svg" alt="Settings Icon" className="icon3"/>
              <p className="font-16">Settings</p>
            </div></Link>
          </div>
          <hr className="hr2"/>
          <div className="Frame4">
            <img src="/src/assets/icons/profile-placeholder.svg" alt="Profile Placeholder Icon" className="icon4"/>
            <div className="profile-display">
              <p className="font-18 font-semibold">{userDetails.firstName} {userDetails.lastName}</p>
              <p className="font-15 font-extralight">Basic Account</p>
            </div>
          </div>
          </>
        ) : (
          <p className="font-18 font-semibold">Loading...</p>
        )}
    </div>
  )
}

export default SideNavigation