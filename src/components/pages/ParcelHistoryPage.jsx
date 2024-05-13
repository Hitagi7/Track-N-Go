import React from "react";
import ParcelHistory from "../parcelhistory/ParcelHistory";
import { useLocation } from "react-router-dom";

function ParcelHistoryPage() {
  const location = useLocation();
  const parcels = location.state;

  return (
    <div className="ParcelHistoryPage">
      <ParcelHistory parcels={parcels} />
    </div>
  );
}

export default ParcelHistoryPage;
