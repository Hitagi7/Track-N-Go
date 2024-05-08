import { useState } from "react";
import "./AdminTrackingBody.css";
import AdminOverlay from "../AdminOverlay";
import AdminEditParcelOverlay from "../AdminEditParcelOverlay";
import ParcelsAdmin from "../AdminParcelsPage/ParcelsAdmin";

function AdminTrackingBody({ parcelDetails }) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [editOverlayVisible, setEditOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const toggleEditOverlay = () => {
    setEditOverlayVisible(!editOverlayVisible);
  };

  return (
    <div className="admin-body">
      <div className="AdminTrackingSearchFrame">
        <img
          src="/src/assets/icons/icon-search.svg"
          alt="icon-search"
          className="TrackingSearchIcon"
        />
        <input
          type="text"
          className="AdminTrackingSearchInput"
          placeholder="Search parcels"
        />
        <button className="AdminTrackingSearchBtn">Search</button>
      </div>
      <div className="AdminTrackingTableFrame">
        <table className="AdminTrackingTableContent">
          <tr className="AdminTrackingHeader">
            <th> </th>
            <th>TRACKING ID</th>
            <th>SHIPPED OUT</th>
            <th>DELIVERY DATE</th>
            <th>DELIVERED FROM</th>
            <th>DELIVERED TO</th>
            <th>STATUS</th>
          </tr>
          {parcelDetails && ( // Check if parcel exists
            <>
              {parcelDetails.map((parcelDetails) => {
                return (
                  <tr className="AdminParcelTable" key={parcelDetails.id}>
                    <td>
                      <button
                        className="a-edit-parcel-button"
                        onClick={toggleEditOverlay}
                      >
                        <img
                          src="src/assets/icons/icon-edit.svg"
                          alt="edit"
                          className="ParcelEditIcon"
                        />
                      </button>
                      <AdminEditParcelOverlay
                        visible={editOverlayVisible}
                        toggleVisible={toggleEditOverlay}
                      />
                    </td>
                    <td>{parcelDetails.id}</td>
                    <td>
                      {parcelDetails.shippedMonth} {parcelDetails.shippedDay},{" "}
                      {parcelDetails.shippedYear}
                    </td>
                    <td>
                      {parcelDetails.deliveryMonth} {parcelDetails.deliveryDay},{" "}
                      {parcelDetails.deliveryYear}
                    </td>
                    <td>{parcelDetails.deliveredFrom}</td>
                    <td>{parcelDetails.deliveredTo}</td>
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

export default AdminTrackingBody;
