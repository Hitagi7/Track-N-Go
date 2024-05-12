import { useRef } from "react";
import "./ParcelTrackerHeader.css";
import ButtonStack from "../ButtonStack";
import { Link } from "react-router-dom";

function ParcelTrackerHeader() {
  return (
    <div className="ParcelTrackerHeader">
      <Link to="/DashboardPage">
        <img
          src="/src/assets/TNG Logo V2.png"
          alt="Logo Text"
          className="ParcelTrackerLogo"
        />
      </Link>
      <div className="Navi">
        <ButtonStack />
      </div>
    </div>
  );
}

export default ParcelTrackerHeader;
