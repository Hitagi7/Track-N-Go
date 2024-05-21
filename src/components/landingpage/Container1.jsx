import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getParcels } from "../admin/AdminService";
import "./Container1.css";

function Container1() {
  const [parcels, setParcels] = useState([]);
  const [parcelSearch, setParcelSearch] = useState("");

  useEffect(() => {
    getParcels().then((data) => setParcels(data));
  }, []);
  return (
    <div className="Container1">
      <div className="Text1">
        <h1>Effortlessly track your parcels</h1>
        <p className="paragraph-text">
          Stay connected with your shipments every step of the way with Track N'
          Go. Track your packages in real-time, receive timely updates on
          delivery status, and enjoy peace of mind knowing exactly where your
          parcels are.
        </p>
        <div className="Input">
          <div className="InputTitle">Track your parcel below!</div>
          <div className="Wrapper">
            <img
              src="/track-n-go/src/assets/icons/icon-search.svg"
              alt="icon-search"
              className="icon"
            />
            <input
              type="text"
              className="InputBox"
              placeholder="Enter tracking number"
              onChange={(e) => setParcelSearch(e.target.value)}
            />
            <Link
              key={parcels.find((parcel) => parcel.id === parcelSearch)?.id}
              to={"/ParcelTrackerPage"}
              state={parcels.find((parcel) => parcel.id === parcelSearch)}
            >
              <button
                className={
                  parcels.find((parcel) => parcel.id === parcelSearch)
                    ? "Search"
                    : "Search-Unselect"
                }
                disabled={!parcels.find((parcel) => parcel.id === parcelSearch)}
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/track-n-go/src/assets/Map With Pin.png"
        alt="Map With Pin"
        className="Resize-image1"
      />
    </div>
  );
}

export default Container1;
