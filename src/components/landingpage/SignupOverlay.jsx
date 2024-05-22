import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";
import "./Overlay.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import mailIcon from "/track-n-go/src/assets/icons/icon-mail.svg";
import profileIcon from "/track-n-go/src/assets/icons/icon-profile.svg";
import passwordIcon from "/track-n-go/src/assets/icons/icon-password.svg";

const generateUserId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const SignupOverlay = ({ visible, toggleVisible, toggleLoginSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // New state for first name
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const [successMessage, setSuccessMessage] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false); // State for signup success
  const [redirectedAfterSignup, setRedirectedAfterSignup] = useState(false); // Flag for redirection

  const validatePassword = (password) => {
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  };

  const validateFields = () => {
    let error = null;

    if (!email) {
      error = "Please enter your email address.";
    } else if (!password) {
      error = "Please enter a password.";
    } else if (!firstName) {
      error = "Please enter your first name.";
    } else if (!lastName) {
      error = "Please enter your last name.";
    }

    setErrorMessage(error);
    return !error; // Return true if no errors, false if there are errors
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return; // Prevent creating user with empty fields
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      return; // Prevent creating user with invalid password
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser; // Gets the current user's details and stores it in user
      const randomUserId = generateUserId();
      console.log("User created successfully!");
      setSuccessMessage("Sign Up Successful! Redirecting to Login...");
      if (user) {
        await setDoc(doc(db, "TNG Users", user.uid), {
          userId: randomUserId,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          username: "",
        });
      }
      setErrorMessage(null);
      setSignupSuccess(true); // Set signup success flag
    } catch (error) {
      // Handle specific errors
      let message;
      switch (error.code) {
        case "auth/email-already-in-use":
          message =
            "Email already exists. Please try signing in or using a different email.";
          break;
        case "auth/weak-password": // For more granular password validation
          message = "Password is too weak. Please choose a stronger password.";
          break;
        default:
          message = "An error occurred during sign up. Please try again.";
      }
      setErrorMessage(message);
    }
  };

  // Handle signup success message and redirection after 3 seconds
  useEffect(() => {
    if (signupSuccess && !redirectedAfterSignup) {
      // Show success message immediately
      const successMessageTimeoutId = setTimeout(() => {}, 0); // Set immediate timeout
      clearTimeout(successMessageTimeoutId); // Clear immediate timeout (to show message)

      const redirectionTimeoutId = setTimeout(() => {
        toggleLoginSignup(); // Redirect to Login Overlay after delay
        setRedirectedAfterSignup(true); // Set redirection flag to prevent loop
        setErrorMessage(null);
        setSuccessMessage(null);
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
      }, 3000); // 3 seconds delay

      return () => {
        clearTimeout(successMessageTimeoutId);
        clearTimeout(redirectionTimeoutId); // Cleanup on unmount
      };
    }
  }, [signupSuccess, redirectedAfterSignup, toggleLoginSignup]);

  return (
    visible && (
      <div className="overlay-container">
        <div className="dimmed-background"></div>
        <div className="overlay">
          <div className="signup overlay">
            <h3>Sign up to Track N' Go</h3>
            <div className="text-fields">
              <form onSubmit={handleSignUp}>
                <section className="email-wrapper">
                  <p>Email</p>
                  <div className="input-field">
                    <img src={mailIcon} alt="" className="field-icon" />
                    <input
                      type="email"
                      placeholder="john_doe@email.com"
                      className="text-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </section>

                <section className="first-name-wrapper">
                  <p>First Name</p>
                  <div className="input-field">
                    <img src={profileIcon} class="field-icon" alt="" />
                    <input
                      type="text"
                      placeholder="John"
                      class="text-field"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>
                </section>

                <section className="last-name-wrapper">
                  <p>Last Name</p>
                  <div className="input-field">
                    <img src={profileIcon} class="field-icon" alt="" />
                    <input
                      type="text"
                      placeholder="Doe"
                      class="text-field"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </div>
                </section>

                <section className="password-wrapper">
                  <p>Password</p>
                  <div className="input-field">
                    <img src={passwordIcon} className="field-icon" alt="" />
                    <input
                      type="password"
                      placeholder="Should be 8 characters and above"
                      className="text-field"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </section>

                {errorMessage && (
                  <div className={`error-message-container animate`}>
                    {errorMessage}
                  </div>
                )}
                {signupSuccess && (
                  <div className={`success-message-container`}>
                    {successMessage}
                  </div>
                )}
                <button type="submit" className="fbutton primary">
                  Create Account
                </button>
              </form>
            </div>

            <button
              className="fbutton secondary"
              onClick={() => {
                setErrorMessage(null);
                setEmail("");
                setPassword("");
                setFirstName("");
                setLastName("");
                toggleVisible();
              }}
            >
              Cancel
            </button>

            <div className="hyperlink">
              <p>Already have an account? </p>
              <a href="#" className="hyperlink" onClick={toggleLoginSignup}>
                Log in.
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SignupOverlay;
