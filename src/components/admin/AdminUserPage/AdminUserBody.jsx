import React, { useState, useEffect } from "react";
import "./AdminUserBody.css";
import { auth, db } from "./../../../firebase.js";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

function AdminUserBody() {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "TNG Users"),
      (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched users:", userList); // Log fetched users
        setUsers(userList);
      },
      (error) => {
        console.error("Error fetching users:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const userToDelete = users.find((user) => user.id === userId);
      if (userToDelete) {
        // Delete user from Firestore
        await deleteDoc(doc(db, "TNG Users", userId));

        // Initialize Firebase Auth and get the user object
        const userAuth = getAuth();
        const user = await userAuth.getUser(userToDelete.uid);

        if (user) {
          // Delete user from Firebase Authentication
          await deleteUser(user);
          console.log(`User ${userId} deleted successfully`);
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="admin-body">
      <div className="a-text-field">
        <img
          src="src/assets/icons/icon-search.svg"
          alt=""
          className="a-search-icon"
        />
        <input
          type="text"
          placeholder="Search users"
          className="a-search-field"
        />
        <button className="a-search-button">
          <p className="a-search-label">Search</p>
        </button>
      </div>
      <div className="a-user-table">
        <table className="a-user-table-content">
          <thead>
            <tr className="a-user-table-header">
              <th></th>
              <th>ID</th>
              <th>USERNAME</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL ADDRESS</th>
              <th>PASSWORD</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td></td>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>*******</td> {/* Hide password */}
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    <img
                      src="src/assets/icons/icon-trash.svg"
                      alt=""
                      className="a-icon-trash"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserBody;
