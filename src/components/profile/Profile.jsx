import React from "react";
import "./Profile.css";
import SideNavigation from "../SideNavigation";
import ProfileTitle from "./ProfileTitle";
import PublicProfile from "./PublicProfile";

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile1">
        <SideNavigation />
      </div>
      <div className="Profile2">
        <ProfileTitle />
        <div className="profile-header"/> {/* To be changed */}
        <div className="Profile3"> {/* Main content/container */}
            <PublicProfile />
        </div>
      </div>
    </div>
  );
}

export default Profile;
