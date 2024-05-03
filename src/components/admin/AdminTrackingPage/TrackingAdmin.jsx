import React from 'react'
import AdminSideBar from '../AdminSideBar'
import AdminTrackingBody from './AdminTrackingBody'
import './TrackingAdmin.css'

const TrackingAdmin = () => {
  return (
    <div className="admin-homepage">
      <div className="AdminTrackingSideNavigation">
          <AdminSideBar />
      </div>
      <div className="AdminTrackingBody">
        <p	className="TrackingAdminHeader">Tracking - Admin View</p>
        <AdminTrackingBody />
      </div>
    </div>
)}

export default TrackingAdmin