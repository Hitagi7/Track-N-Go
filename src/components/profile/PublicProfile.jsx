import React, { useState, useEffect } from "react";
import "./PublicProfile.css";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

function PublicProfile({ user }) {
  const [firstNameBuffer, setFirstNameBuffer] = useState("");
  const [lastNameBuffer, setLastNameBuffer] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const userFirstName = user.firstName;
  const userLastName = user.lastName;

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

    if (!firstNameBuffer && !lastNameBuffer) {
      setError("Please input changes");
      setSuccess(null);
      return;
    }
    else if (userFirstName === firstNameBuffer && userLastName === lastNameBuffer) {
      setError("Names already in use!");
      setSuccess(null);
      return;
    }

    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "TNG Users", currentUser.uid);
        await updateDoc(userDocRef, {
          firstName: firstNameBuffer,
          lastName: lastNameBuffer,
        });
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
              placeholder={userFirstName}
              onChange={(e) => setFirstNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
          <div className="last-name">
            <div className="input-title">Last Name</div>
            <input
              type="text"
              value={lastNameBuffer}
              placeholder={userLastName}
              onChange={(e) => setLastNameBuffer(e.target.value)}
              className="input-box"
            />
          </div>
        </div>
        <div className="profile-buttons">
        {error && (<div className="error-message">{error}</div>)}
        {success && (<div className="success-message">{success}</div>)}
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
