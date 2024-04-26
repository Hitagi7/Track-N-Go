import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Overlay.css'

function SignupOverlay({ visible, toggleVisible, toggleLoginSignup }) {

    return (
        visible && (
            <div class="overlay-container"> 
                <div class="dimmed-background">
                </div>
                <div class="overlay">
                    <div class="signup overlay">
                        <h3>Sign up to Track N' Go</h3>
                        <div class="text-field">
                            <p>Email</p>
                            <form action="#">
                                <img src="src/assets/icons/icon-mail.svg" alt="" class="mail-icon" />
                                <input type="email" placeholder="john_doe@email.com" class="email-field" />
                            </form>
                        </div>
                        <div class="text-field">
                            <p>Full Name</p>
                            <form action="#">
                                <img src="src/assets/icons/icon-profile.svg" class="profile-icon" alt="" />
                                <input type="text" placeholder="John Doe" class="name-field" />
                            </form>
                        </div>
                        <div class="text-field">
                            <p>Password</p>
                            <form action="#">
                                <img src="src/assets/icons/icon-password.svg" class="password-icon" alt="" />
                                <input type="password" placeholder="Should be 8 characters and above" class="password-field" />
                            </form>
                        </div>
                        <button class="fbutton primary">Create Account</button>
                        <button class="fbutton secondary" onClick={toggleVisible}>Cancel</button>
                        <div class="hyperlink">
                            <p>Already have an account? </p> 
                            <a href="#" class="hyperlink" onClick={toggleLoginSignup}>Log in.</a> 
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default SignupOverlay