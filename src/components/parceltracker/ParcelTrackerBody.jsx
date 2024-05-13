import React from "react";
import "./ParcelTrackerBody.css";

function ParcelTrackerBody({ parcel }) {
  return (
    <div className="ParcelTrackerBody">
      {/* FRAME 1 */}
      <div className="frame1">
        <div className="city">
          <p>{parcel.deliveredFrom}</p>
          <img src="/src/assets/icons/icon-arrow-right.svg" alt="Arrow" />
          <p>{parcel.deliveredTo}</p>
        </div>
        <div className="refNumber">{parcel.id}</div>
      </div>

      {/* FRAME 2 */}
      <div className="frame2">
        <div className="order">
          <img
            src="/src/assets/icons/circle-active-order-created.svg"
            alt="circle-active-order-created"
            className="iconstatus"
          />
          <p className="active">Order Created</p>
        </div>

        <hr
          className={
            parcel.status !== "[1] Order Created"
              ? "line-status-active"
              : "line-status-idle"
          }
        />
        <div className="pickup">
          <img
            src={
              parcel.status !== "[1] Order Created"
                ? "/src/assets/icons/circle-active-picked-up.svg"
                : "/src/assets/icons/circle-idle-picked-up.svg"
            }
            alt="circle-idle-order-created"
            className="iconstatus"
          />
          <p
            className={
              parcel.status !== "[1] Order Created" ? "active" : "idle"
            }
          >
            Picked Up
          </p>
        </div>

        <hr
          className={
            parcel.status !== "[1] Order Created" &&
            parcel.status !== "[2] Picked Up"
              ? "line-status-active"
              : "line-status-idle"
          }
        />
        <div className="sorting">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up"
                ? "/src/assets/icons/circle-active-sorting.svg"
                : "/src/assets/icons/circle-idle-sorting.svg"
            }
            alt="circle-active-order-created"
            className="iconstatus"
          />
          <p
            className={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up"
                ? "active"
                : "idle"
            }
          >
            Sorting
          </p>
        </div>

        <hr
          className={
            parcel.status !== "[1] Order Created" &&
            parcel.status !== "[2] Picked Up" &&
            parcel.status !== "[3] Sorting"
              ? "line-status-active"
              : "line-status-idle"
          }
        />
        <div className="courier">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting"
                ? "/src/assets/icons/circle-active-courier-delivery.svg"
                : "/src/assets/icons/circle-idle-courier-delivery.svg"
            }
            alt="circle-active-order-created"
            className="iconstatus"
          />
          <p
            className={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting"
                ? "active"
                : "idle"
            }
          >
            Courier Delivery
          </p>
        </div>

        <hr
          className={
            parcel.status !== "[1] Order Created" &&
            parcel.status !== "[2] Picked Up" &&
            parcel.status !== "[3] Sorting" &&
            parcel.status !== "[4] Courier Delivery"
              ? "line-status-active"
              : "line-status-idle"
          }
        />
        <div className="delivered">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting" &&
              parcel.status !== "[4] Courier Delivery"
                ? "/src/assets/icons/circle-active-delivered.svg"
                : "/src/assets/icons/circle-idle-delivered.svg"
            }
            alt="circle-active-order-created"
            className="iconstatus"
          />
          <p
            className={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting" &&
              parcel.status !== "[4] Courier Delivery"
                ? "active"
                : "idle"
            }
          >
            Delivered
          </p>
        </div>
      </div>

      {/* FRAME 3 */}
      <div className="frame3">
        <div className="container">
          <div className="left">
            <div className="date">09 April 2024</div>
            <div className="time">09:33</div>
          </div>
          <div className="middle">
            <img
              src="/src/assets/icons/icon-circle-check.svg"
              alt="icon-circle-check"
            />
            <div className="vertical-line"></div>
          </div>
          <div className="right">
            <div className="description">
              [SOC 4] Your parcel is being transported to [SOC 5]
            </div>
          </div>
        </div>

        <div className="container-placeholder-1">
          <div className="left">
            <div className="date">09 April 2024</div>
            <div className="time">01:47</div>
          </div>
          <div className="middle">
            <img src="/src/assets/icons/icon-circle.svg" alt="icon-circle" />
            <div className="vertical-line"></div>
          </div>
          <div className="right">
            <div className="description-1">
              [SOC 4] Your parcel has been received by sorting center
            </div>
          </div>
        </div>

        <div className="container-placeholder-2">
          <div className="left">
            <div className="date">08 April 2024</div>
            <div className="time">18:34</div>
          </div>
          <div className="middle">
            <img src="/src/assets/icons/icon-circle.svg" alt="icon-circle" />
            <div className="vertical-line"></div>
          </div>
          <div className="right">
            <div className="description-2">
              [Paranaque DC] Your parcel has been picked up
            </div>
          </div>
        </div>

        <div className="container-placeholder-3">
          <div className="left">
            <div className="date">08 April 2024</div>
            <div className="time">18:09</div>
          </div>
          <div className="middle">
            <img src="/src/assets/icons/icon-circle.svg" alt="icon-circle" />
            <div className="vertical-line"></div>
          </div>
          <div className="right">
            <div className="description-3">
              [SOC 4] Your parcel has been received by sorting center
            </div>
          </div>
        </div>

        <div className="container-placeholder-4">
          <div className="left">
            <div className="date">07 April 2024</div>
            <div className="time">22:59</div>
          </div>
          <div className="middle">
            <img src="/src/assets/icons/icon-circle.svg" alt="icon-circle" />
          </div>
          <div className="right">
            <div className="description-4">
              [SOC 4] Your parcel has been received by sorting center
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelTrackerBody;
