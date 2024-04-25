import React from 'react'
import './DashboardMenu.css'

function DashboardMenu() {
  return (
    <div className="DashboardMenu">
        <img src="/src/assets/TNG Logo V2.png" alt="Logo Text" class="logo"/>
        <hr class="hr "/>
        <div className="Frame1">
          <img src="/src/assets/icons/icon-dashboard.svg" alt="Dashboard Icon" class="icon1"/>
          <p className="font-16">Dashboard</p>
        </div>
    </div>
  )
}

export default DashboardMenu