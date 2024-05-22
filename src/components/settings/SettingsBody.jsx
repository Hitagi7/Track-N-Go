import React, { useState, useEffect } from "react";
import "./SettingsBody.css";
import { auth } from "./../../firebase.js";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import passwordIcon from "/src/assets/icons/icon-password.svg";

function SettingsBody() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      setError("Please fill in all fields");
      return;
    }

    console.log(
      "User logged in:",
      !!auth.currentUser,
      auth.currentUser?.uid,
      auth.currentUser?.email
    ); // Checks if the user is logged in
    console.log(currentPassword, newPassword);

    if (auth.currentUser) {
      try {
        const credential = EmailAuthProvider.credential(
          auth.currentUser.email,
          currentPassword
        );

        await reauthenticateWithCredential(auth.currentUser, credential);

        console.log(credential);

        // User re-authenticated successfully
        await updatePassword(auth.currentUser, newPassword);
        setSuccess("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setError(null);
      } catch (error) {
        console.error("Error changing password:", error);
        setError("Failed to change password");
        setSuccess(null);
      }
    } else {
      setError("You must be signed in to change your password");
      setSuccess(null);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully");
      window.location.href = "/track-n-go/";
    } catch (error) {
      console.error("Error signing out:", error);
      // Handle errors appropriately, like displaying an error message to the user
    }
  };

  return (
    <div className="settings-body">
      <section className="account-settings">
        <p className="account-title font-30 font-medium">Account Settings</p>

        <section className="account-fields">
          <p className="settings-text-label">Change password</p>
          <div className="settings-text-field">
            <p>Enter current password</p>
            <form onSubmit={handleChangePassword}>
              <img
                src={passwordIcon}
                alt=""
                className="settings-password-icon"
              />
              <input
                type="password"
                placeholder="Current Password"
                className="settings-password-field"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </form>
          </div>
          <div className="settings-text-field">
            <p>Enter new password</p>
            <form onSubmit={handleChangePassword}>
              <img
                src={passwordIcon}
                alt=""
                className="settings-password-icon"
              />
              <input
                type="password"
                placeholder="Should be 8 characters and above"
                className="settings-password-field"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </form>
          </div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <button className="settings-fbutton" onClick={handleChangePassword}>
            Save changes
          </button>
        </section>
      </section>

      <section className="faq-section">
        <div className="faq-title">
          <p className="font-30 font-medium">
            FAQs (Frequently Asked Questions)
          </p>
        </div>
        <p className="font-16 faq-paragraph">
          <p className="faq-question">How does parcel tracking work?</p>
          <br />
          Parcel tracking lets you monitor your package's location and status in
          real-time by entering your tracking number on our website.
          <br />
          <br />
          <p className="faq-question">Is parcel tracking free?</p>
          <br />
          Yes, our parcel tracking service is completely free to use – no hidden
          fees.
          <br />
          <br />
          <p className="faq-question">Can I track without a tracking number?</p>
          <br />
          No, you'll need a unique tracking number provided by the sender or
          carrier.
          <br />
          <br />
          <p className="faq-question">What if there's a delivery issue?</p>
          <br />
          Contact our customer support for assistance with any delivery
          problems.
          <br />
          <br />
          <p className="faq-question">Can I track multiple parcels?</p>
          <br />
          Yes, you can track multiple packages simultaneously by entering each
          tracking number separately.
          <br />
          <br />
          <p className="faq-question">How long for updates?</p>
          <br />
          Tracking updates are usually real-time but may vary by carrier and
          location.
        </p>
      </section>

      <section className="about-us">
        <div className="about-us-title">
          <p className="font-30 font-medium">About Us</p>
        </div>
        <div className="about-us-description">
          <p className="about-us-description">
            Welcome to our parcel tracking platform, crafted by a passionate
            team of four college students in the Philippines. Fueled by
            frustration with existing tracking solutions, we've dedicated
            ourselves to simplifying parcel management across our country. With
            a focus on innovation and customer satisfaction, we've developed a
            user-friendly platform offering seamless tracking and real-time
            updates. Join us in our mission to redefine parcel tracking in the
            Philippines and make logistics hassle-free for all.
          </p>
        </div>

        <div className="about-us-icon-label">
          <span className="about-us-icon fb-label"></span>
          <span className="about-us-label">Track N' Go</span>
        </div>

        <div className="about-us-icon-label">
          <span className="about-us-icon insta-label"></span>
          <span className="about-us-label">@tng_TrackAndGo</span>
        </div>

        <div className="about-us-icon-label">
          <span className="about-us-icon linkedin-label"></span>
          <span className="about-us-label">BNC Wayfinders</span>
        </div>
      </section>

      <section className="about-us-settings">
        <div className="about-us-title">
          <p className="font-30 font-medium">Sign Out</p>
        </div>
        <div className="sign-out-description">
          <p className="sign-out-description">
            Clicking the sign out button will securely log you out of your
            account, ensuring your privacy and security. Ready to sign out? Just
            one click and you're done!
          </p>
        </div>
        <div className="logout-button">
          <button
            className="settings-fbutton logout-button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </section>
    </div>
  );
}

export default SettingsBody;
