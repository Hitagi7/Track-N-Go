import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ParcelTrackerPage from './components/pages/ParcelTrackerPage.jsx';
import DashboardPage from './components/pages/DashboardPage.jsx';
import SettingsPage from './components/pages/SettingsPage.jsx';
import ProfilePage from './components/pages/ProfilePage.jsx';
import ParcelHistoryPage from './components/pages/ParcelHistoryPage.jsx';
import AdminUserPage from './components/pages/AdminUserPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/parceltrackerpage",
        element: <ParcelTrackerPage />,
    },
    {
      path: "/dashboardpage",
      element: <DashboardPage />,
    },
    {
      path: "/settingspage",
      element: <SettingsPage />,
    },
    {
      path: "/profilepage",
      element: <ProfilePage />,
    },
    {
      path: "/parcelhistorypage",
      element: <ParcelHistoryPage />,
    },
    {
      path: "/adminuserpage",
      element: <AdminUserPage />,
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)