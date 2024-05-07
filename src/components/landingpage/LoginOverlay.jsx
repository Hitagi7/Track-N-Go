import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Overlay.css'
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginOverlay = ({ visible, toggleVisible, toggleLoginSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null); // State for error message

    const navigate = useNavigate(); // Hook for navigation

    const signIn = async (e) => {
        e.preventDefault();
        setErrorMessage(null); // Clear any previous error message
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in successfully!");
    
          // Redirect to the dashboard after successful login
          navigate('/DashboardPage'); // Replace '/dashboard' with your actual dashboard route
    
          // Optional: Close the overlay after successful login
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
              message = "An error occurred during login. Please try again.";
          }
          setErrorMessage(message);
        }
      };

    return (
        visible && (
            <div className="overlay-container"> 
                <div className="dimmed-background">
                </div>
                <div className="overlay">
                    <div className="login overlay">
                        <h3>Log in to Track N' Go</h3>
                        <div className="text-field">
                            <p>Email</p>
                            <form onSubmit={signIn}>
                                <img src="src/assets/icons/icon-mail.svg" alt="" className="mail-icon" />
                                <input 
                                    type="email"
                                    placeholder="john_doe@email.com" 
                                    className="email-field" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                ></input>
                            <p>Password</p>
                                <img src="src/assets/icons/icon-password.svg" className="password-icon" alt="" />
                                <input 
                                    type="password" 
                                    placeholder="Should be 8 characters and above" 
                                    className="password-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                ></input>
                                {errorMessage && (
                                    <div className={`error-message-container animate`}>{errorMessage}</div>
                                )}
                                <button type="submit" className="fbutton primary">Log in</button>
                            </form>
                        </div>
                        
                        <button className="fbutton secondary" onClick={toggleVisible}>Cancel</button>
                        <div className="hyperlink">
                            <p>Need an account? </p> 
                            <a href="#" className="hyperlink" onClick={toggleLoginSignup}>Create an account.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default LoginOverlay