import React from "react";
import "./UserAdmin.css";
import "../AdminPage.css";
import AdminSideBar from "../AdminSideBar";
import AdminOverlay from "../AdminOverlay.jsx";
import AdminUserBody from "../AdminUserPage/AdminUserBody.jsx";

function UserAdmin() {
  return (
    <div className="admin-homepage">
      <div className="admin-side-navigation">
        <AdminSideBar />
        <AdminOverlay />
      </div>
      <div className="admin-right">
        <p className="a-user-title">Users - Admin View</p>
        <AdminUserBody />
      </div>
    </div>
  );
}

export default UserAdmin;
