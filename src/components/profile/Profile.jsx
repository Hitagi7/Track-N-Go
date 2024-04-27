import React from "react";
import "./Profile.css";
import SideNavigation from "../SideNavigation";
import ProfileTitle from "./ProfileTitle";

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile1">
        <SideNavigation />
      </div>
      <div className="Profile2">
        <ProfileTitle />
        <div className="Profile3"> {/* Main content/container */}
            test
        </div>
      </div>
    </div>
  );
}

export default Profile;
