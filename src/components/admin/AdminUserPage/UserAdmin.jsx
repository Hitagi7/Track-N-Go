import React from 'react'
import './UserAdmin.css'
import '../AdminPage.css'
import AdminSideBar from '../AdminSideBar.jsx'
import AdminUserBody from '../AdminUserPage/AdminUserBody.jsx'

function UserAdmin() {
    return (
        <div className="admin-homepage">
            <div className="admin-side-navigation">
                <AdminSideBar />
            </div>
            <div className="admin-right">
                <p className="a-user-title">Users - Admin View</p>
                <div className="admin-body">
                    <AdminUserBody />
                </div>
            </div>
        </div>
    );
}

export default UserAdmin;
