import { db, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, setDoc } from "../../firebase";

// Helper Function
import axios from "axios";

// // Read
// export const getUsers = async () => {
//   try {
//     const response = await axios.get("http://localhost:3001/users");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };

// // Create
// export const createUser = async (newUser) => {
//   try {
//     await axios.post("http://localhost:3001/users", newUser);
//     // Refresh users after creating a new one
//     return getUsers();
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error;
//   }
// };

// // Update
// export const updateUser = async (userId, updatedUserData) => {
//   try {
//     await axios.put(`http://localhost:3001/users/${userId}`, updatedUserData);
//     // Refresh users after updating
//     return getUsers();
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error;
//   }
// };

// // Delete
// export const deleteUser = async (userId) => {
//   try {
//     await axios.delete(`http://localhost:3001/users/${userId}`);
//     // Refresh users after deleting
//     return getUsers();
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     throw error;
//   }
// };

export const getParcels = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Parcels"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching parcels:", error);
    throw error;
  }
};

export const createParcel = async (newParcel) => {
  try {
    const parcelDocRef = doc(collection(db, "Parcels"));
    await setDoc(parcelDocRef, { ...newParcel, id: parcelDocRef.id });
    return getParcels();
  } catch (error) {
    console.error("Error creating parcel:", error);
    throw error;
  }
};

export const updateParcel = async (parcelId, updatedParcelData) => {
  try {
    const parcelDocRef = doc(db, "Parcels", parcelId);
    await updateDoc(parcelDocRef, updatedParcelData);
    return getParcels();
  } catch (error) {
    console.error("Error updating parcel:", error);
    throw error;
  }
};

export const deleteParcel = async (parcelId) => {
  try {
    const parcelDocRef = doc(db, "Parcels", parcelId);
    await deleteDoc(parcelDocRef);
    return getParcels();
  } catch (error) {
    console.error("Error deleting parcel:", error);
    throw error;
  }
};

// export const getUserParcels = async (user) => {
//   try {
//     const response = await axios.get(`http://localhost:3001/${user}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching parcels:", error);
//     throw error;
//   }
// };

// export const createUserParcel = async (newParcel, user) => {
//   try {
//     await axios.post(`http://localhost:3001/${user}`, newParcel);
//     // Refresh parcels after creating a new one
//     return getUserParcels(user);
//   } catch (error) {
//     console.error("Error creating parcel:", error);
//     throw error;
//   }
// };

// export const updateUserParcel = async (parcelId, updatedParcelData, user) => {
//   try {
//     await axios.put(
//       `http://localhost:3001/${user}/${parcelId}`,
//       updatedParcelData
//     );
//     // Refresh parcels after updating
//     return getUserParcels(user);
//   } catch (error) {
//     console.error("Error updating parcel:", error);
//     throw error;
//   }
// };

// export const deleteUserParcel = async (parcelId, user) => {
//   try {
//     await axios.delete(`http://localhost:3001${user}/${parcelId}`);
//     // Refresh parcels after deleting
//     return getUserParcels(user);
//   } catch (error) {
//     console.error("Error deleting parcel:", error);
//     throw error;
//   }
// };
