import React from 'react'
// import './Dashboard.css'

function AdminSideBar() {
    return (
        <div className="admin-side-navigation">
            <img src="src/assets/TNG Logo V2.png" alt="" />
            <div className="a-navigation">
                <button className="a-users">
                    <p class="font-16 font-semibold">Users</p>
                </button>
                <button className="a-parcels">
                    <p>Parcels</p>
                </button>
                <button className="a-tracking">
                    <p>Tracking</p>
                </button>
            </div>
            <div className="a-profile-button">
                <img src="src/assets/icons/profile-placeholder.svg" alt="" />
                <div className="profile-label">
                    <p>Admin</p>
                    <p>Admin Account</p>
                </div>
            </div>

        </div>
    );
}

export default AdminSideBar;
