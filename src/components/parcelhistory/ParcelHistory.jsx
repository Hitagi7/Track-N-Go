import React from "react";
import "./ParcelHistory.css";
import SideNavigation from "../SideNavigation";
import ParcelHistoryTitle from "./ParcelHistoryTitle";
import ParcelHistoryInfo from "./ParcelHistoryInfo";

function ParcelHistory({ parcels }) {
  return (
    <div className="ParcelHistory">
      <div className="ParcelHistory1">
        <SideNavigation />
      </div>
      <div className="ParcelHistory2">
        <ParcelHistoryTitle />
        <ParcelHistoryInfo parcels={parcels} />
      </div>
    </div>
  );
}

export default ParcelHistory;
