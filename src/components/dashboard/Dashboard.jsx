import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../../firebase";
import "./Dashboard.css";
import DashboardTitle from "./DashboardTitle";
import SideNavigation from "../SideNavigation";
import DashboardDeliveryDetails from "./DashboardDeliveryDetails";
import DashboardTracker from "./DashboardTracker";
import DashboardHistory from "./DashboardHistory";
import {
  getParcels,
  getUserParcels,
  createUserParcel,
} from "../admin/AdminService";

function Dashboard() {
  const [parcels, setParcels] = useState([]);
  const [trackedParcels, setTrackedParcels] = useState([]);
  // const user = "Louise";
  const [user, setUser] = useState(null);

  // // User Tracked Parcels
  // useEffect(() => {
  //   getUserParcels(user).then((data) => setTrackedParcels(data));
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        getUserParcels(currentUser.uid).then((data) => setTrackedParcels(data));
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Parcels
  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);

  const addTrackedParcels = (searchedParcel) => {
    if (user) {
      setTrackedParcels([...trackedParcels, searchedParcel]);
      createUserParcel(searchedParcel, user.uid);
    } else {
      console.error("No user is logged in.");
    }
  };

  return (
    <div className="Dashboard">
      <div className="Dashboard1">
      <div className = "SideNavSpace"></div>
        <SideNavigation />
      </div>
      <div className="Dashboard2">
        <div className="DashboardTitleSpace">
          <DashboardTitle />
        </div>
        <div className="Dashboard4">
          <div className="Dashboard3">
            <DashboardDeliveryDetails
              parcels={parcels}
              trackedParcels={trackedParcels}
            />
            <DashboardTracker
              parcels={parcels}
              addTrackedParcels={addTrackedParcels}
              trackedParcels={trackedParcels}
            />
          </div>
          <DashboardHistory trackedParcels={trackedParcels} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
