import React from 'react'
import './AdminSideBar.css'
import './AdminUserPage/AdminUserPage.css'

function AdminSideBar() {
    return (
        <div className="a-side-navigation">
            <img src="src/assets/TNG Logo V2.png" alt="" class="a-tng-logo"/>
            <div className="a-navigation">
                <button className="a-users a-navigation-item">
                    <p class="font-16 font-semibold">Users</p>
                </button>
                <button className="a-parcels a-navigation-item">
                    <p class="font-16 font-semibold">Parcels</p>
                </button>
                <button className="a-tracking a-navigation-item">
                    <p class="font-16 font-semibold">Tracking</p>
                </button>
            </div>
            <div className="a-profile-button">
                <img src="src/assets/icons/profile-placeholder.svg" alt="" class="a-profile-placeholder" />
                <div className="a-profile-label">
                    <p class="font-16 font-semibold">Admin</p>
                    <p class="font-14 font-light">Admin Account</p>
                </div>
            </div>

        </div>
    );
}

export default AdminSideBar;
