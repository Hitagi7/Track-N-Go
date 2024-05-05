import React, { useState } from "react";
import "./AdminParcelBody.css";
import AdminOverlay from "../AdminOverlay";

function AdminParcelBody({ parcelDetails, addParcel, generateID }) {
  const [overlayVisible, setOverlayVisible] = useState(false);

  // Generate Parcel ID
  function generateID() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i <= 13; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div className="admin-body">
      <div className="AdminParcelSearchFrame">
        <img
          src="/src/assets/icons/icon-search.svg"
          alt="icon-search"
          className="ParcelSearchIcon"
        />
        <input
          type="text"
          className="AdminParcelSearchInput"
          placeholder="Search parcels"
        />
        <button className="AdminParcelSearchBtn">Search</button>
        <div
          className="AddParcelFrame"
          onClick={toggleOverlay}
          style={{ cursor: "pointer", opacity: "90%" }}
        >
          <img
            src="/src/assets/icons/icon-plus.svg"
            alt="Plus Icon"
            class="ParcelPlusIcon"
          />
          <p className="AddParcelText">Add new Parcel</p>
        </div>
        <AdminOverlay
          visible={overlayVisible}
          toggleVisible={toggleOverlay}
          addParcel={addParcel}
          generateID={generateID()}
        />
      </div>
      <div className="AdminParcelTableFrame">
        <table class="AdminParcelTableContent">
          <tr class="AdminParcelHeader">
            <th> </th>
            <th>TRACKING ID</th>
            <th>WEIGHT</th>
            <th>SIZE</th>
            <th>PRICE</th>
            <th>SHIPPER</th>
            <th>COURIER</th>
            <th>STATUS</th>
          </tr>
          {parcelDetails && ( // Check if parcel exists
            <>
              {parcelDetails.map((parcelDetails) => {
                return (
                  <tr class="AdminParcelTable">
                    <td>
                      <img
                        src="src/assets/icons/icon-edit.svg"
                        alt="edit"
                        class="ParcelEditIcon"
                      />
                    </td>
                    <td>{parcelDetails.id}</td>
                    <td>{parcelDetails.weight} kg</td>
                    <td>
                      {parcelDetails.length}
                      <img
                        src="src/assets/icons/icon-x.svg"
                        class="x-icon"
                        alt=""
                      />
                      {parcelDetails.width}
                      <img
                        src="src/assets/icons/icon-x.svg"
                        class="x-icon"
                        alt=""
                      />
                      {parcelDetails.height} cm
                    </td>
                    <td>₱{parcelDetails.price}</td>
                    <td>{parcelDetails.shipper}</td>
                    <td>{parcelDetails.courier}</td>
                    <td>{parcelDetails.status}</td>
                  </tr>
                );
              })}
            </>
          )}
        </table>
      </div>
    </div>
  );
}

export default AdminParcelBody;
