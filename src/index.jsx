import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ParcelTracker from './components/pages/ParcelTracker.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/ParcelTracker",
        element: <ParcelTracker/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)