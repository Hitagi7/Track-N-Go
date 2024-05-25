import React, { useState, useEffect } from "react";
import "./PublicProfile.css";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import profilePlaceholder from "/src/assets/icons/profile-placeholder.svg";
import buttonCamera from "/src/assets/icons/button-camera.svg";

function PublicProfile({ user, updateUser }) {
  const [firstNameBuffer, setFirstNameBuffer] = useState("");
  const [lastNameBuffer, setLastNameBuffer] = useState("");
  const [usernameBuffer, setUsernameBuffer] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000); // Change duration as needed (3000ms = 3 seconds)
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Save changes
  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      firstName: firstNameBuffer || user.firstName,
      lastName: lastNameBuffer || user.lastName,
      username: usernameBuffer || user.username,
    };

    if (!firstNameBuffer && !lastNameBuffer && !usernameBuffer) {
      setError("Please input changes");
      setSuccess(null);
      return;
    } else if (
      user.firstName === firstNameBuffer &&
      user.lastName === lastNameBuffer &&
      user.username === usernameBuffer
    ) {
      setError("Names already in use!");
      setSuccess(null);
      return;
    }

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "TNG Users", currentUser.uid);
        await updateDoc(userDocRef, {
          firstName: firstNameBuffer || user.firstName,
          lastName: lastNameBuffer || user.lastName,
          username: usernameBuffer || user.username,
        });
        setFirstNameBuffer("");
        setLastNameBuffer("");
        setUsernameBuffer("");
        updateUser(updatedUser);
        setSuccess("Profile Updated Successfully!");
        setError(null);
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
      setError("Error updating profile");
      setSuccess(null);
    }
  };

  const onCancel = (e) => {
    e.preventDefault();
    setFirstNameBuffer("");
    setLastNameBuffer("");
    setUsernameBuffer("");
  };

  return (
    <div className="PublicProfile">
      <div className="profile-frame">
        <div className="title">Public profile</div>
        <div className="profile-picture">
          <img
            src={profilePlaceholder}
            alt="profile-placeholder"
            className="profile-placeholder"
          />
          <img
            src={buttonCamera}
            alt="button-camera"
            className="button-camera"
          />
        </div>
        <div className="input-fields">
          <div className="first-name">
            <div className="input-title">First Name</div>
            <input
              type="text"
              value={firstNameBuffer}
              placeholder={user.firstName}
              onChange={(e) => setFirstNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="last-name">
            <div className="input-title">Last Name</div>
            <input
              type="text"
              value={lastNameBuffer}
              placeholder={user.lastName}
              onChange={(e) => setLastNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="username">
            <div className="input-title">Username</div>
            <p className="p-icon">@</p>
            <input
              type="text"
              value={usernameBuffer}
              placeholder={`${user.username}`}
              onChange={(e) => setUsernameBuffer(e.target.value)}
              className="input-box-username input-box"
            />
          </div>
        </div>
        <div className="profile-buttons">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <button className="save-changes-profile" onClick={onSubmit}>
            Save changes
          </button>
          <button className="cancel-profile" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
