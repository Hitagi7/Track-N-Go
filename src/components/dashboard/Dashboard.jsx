import React from 'react'
import './Dashboard.css'
import DashboardTitle from './DashboardTitle'
import DashboardMenu from './DashboardMenu'

function Dashboard() {
  return (
    <div className="Dashboard">
        <DashboardMenu />
        <DashboardTitle />
    </div>
  )
}

export default Dashboard