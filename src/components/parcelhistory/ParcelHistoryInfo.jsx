import React from "react";
import "./ParcelHistoryInfo.css";

function ParcelHistoryInfo() {
  return (
    <div className="ParcelHistoryInfo">
      <div className="ParcelHistoryBody">
        <div className="InfoFrame">
          <p className="historydate">Delivery Date</p>
          <p className="historyshipper">Shipper</p>
          <p className="historycourier">Courier</p>
          <p className="historyparcelnum">Parcel Number</p>
          <p className="historystatus">Status</p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.29</p>
          <p className="sampleshipper">Nat'l Book Store</p>
          <p className="samplecourier">J&T</p>
          <p className="sampleparcelnum">NDJ297ADM1EL</p>
          <div className="StatusInTransit">
            <p className="intransit">IN TRANSIT</p>
          </div>
          <p className="viewdetails">View Details &gt;</p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.28</p>
          <p className="sampleshipper">Keeban Supplies</p>
          <p className="samplecourier">SPX</p>
          <p className="sampleparcelnum">VNJ2JVI30S033</p>
          <div className="StatusDelivered">
            <p className="delivered">DELIVERED</p>
          </div>
          <p className="viewdetails">View Details &gt; </p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.27</p>
          <p className="sampleshipper">Tinong's</p>
          <p className="samplecourier">SPX</p>
          <p className="sampleparcelnum">NJSVD920N01A</p>
          <div className="StatusDelivered">
            <p className="delivered">DELIVERED</p>
          </div>
          <p className="viewdetails">View Details &gt; </p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.27</p>
          <p className="sampleshipper">Lovito</p>
          <p className="samplecourier">SPX</p>
          <p className="sampleparcelnum">D2CJKN3L1KVB3</p>
          <div className="StatusDelivered">
            <p className="delivered">DELIVERED</p>
          </div>
          <p className="viewdetails">View Details &gt; </p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.27</p>
          <p className="sampleshipper">Rhat’s Shop</p>
          <p className="samplecourier">Amazon</p>
          <p className="sampleparcelnum">US2N4JL3NCML</p>
          <div className="StatusDelivered">
            <p className="delivered">DELIVERED</p>
          </div>
          <p className="viewdetails">View Details &gt; </p>
        </div>
        <hr className="hr12" />
        <div className="ParcelPlaceholder">
          <p className="sampledate">2024.03.27</p>
          <p className="sampleshipper">No Brand</p>
          <p className="samplecourier">J&T</p>
          <p className="sampleparcelnum">NJDKF1L3L0S98</p>
          <div className="StatusDelivered">
            <p className="delivered">DELIVERED</p>
          </div>
          <p className="viewdetails">View Details &gt; </p>
        </div>
      </div>
    </div>
  );
}

export default ParcelHistoryInfo;
