import React from 'react'
import './SideNavigation.css'
import { Link } from 'react-router-dom'

function SideNavigation() {
  return (
    <div className="SideNavigation">
        <Link to='/'><img src="/src/assets/TNG Logo V2.png" alt="Logo Text" class="logo"/></Link>
        <hr class="hr1"/>
        <div className="Frames">
          <Link to="/DashboardPage"><div className="Frame1">
            <img src="/src/assets/icons/icon-dashboard.svg" alt="Dashboard Icon" class="icon1"/>
            <p className="font-16">Dashboard</p>
          </div></Link>

          <Link to="/ProfilePage"><div className="Frame2">
            <img src="/src/assets/icons/icon-profile.svg" alt="Profile Icon" class="icon2"/>
            <p className="font-16">Profile</p>
          </div></Link>

          <Link to="/SettingsPage"><div className="Frame3">
            <img src="/src/assets/icons/icon-settings.svg" alt="Settings Icon" class="icon3"/>
            <p className="font-16">Settings</p>
          </div></Link>
        </div>
        <hr class="hr2"/>
        <div className="Frame4">
            <img src="/src/assets/icons/profile-placeholder.svg" alt="Profile Placeholder Icon" class="icon4"/>
            <div className="Frame5">
            <p className="font-18 font-semibold">Lorem Ipsum</p>
            <p className="font-15 font-extralight">Basic Account</p>
          </div>
          </div>
    </div>
  )
}

export default SideNavigation