import React from "react";
import "./DashboardHistory.css";
import { Link } from "react-router-dom";

function DashboardHistory({ trackedParcels }) {
  const inDelivery = (parcelStatus) => {
    if (parcelStatus !== "[5] Delivered") {
      return "IN TRANSIT";
    } else {
      return "DELIVERED";
    }
  };

  const addLeadingZero = (number) => {
    return number < 10 ? "0" + number : number.toString();
  };

  const getMonthNumber = (monthName) => {
    const monthMap = {
      january: "01",
      february: "02",
      march: "03",
      april: "04",
      may: "05",
      june: "06",
      july: "07",
      august: "08",
      september: "09",
      october: "10",
      november: "11",
      december: "12",
    };
    return monthMap[monthName.toLowerCase()] || monthName; // Handle invalid month names
  };

  return (
    <div className="DashboardHistory">
      <p className="history">Your recent deliveries</p>
      <div className="DeliveryInfo">
        <div className="Frame11">
          <p className="deliverydate">Delivery Date</p>
          <p className="shipper1">Shipper</p>
          <p className="courier1">Courier</p>
          <p className="parcelnum">Parcel Number</p>
          <p className="status1">Status</p>
        </div>
        {trackedParcels.length !== 0 ? (
          <>
            {trackedParcels.map((parcel) => (
              <>
                <hr className="hr11" />
                <div className="Frame12" key={parcel.id}>
                  <p className="deliverydate2">
                    {parcel.shippedYear}/{getMonthNumber(parcel.shippedMonth)}/
                    {addLeadingZero(parcel.shippedDay)}
                  </p>
                  <p className="shipper2">{parcel.shipper}</p>
                  <p className="courier2">{parcel.courier}</p>
                  <p className="parcelnum2">{parcel.id}</p>
                  <div
                    className={
                      inDelivery(parcel.status) === "DELIVERED"
                        ? "Frame14"
                        : "Frame13"
                    }
                  >
                    <p
                      className={
                        inDelivery(parcel.status) === "DELIVERED"
                          ? "status3"
                          : "status2"
                      }
                    >
                      {inDelivery(parcel.status)}
                    </p>
                  </div>
                  <Link to={"/ParcelTrackerPage"} state={parcel}>
                    <p className="details2">View Details &gt;</p>
                  </Link>
                </div>
              </>
            ))}
          </>
        ) : (
          <div className="Frame12">
            <p className="deliverydate2">No Tracked Parcels</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHistory;
