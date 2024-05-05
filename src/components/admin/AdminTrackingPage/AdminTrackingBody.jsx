import { useState } from 'react';
import React from 'react'
import './AdminTrackingBody.css'
import AdminOverlay from '../AdminOverlay'

function AdminTrackingBody() {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };

    return (
        <div className="admin-body">
            <div className='AdminTrackingSearchFrame'>
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
                <div className='AddTrackingFrame' onClick={toggleOverlay}>
                    <img src="/src/assets/icons/icon-plus.svg" alt="Plus Icon" class="TrackingPlusIcon"/> 
                    <p className='AddTrackingText'>Add new Parcel</p>
                </div>
                <AdminOverlay visible={overlayVisible} toggleVisible={toggleOverlay} />
            </div>
            <div className='AdminTrackingTableFrame'>
                <table class="AdminTrackingTableContent">
                    <tr class="AdminTrackingHeader">
                        <th> </th>
                        <th>TRACKING ID</th>
                        <th>SHIPPED OUT</th>
                        <th>DELIVERY DATE</th>
                        <th>DELIVERED FROM</th>
                        <th>DELIVERED TO</th>
                        <th>STATUS</th>
                    </tr>
                    <tr class="AdminTrackingTable">
                        <td><img src="src/assets/icons/icon-edit.svg" alt="edit" class="ParcelEditIcon"/></td>
                        <td>NDJ297ADM1EL</td>
                        <td>2024/03/14</td>
                        <td>2024/03/21</td>
                        <td>Laguna Del Norte, PH</td>
                        <td>Cebu City, PH</td>
                        <td>[2] Picked Up</td>
                    </tr>
                </table>
            </div>
            
        </div>
    );
}

export default AdminTrackingBody;
