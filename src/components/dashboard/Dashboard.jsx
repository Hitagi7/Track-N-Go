import React from 'react'
import './Dashboard.css'
import DashboardTitle from './DashboardTitle'
import SideNavigation from '../SideNavigation'
import DashboardDeliveryDetails from './DashboardDeliveryDetails'

function Dashboard() {
  return (
    <div className="Dashboard">
      {/* <DashboardMenu /> */}
      {/* <DashboardTitle /> */}
        <div className="Dashboard1">
          <SideNavigation />
        </div>
        {/* <DashboardTitle /> */}
        <div className="Dashboard2">
          <DashboardTitle />
          <div className="Dashboard3">
            <DashboardDeliveryDetails />
          </div>
        </div>
    </div>
  )
}

export default Dashboard