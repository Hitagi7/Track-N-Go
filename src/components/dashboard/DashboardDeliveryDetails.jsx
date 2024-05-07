import React from 'react'
import './DashboardDeliveryDetails.css'
import { Link } from 'react-router-dom';


function DashboardDeliveryDetails() {
  return (
    <div className="DashboardDeliveryDetails">
        <div className="Frame6">
          <div className="Frame8">
            <p className="font-bold">0</p>
            <p className="delivery">in delivery today</p>
          </div>
          <img src="/src/assets/icons/truck.svg" alt="Delivery Truck" className="truck"/>
        </div>
        <div className="Frame7">
          <p className="DeliveryNumber">There are currently no parcels out for delivery today.</p>
        </div>
        <div className="Frame9">
          <Link to="/ParcelHistoryPage"><button className="SeeHistory">See History</button></Link>
          <Link to="/SettingsPage"><button className="ManageSettings">Manage Settings</button></Link>
        </div>
    </div>
  )
}

export default DashboardDeliveryDetails