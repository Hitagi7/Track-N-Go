import React from 'react'
import './SettingsBody.css'

function SettingsBody() {
    return (
        <div className="settings-body">
            <section className="notification-section">

                <p className="notification-title font-30 font-medium">
                    Notifications
                </p>

                <section className="notification-description">

                    <section className="notification-text">
                        <p className="settings-text-label">
                            Enable in-app notifications
                        </p>
                        <p className="font-12 font-light">
                            This setting enables notifications within the app.
                        </p>
                    </section>

                    <img src="src/assets/icons/button-idle-toggle.svg" alt="" className="toggle-button" />
                    
                </section>

            </section>

            <section className="account-settings">
                <p className="account-title font-30 font-medium">
                    Account Settings
                </p>

                <section className="account-fields">
                    <p class="settings-text-label">Change password</p>
                    <div class="settings-text-field">
                        <p>Enter current password</p>
                        <form action="#">
                            <img src="src/assets/icons/icon-password.svg" alt="" class="settings-password-icon" />
                            <input type="password" placeholder="john_doe@email.com" class="settings-password-field" />
                        </form>
                    </div>
                    <div class="settings-text-field">
                        <p>Enter new password</p>
                        <form action="#">
                            <img src="src/assets/icons/icon-password.svg" class="settings-password-icon" alt="" />
                            <input type="password" placeholder="Should be 8 characters and above" class="settings-password-field" />
                        </form>
                    </div>
                    <button class="settings-fbutton">Save changes</button>
                </section>

            </section>

            <section className="faq-section">
                <div className="faq-title">
                    <p className="font-30 font-medium">FAQs (Frequently Asked Questions)</p>
                </div>
                <p className="font-16 faq-paragraph">
                    <p className="faq-question">How does parcel tracking work?</p>
                    <br />Parcel tracking lets you monitor your package's location and status in real-time by entering your tracking number on our website.
                    <br />
                    <br /><p className="faq-question">Is parcel tracking free?</p>
                    <br />Yes, our parcel tracking service is completely free to use – no hidden fees.
                    <br />
                    <br /><p className="faq-question">Can I track without a tracking number?</p>
                    <br />No, you'll need a unique tracking number provided by the sender or carrier.
                    <br />
                    <br /><p className="faq-question">What if there's a delivery issue?</p>
                    <br />Contact our customer support for assistance with any delivery problems.
                    <br />
                    <br /><p className="faq-question">Can I track multiple parcels?</p>
                    <br />Yes, you can track multiple packages simultaneously by entering each tracking number separately.
                    <br />
                    <br /><p className="faq-question">How long for updates?</p>
                    <br />Tracking updates are usually real-time but may vary by carrier and location.
                </p>
            </section>

            <section className="about-us">
                <div className="about-us-title">
                    <p className="font-30 font-medium">About Us</p>
                </div>
                <div className="about-us-description">
                    <p className="about-us-description">
                        Welcome to our parcel tracking platform, crafted by a passionate team of four college students in the Philippines. Fueled by frustration with existing tracking solutions, we've dedicated ourselves to simplifying parcel management across our country. With a focus on innovation and customer satisfaction, we've developed a user-friendly platform offering seamless tracking and real-time updates. Join us in our mission to redefine parcel tracking in the Philippines and make logistics hassle-free for all.
                    </p>
                </div>

                <div class="about-us-icon-label">
                    <span class="about-us-icon fb-label"></span>
                    <span class="about-us-label">Track N' Go</span>
                </div>

                <div class="about-us-icon-label">
                    <span class="about-us-icon insta-label"></span>
                    <span class="about-us-label">@tng_TrackAndGo</span>
                </div>

                <div class="about-us-icon-label">
                    <span class="about-us-icon linkedin-label"></span>
                    <span class="about-us-label">BNC Wayfinders</span>
                </div>

            </section>

            <section className="about-us-settings">
                <div className="about-us-title">
                    <p className="font-30 font-medium">Sign Out</p>
                </div>
                <div className="sign-out-description">
                    <p className="sign-out-description">
                        Clicking the sign out button will securely log you out of your account, ensuring your privacy and security. Ready to sign out? Just one click and you're done!
                    </p>
                </div>
                <div className="logout-button">
                    <button class="settings-fbutton logout-button">Save changes</button>
                </div>
            </section>

        </div>
    )
}

export default SettingsBody