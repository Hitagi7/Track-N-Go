import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Overlay.css'

function Overlay() {

    return (
        <div class="overlay-container"> 
            <div class="dimmed-background">
            </div>
            <div class="overlay">
                <div class="signup overlay">
                    <h3>Sign up to Track N' Go</h3>
                    <div class="text-field">
                        <p>Email</p>
                        <form action="#">
                            <img src="/images/icons/icon-mail.svg" alt="" class="mail-icon" />
                            <input type="email" placeholder="john_doe@email.com" class="email-field" />
                        </form>
                    </div>
                    <div class="text-field">
                        <p>Full Name</p>
                        <form action="#">
                            <img src="/images/icons/icon-profile.svg" class="profile-icon" alt="" />
                            <input type="text" placeholder="John Doe" class="name-field" />
                        </form>
                    </div>
                    <div class="text-field">
                        <p>Password</p>
                        <form action="#">
                            <img src="/images/icons/icon-password.svg" class="password-icon" alt="" />
                            <input type="password" placeholder="Should be 8 characters and above" class="password-field" />
                        </form>
                    </div>
                    <button class="fbutton primary">Create Account</button>
                    <button class="fbutton secondary">Cancel</button>
                    <div class="hyperlink">
                        <p>Already have an account? <a href="#">Log in.</a> </p>
                    </div>
                </div>
                <div class="login overlay">
                    <h3>Log in to Track N' Go</h3>
                    <div class="text-field">
                        <p>Email</p>
                        <form action="#">
                            <img src="/images/icons/icon-mail.svg" alt="" class="mail-icon" />
                            <input type="email" placeholder="john_doe@email.com" class="email-field" />
                        </form>
                    </div>
                    <div class="text-field">
                        <p>Password</p>
                        <form action="#">
                            <img src="/images/icons/icon-password.svg" class="password-icon" alt="" />
                            <input type="password" placeholder="Should be 8 characters and above" class="password-field" />
                        </form>
                    </div>
                    <button class="fbutton primary">Log in</button>
                    <button class="fbutton secondary">Cancel</button>
                    <div class="hyperlink">
                        <p>Need an account? <a href="#">Create an account.</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overlay