import { useState } from "react";
import "./AdminParcelBody.css";
import AdminOverlay from "../AdminOverlay";
import AdminEditParcelOverlay from "../AdminEditParcelOverlay";
import { generateID } from "../AdminService";
import iconSearch from "/src/assets/icons/icon-search.svg";
import iconPlus from "/src/assets/icons/icon-plus.svg";
import iconEdit from "/src/assets/icons/icon-edit.svg";
import iconX from "/src/assets/icons/icon-x.svg";

function AdminParcelBody({
  parcelDetails,
  addParcel,
  editParcel,
  deleteParcel,
}) {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [editOverlayVisible, setEditOverlayVisible] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [searchParcel, setSearchParcel] = useState("");

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const toggleEditOverlay = () => {
    setEditOverlayVisible(!editOverlayVisible);
  };

  return (
    <div className="admin-body">
      <div className="AdminParcelSearchFrame">
        <img src={iconSearch} alt="icon-search" className="ParcelSearchIcon" />
        <input
          type="text"
          className="AdminParcelSearchInput"
          placeholder="Search parcels"
          onChange={(e) => setSearchParcel(e.target.value)}
        />
        <button className="AdminParcelSearchBtn">Search</button>
        <div
          className="AddParcelFrame"
          onClick={toggleOverlay}
          style={{ cursor: "pointer", opacity: "90%" }}
        >
          <img src={iconPlus} alt="Plus Icon" className="ParcelPlusIcon" />
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
        <table className="AdminParcelTableContent">
          <tbody>
            <tr className="AdminParcelHeader">
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
                            src={iconEdit}
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
                      <td>{parcelDetails.weight} kg</td>
                      <td>
                        {parcelDetails.length}
                        <img src={iconX} className="x-icon" alt="" />
                        {parcelDetails.width}
                        <img src={iconX} className="x-icon" alt="" />
                        {parcelDetails.height} cm
                      </td>
                      <td>₱{parcelDetails.price}</td>
                      <td>{parcelDetails.shipper}</td>
                      <td>{parcelDetails.courier}</td>
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

export default AdminParcelBody;
