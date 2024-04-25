import React from 'react'
import './Dashboard.css'
import DashboardTitle from './DashboardTitle'
import DashboardMenu from './DashboardMenu'
import DashboardDeliveryDetails from './DashboardDeliveryDetails'

function Dashboard() {
  return (
    <div className="Dashboard">
      <DashboardMenu />
      <DashboardTitle />
        {/* <div className="Dashboard1">
        <DashboardMenu />
        </div>
        <div className="Dashboard2">
        <DashboardTitle />
        <DashboardDeliveryDetails />
        </div> */}
    </div>
  )
}

export default Dashboard