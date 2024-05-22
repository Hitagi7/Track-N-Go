import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./ParcelTrackerHeader.css";
import ButtonStack from "../ButtonStack";
import tngLogo2 from "/src/assets/TNG Logo V2.png";

function ParcelTrackerHeader() {
  const [user] = useAuthState(auth);

  return (
    <div className="ParcelTrackerHeader">
      <Link to={user ? "/track-n-go/DashboardPage" : "/track-n-go/"}>
        <img src={tngLogo2} alt="Logo Text" className="ParcelTrackerLogo" />
      </Link>
    </div>
  );
}

export default ParcelTrackerHeader;
