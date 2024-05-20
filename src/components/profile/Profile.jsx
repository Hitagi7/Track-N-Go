import React, { useState, useEffect } from "react";
import "./Profile.css";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import SideNavigation from "../SideNavigation";
import ProfileTitle from "./ProfileTitle";
import PublicProfile from "./PublicProfile";

// Placeholder User
const placeholderUser = {
  firstName: "",
  lastName: "",
};

function Profile() {
  const [user, setUser] = useState(placeholderUser);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "TNG Users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);

  const updateUser = (userUpdate) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userUpdate,
    }));
  };

  return (
    <div className="Profile">
      <div className="Profile1">
      <div className = "SideNavSpace2"></div>
        <SideNavigation />
      </div>
      <div className="Profile2">
        <ProfileTitle />
        <div className="profile-header" /> {/* To be changed */}
        <div className="Profile3">
          {/* Main content/container */}
          <PublicProfile updateUser={updateUser} user={user} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
