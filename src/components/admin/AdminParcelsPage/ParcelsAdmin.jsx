import React from 'react'
import AdminSideBar from '../AdminSideBar'
import AdminParcelBody from './AdminParcelBody'
import './ParcelsAdmin.css'

const ParcelsAdmin = () => {
  return (
    <div className="admin-homepage">
            <div className="AdminBodySideNavigation">
                <AdminSideBar />
            </div>
            <div className="AdminParcelBody">
              <p	className="ParcelAdminHeader">Parcels - Admin View</p>
              <AdminParcelBody />
            </div>
        </div>
)}

export default ParcelsAdmin;