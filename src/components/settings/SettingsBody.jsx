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
                        <p className="text-label">
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
                    <p>Change password</p>
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
        </div>
    )
}

export default SettingsBody