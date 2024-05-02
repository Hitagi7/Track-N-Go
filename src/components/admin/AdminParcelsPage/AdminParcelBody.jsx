import React from 'react'
import './AdminParcelBody.css'

function AdminParcelBody() {
    return (
        <div className="admin-body">
            <div className='AdminParcelSearchFrame'>
                <img
                src="/src/assets/icons/icon-search.svg"
                alt="icon-search"
                className="ParcelSearchIcon"
                />
                <input
                type="text"
                className="AdminParcelSearchInput"
                placeholder="Search Parcel"
                />
                <button className="AdminParcelSearchBtn">Search</button>
                <div className='AddParcelFrame'>
                    <img src="/src/assets/icons/icon-plus.svg" alt="Plus Icon" class="ParcelPlusIcon"/> 
                    <p className='AddParcelText'>Add new Parcel</p>
                </div>
            </div>
            <div className='AdminParcelTableFrame'>
                <table class="AdminParcelTableContent">
                    <tr class="AdminParcelHeader">
                        <th> </th>
                        <th>TRACKING ID</th>
                        <th>WEIGHT</th>
                        <th>SIZE</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                        <th>SHIPPER</th>
                        <th>COURIER</th>
                    </tr>
                    <tr class="AdminParcelTable">
                        <td><img src="src/assets/icons/icon-edit.svg" alt="edit" class="ParcelEditIcon"/></td>
                        <td>NDJ297ADM1EL</td>
                        <td>2.1 kg</td>
                        <td>14 x 14 x 2 cm</td>
                        <td>₱178.00</td>
                        <td>Nat’l Bookstore</td>
                        <td>J&T</td>
                        <td>In transit</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminParcelBody;
