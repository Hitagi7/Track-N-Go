import React from 'react'
import './Settings.css'
import SideNavigation from '../SideNavigation'
import SettingsTitle from './SettingsTitle';

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