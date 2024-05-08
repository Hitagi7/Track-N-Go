// Helper Function
import axios from "axios";

// Read
export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Create
export const createUser = async (newUser) => {
  try {
    await axios.post("http://localhost:3001/users", newUser);
    // Refresh users after creating a new one
    return getUsers();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Update
export const updateUser = async (userId, updatedUserData) => {
  try {
    await axios.put(`http://localhost:3001/users/${userId}`, updatedUserData);
    // Refresh users after updating
    return getUsers();
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete
export const deleteUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    // Refresh users after deleting
    return getUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const getParcels = async () => {
  try {
    const response = await axios.get("http://localhost:3001/parcels");
    return response.data;
  } catch (error) {
    console.error("Error fetching parcels:", error);
    throw error;
  }
};

export const createParcel = async (newParcel) => {
  try {
    await axios.post("http://localhost:3001/parcels", newParcel);
    // Refresh parcels after creating a new one
    return getParcels();
  } catch (error) {
    console.error("Error creating parcel:", error);
    throw error;
  }
};

export const updateParcel = async (parcelId, updatedParcelData) => {
  try {
    await axios.put(
      `http://localhost:3001/parcels/${parcelId}`,
      updatedParcelData
    );
    // Refresh parcels after updating
    return getParcels();
  } catch (error) {
    console.error("Error updating parcel:", error);
    throw error;
  }
};

export const deleteParcel = async (parcelId) => {
  try {
    await axios.delete(`http://localhost:3001/parcels/${parcelId}`);
    // Refresh parcels after deleting
    return getParcels();
  } catch (error) {
    console.error("Error deleting parcel:", error);
    throw error;
  }
};
