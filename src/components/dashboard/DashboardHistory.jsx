import React from 'react'
import './DashboardHistory.css'
import { Link } from 'react-router-dom';

function DashboardHistory() {
  return (
    <div className="DashboardHistory">
        <p className="history">Your recent deliveries</p>
        <div className="DeliveryInfo">
            <div className="Frame11">
                <p className="deliverydate">Delivery Date</p>
                <p className="shipper1">Shipper</p>
                <p className="courier1">Courier</p>
                <p className="parcelnum">Parcel Number</p>
                <p className="status1">Status</p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.29</p>
                <p className="shipper2">Nat'l Book Store</p>
                <p className="courier2">J&T</p>
                <p className="parcelnum2">NDJ297ADM1EL</p>
                <div className="Frame13">
                    <p className="status2">IN TRANSIT</p>
                </div>
                <p className="details2">View Details </p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.28</p>
                <p className="shipper2">Keeban Supplies</p>
                <p className="courier2">SPX</p>
                <p className="parcelnum2">VNJ2JVI30S033</p>
                <div className="Frame14">
                    <p className="status3">DELIVERED</p>
                </div>
                <p className="details2">View Details </p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.27</p>
                <p className="shipper2">Tinong's</p>
                <p className="courier2">SPX</p>
                <p className="parcelnum2">NJSVD920N01A</p>
                <div className="Frame14">
                    <p className="status3">DELIVERED</p>
                </div>
                <p className="details2">View Details </p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.27</p>
                <p className="shipper2">Lovito</p>
                <p className="courier2">SPX</p>
                <p className="parcelnum2">D2CJKN3L1KVB3</p>
                <div className="Frame14">
                    <p className="status3">DELIVERED</p>
                </div>
                <p className="details2">View Details </p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.27</p>
                <p className="shipper2">Rhat’s Shop</p>
                <p className="courier2">Amazon</p>
                <p className="parcelnum2">US2N4JL3NCML</p>
                <div className="Frame14">
                    <p className="status3">DELIVERED</p>
                </div>
                <p className="details2">View Details </p>
            </div>
            <hr className='hr11' />
            <div className="Frame12">
                <p className="deliverydate2">2024.03.27</p>
                <p className="shipper2">No Brand</p>
                <p className="courier2">J&T</p>
                <p className="parcelnum2">NJDKF1L3L0S98</p>
                <div className="Frame14">
                    <p className="status3">DELIVERED</p>
                </div>
                <p className="details2">View Details </p>
            </div>
        </div>
    </div>
  )
}

export default DashboardHistory