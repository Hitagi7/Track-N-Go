import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Overlay.css'

function LoginOverlay({ visible, toggleVisible, toggleLoginSignup }) {

    return (
        visible && (
            <div class="overlay-container"> 
                <div class="dimmed-background">
                </div>
                <div class="overlay">
                    <div class="login overlay">
                        <h3>Log in to Track N' Go</h3>
                        <div class="text-field">
                            <p>Email</p>
                            <form action="#">
                                <img src="src/assets/icons/icon-mail.svg" alt="" class="mail-icon" />
                                <input type="email" placeholder="john_doe@email.com" class="email-field" />
                            </form>
                        </div>
                        <div class="text-field">
                            <p>Password</p>
                            <form action="#">
                                <img src="src/assets/icons/icon-password.svg" class="password-icon" alt="" />
                                <input type="password" placeholder="Should be 8 characters and above" class="password-field" />
                            </form>
                        </div>
                        <button class="fbutton primary">Log in</button>
                        <button class="fbutton secondary" onClick={toggleVisible}>Cancel</button>
                        <div class="hyperlink">
                            <p>Need an account? </p> 
                            <a href="#" class="hyperlink" onClick={toggleLoginSignup}>Create an account.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default LoginOverlay