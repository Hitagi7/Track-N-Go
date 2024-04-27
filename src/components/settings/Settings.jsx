import React from 'react'
import './Settings.css'
import SideNavigation from '../SideNavigation'
import SettingsTitle from './SettingsTitle';

// import IcBaselineFacebook from "../../../../assets/icons/icon-facebook";
// import { IconSettings } from "src/assets/icons/icon-settings";
// import { IconTrello } from "src/assets/icons/icon-dashboard";
// import { IconUser } from "src/assets/icons/icon-Profile";
// import { MailIcon } from "src/assets/icons/icon-mail";
// import { MdiLinkedin } from "src/assets/icons/icon-linkedin";
// import { PasswordIcon } from "src/assets/icons/icon-password";
// import { RiInstagramFill } from "src/assets/icons/icon-instagram";
// import { WfToggleItem } from "src/assets/icons/button-idle-toggle";


function Settings() {
    return (
    <div className="Settings">
        <div className="Settings1">
        <SideNavigation />
        </div>
        <div className="Settings2">
        <SettingsTitle />
        <div className="Settings3"> {/* Main content/container */}
            test
        </div>
        </div>
    </div>
    );
}



export default Settings