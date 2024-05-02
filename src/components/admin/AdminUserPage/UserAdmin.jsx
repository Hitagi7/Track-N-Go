import React from 'react'
import './UserAdmin.css'
import './AdminPage.css'
import AdminSideBar from '../AdminSideBar.jsx'
import AdminUserBody from './AdminUserBody.jsx'

function UserAdmin() {
    return (
        <div className="admin-homepage">
            <div className="admin-side-navigation admin-user-side-navigation">
                <AdminSideBar />
            </div>
            <div className="admin-user-body">
                <AdminUserBody />
            </div>
        </div>
    );
}

export default UserAdmin;
