import React from "react";
import "./Profile.css";
import { useState } from "react";
import SideNavigation from "../SideNavigation";
import ProfileTitle from "./ProfileTitle";
import PublicProfile from "./PublicProfile";

// Placeholder User
const placeholderUser = {
  firstName: "Marc",
  lastName: "BNC",
  userName: "I<3BNCS",
  emailAddress: "BNC@gmail.com",
};

function Profile() {
  const [user, setUser] = useState(placeholderUser);

  const updateUser = (userUpdate) => {
    setUser({ ...userUpdate });
  };

  return (
    <div className="Profile">
      <div className="Profile1">
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
