import { useState, useEffect } from "react";
import "./Dashboard.css";
import DashboardTitle from "./DashboardTitle";
import SideNavigation from "../SideNavigation";
import DashboardDeliveryDetails from "./DashboardDeliveryDetails";
import DashboardTracker from "./DashboardTracker";
import DashboardHistory from "./DashboardHistory";
import {
  getParcels,
  createParcel,
  updateParcel,
  deleteParcel,
} from "../admin/AdminService";

function Dashboard() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);

  return (
    <div className="Dashboard">
      <div className="Dashboard1">
        <SideNavigation />
      </div>
      <div className="Dashboard2">
        <DashboardTitle />
        <div className="Dashboard4">
          <div className="Dashboard3">
            <DashboardDeliveryDetails parcels={parcels} />
            <DashboardTracker />
          </div>
          <DashboardHistory parcels={parcels} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
