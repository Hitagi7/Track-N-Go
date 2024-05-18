import { useState, useEffect } from "react";
import "./AdminTrackingBody.css";
import AdminOverlay from "../AdminOverlay";
import AdminEditParcelOverlay from "../AdminEditParcelOverlay";
import ParcelsAdmin from "../AdminParcelsPage/ParcelsAdmin";
import { getParcels } from "../AdminService";

function AdminTrackingBody({ parcelDetails, editParcel, deleteParcel }) {
  const [editOverlayVisible, setEditOverlayVisible] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [searchParcel, setSearchParcel] = useState("");

  const toggleEditOverlay = () => {
    setEditOverlayVisible(!editOverlayVisible);
  };

  function getMonthNumber(monthName) {
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
  }

  function addLeadingZero(number) {
    return number < 10 ? "0" + number : number.toString();
  }

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
          onChange={(e) => setSearchParcel(e.target.value)}
        />
        <button className="AdminTrackingSearchBtn">Search</button>
      </div>
      <div className="AdminTrackingTableFrame">
        <table className="AdminTrackingTableContent">
          <tbody>
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
                {parcelDetails
                  .filter((parcel) => {
                    const searchText = searchParcel.toLowerCase();
                    return parcel.id.toLowerCase().includes(searchText);
                  })
                  .map((parcelDetails) => (
                    <tr className="AdminParcelTable" key={parcelDetails.id}>
                      <td>
                        <button
                          className="a-edit-parcel-button"
                          onClick={() => {
                            toggleEditOverlay();
                            setCurrentId(parcelDetails.id);
                          }}
                        >
                          <img
                            src="src/assets/icons/icon-edit.svg"
                            alt="edit"
                            className="ParcelEditIcon"
                          />
                        </button>
                        {currentId === parcelDetails.id && (
                          <AdminEditParcelOverlay
                            visible={editOverlayVisible}
                            toggleVisible={toggleEditOverlay}
                            parcelDetails={parcelDetails}
                            editParcel={editParcel}
                            deleteParcel={deleteParcel}
                          />
                        )}
                      </td>
                      <td>{parcelDetails.id}</td>
                      <td>
                        {parcelDetails.shippedYear}/
                        {getMonthNumber(parcelDetails.shippedMonth)}/
                        {addLeadingZero(parcelDetails.shippedDay)}
                      </td>
                      <td>
                        {parcelDetails.deliveryYear}/
                        {getMonthNumber(parcelDetails.deliveryMonth)}/
                        {addLeadingZero(parcelDetails.deliveryDay)}
                      </td>
                      <td>{parcelDetails.deliveredFrom}</td>
                      <td>{parcelDetails.deliveredTo}</td>
                      <td>{parcelDetails.status}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTrackingBody;
