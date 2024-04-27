import React from 'react'
import './Dashboard.css'
import DashboardTitle from './DashboardTitle'
import SideNavigation from '../SideNavigation'
import DashboardDeliveryDetails from './DashboardDeliveryDetails'
import DashboardTracker from './DashboardTracker'

function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="Dashboard1">
          <SideNavigation />
        </div>
        <div className="Dashboard2">
          <DashboardTitle />
          <div className="Dashboard4">
            <div className="Dashboard3">
              <DashboardDeliveryDetails />
              <DashboardTracker />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
