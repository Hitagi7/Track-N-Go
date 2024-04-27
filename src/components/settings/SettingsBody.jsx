import React from 'react'
import './SettingsBody.css'

function SettingsBody() {
    return (
        <div className="settings-body">
            <section className="settings-notification">
                <p className="font-30 font-medium">
                    Notifications
                </p>
                <p className="font-16 font-semibold">
                    Enable in-app notifications
                </p>
                <p className="font-12 font-light">
                    This setting enables notifications within the app.
                </p>
                <section className="notification-toggle">
                    <img src="src/assets/icons/button-idle-toggle.svg" alt="" className="toggle" />
                </section>
            </section>
        </div>
    )
}

export default SettingsBody