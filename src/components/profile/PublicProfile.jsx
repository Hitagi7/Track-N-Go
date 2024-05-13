import React from "react";
import { useState } from "react";
import "./PublicProfile.css";

function PublicProfile({ user, updateUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstNameBuffer, setFirstNameBuffer] = useState("");
  const [lastNameBuffer, setLastNameBuffer] = useState("");
  const [userNameBuffer, setUserNameBuffer] = useState("");
  const [emailAddressBuffer, setEmailAddressBuffer] = useState("");

  // Save changes
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !firstNameBuffer &&
      !lastNameBuffer &&
      !userNameBuffer &&
      !emailAddressBuffer
    ) {
      alert("Please input changes");
      return;
    }

    const updatedUser = {
      firstName: firstNameBuffer || user.firstName,
      lastName: lastNameBuffer || user.lastName,
      userName: userNameBuffer || user.userName,
      emailAddress: emailAddressBuffer || user.emailAddress,
    };

    updateUser(updatedUser);

    setFirstNameBuffer("");
    setLastNameBuffer("");
    setUserNameBuffer("");
    setEmailAddressBuffer("");

    console.log(user);
  };

  // Cancel changes
  const onCancel = (e) => {
    e.preventDefault();
    setFirstNameBuffer("");
    setLastNameBuffer("");
    setUserNameBuffer("");
    setEmailAddressBuffer("");
  };

  return (
    <div className="PublicProfile">
      <div className="profile-frame">
        <div className="title">Public profile</div>
        <div className="profile-picture">
          <img
            src="/src/assets/icons/profile-placeholder.svg"
            alt="profile-placeholder"
            className="profile-placeholder"
          />
          <img
            src="/src/assets/icons/button-camera.svg"
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
              placeholder={lastName || user.lastName}
              onChange={(e) => setLastNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="username">
            <div className="input-title">Username</div>
            <input
              type="text"
              value={userNameBuffer}
              placeholder={
                user.userName !== ""
                  ? `@${user.userName}`
                  : "@username" || userName
              }
              onChange={(e) => setUserNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="email-address">
            <div className="input-title">Email Address</div>
            <input
              type="text"
              value={emailAddressBuffer}
              placeholder={emailAddress || user.emailAddress}
              onChange={(e) => setEmailAddressBuffer(e.target.value)}
              className="input-box"
            />
          </div>
        </div>
        <div className="profile-buttons">
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
