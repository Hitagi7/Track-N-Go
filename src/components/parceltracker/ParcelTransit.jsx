import React from "react";
import "./ParcelTransit.css";

function ParcelTransit({ parcel }) {
  return (
    <div className="ParcelTransit">
      <div className="information">
        <div className="status">
          <img src="/src/assets/icons/box-in-transit.svg" alt="box-delivered" />
        </div>
        <div className="refnumber">#{parcel.id}</div>
      </div>
      <hr />
      <div className="details">
        <div className="weight">
          <p className="detail-number">{parcel.weight} kg</p>
          <p className="detail-name">Weight</p>
        </div>
        <div className="size">
          <p className="detail-number">
            {parcel.length} x {parcel.width} x {parcel.height} cm
          </p>
          <p className="detail-name">Size</p>
        </div>
        <div className="price">
          <p className="detail-number">₱{parcel.price}</p>
          <p className="detail-name">Price</p>
        </div>
      </div>
    </div>
  );
}

export default ParcelTransit;
