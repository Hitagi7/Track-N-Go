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
import AdminHomePage from './components/pages/AdminHomePage.jsx';
import ParcelsAdmin from './components/admin/AdminParcelsPage/ParcelsAdmin.jsx';
import TrackingAdmin from './components/admin/AdminTrackingPage/TrackingAdmin.jsx';

const router = createBrowserRouter([
    { 
        path: "/track-n-go",
        element: <App/>,
    },
    {
        path: "/track-n-go/parceltrackerpage",
        element: <ParcelTrackerPage />,
    },
    {
      path: "/track-n-go/dashboardpage",
      element: <DashboardPage />,
    },
    {
      path: "/track-n-go/settingspage",
      element: <SettingsPage />,
    },
    {
      path: "/track-n-go/profilepage",
      element: <ProfilePage />,
    },
    {
      path: "/track-n-go/parcelhistorypage",
      element: <ParcelHistoryPage />,
    },
    {
      path: "/track-n-go/adminhomepage",
      element: <AdminHomePage />,
    },
    {
      path: "/track-n-go/parcelsadmin",
      element: <ParcelsAdmin />,
    },
    {
      path: "/track-n-go/trackingadmin",
      element: <TrackingAdmin />,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)