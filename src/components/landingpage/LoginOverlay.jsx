import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Overlay.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginOverlay = ({
  visible,
  toggleVisible,
  toggleLoginSignup,
  loginType = "user",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const navigate = useNavigate(); // Hook for navigation

  const signIn = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Clear any previous error message

    if (loginType === "admin" && email !== "admin@tng.com") {
      setErrorMessage("Unauthorized access. Admin only.");
      return; // Prevent further execution if email is not "admin@tng.com" for admin login
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");

      // Redirect to the appropriate dashboard after successful login
      if (email === "admin@tng.com") {
        navigate("/track-n-go/AdminHomePage");
      } else {
        navigate("/track-n-go/DashboardPage");
      }

      toggleVisible();
    } catch (error) {
      let message;
      switch (error.code) {
        case "auth/wrong-password":
          message = "Incorrect email or password.";
          break;
        case "auth/user-not-found":
          message = "Email not found. Please create an account.";
          break;
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        default:
          message =
            "An error occurred. Please enter the correct email or password";
      }
      setErrorMessage(message);
    }
  };

  return (
    visible && (
      <div className="overlay-container">
        <div className="dimmed-background"></div>
        <div className="overlay">
          <div className="login overlay">
            <h3>
              {loginType === "admin"
                ? "Log in to Admin Panel"
                : "Log in to Track N' Go"}
            </h3>

            <div className="text-fields">
              <form onSubmit={signIn}>
                <section className="email-wrapper">
                  <p>Email</p>
                  <div className="input-field">
                    <img
                      src="/track-n-go/src/assets/icons/icon-mail.svg"
                      alt=""
                      className="field-icon"
                    />
                    <input
                      type="email"
                      placeholder="john_doe@email.com"
                      className="text-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </section>

                <section className="password-wrapper">
                  <p>Password</p>
                  <div className="input-field">
                    <img
                      src="/track-n-go/src/assets/icons/icon-password.svg"
                      className="field-icon"
                      alt=""
                    />
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
                <button type="submit" className="fbutton primary">
                  Log in
                </button>
              </form>
            </div>

            <button
              className="fbutton secondary"
              onClick={() => {
                setErrorMessage(null);
                setEmail("");
                setPassword("");
                toggleVisible();
              }}
            >
              Cancel
            </button>
            <div className="hyperlink">
              <p>Need an account? </p>
              <a href="#" className="hyperlink" onClick={toggleLoginSignup}>
                Create an account.
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginOverlay;
