import React from "react";
import "./ParcelTrackerBody.css";

function ParcelTrackerBody({ parcel }) {
  const addLeadingZero = (number) => {
    return number < 10 ? "0" + number : number.toString();
  };

  const deliveredParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 8)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={"/src/assets/icons/icon-circle-check.svg"}
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">Your Parcel Has Been Delivered</div>
        </div>
      </div>
    );
  };

  const deliveredParcel1 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 8)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={"/src/assets/icons/icon-circle.svg"}
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">Your Parcel Is In Transit</div>
        </div>
      </div>
    );
  };

  const courierDeliveryParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 6)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting" &&
              parcel.status === "[4] Courier Delivery"
                ? "/src/assets/icons/icon-circle-check.svg"
                : "/src/assets/icons/icon-circle.svg"
            }
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
    );
  };

  const courierDeliveryParcel1 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 6)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={"/src/assets/icons/icon-circle.svg"}
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [SOC 4] Your parcel has been received by sorting center
          </div>
        </div>
      </div>
    );
  };

  const sortingParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 4)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status === "[3] Sorting"
                ? "/src/assets/icons/icon-circle-check.svg"
                : "/src/assets/icons/icon-circle.svg"
            }
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
    );
  };

  const sortingParcel1 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 4)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={"/src/assets/icons/icon-circle.svg"}
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [SOC 4] Your parcel has been received by sorting center
          </div>
        </div>
      </div>
    );
  };

  const pickedUpParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 2)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status === "[2] Picked Up"
                ? "/src/assets/icons/icon-circle-check.svg"
                : "/src/assets/icons/icon-circle.svg"
            }
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [{parcel.deliveredFrom} DC] Your parcel has been picked up
          </div>
        </div>
      </div>
    );
  };

  const pickedUpParcel1 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {addLeadingZero(parseInt(parcel.shippedDay) + 2)}{" "}
            {parcel.shippedMonth} {parcel.shippedYear}
          </div>
        </div>
        <div className="middle">
          <img
            src={"/src/assets/icons/icon-circle.svg"}
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [CDROP - EXPRESSPAY - WBUNDANG BILLS PAYMENT AND REMITTANCE
            CENTER]Your parcel has been received by drop off point
          </div>
        </div>
      </div>
    );
  };

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

      {/*Might be Similar to the one on top */}
      {/* FRAME 3 */}
      <div className="frame3">
        {/* Delivered */}
        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" &&
          parcel.status !== "[3] Sorting" &&
          parcel.status !== "[4] Courier Delivery" && (
            <div className="container">{deliveredParcel2()}</div>
          )}
        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" &&
          parcel.status !== "[3] Sorting" &&
          parcel.status !== "[4] Courier Delivery" && (
            <div className="container">{deliveredParcel1()}</div>
          )}

        {/* Courier Delivery */}
        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" &&
          parcel.status !== "[3] Sorting" && (
            <div className="container">{courierDeliveryParcel2()}</div>
          )}

        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" &&
          parcel.status !== "[3] Sorting" && (
            <div className="container">{courierDeliveryParcel1()}</div>
          )}

        {/* Sorting */}
        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" && (
            <div className="container">{sortingParcel2()}</div>
          )}
        {parcel.status !== "[1] Order Created" &&
          parcel.status !== "[2] Picked Up" && (
            <div className="container">{sortingParcel1()}</div>
          )}
        {/* Picked Up */}
        {parcel.status !== "[1] Order Created" && (
          <div className="container">{pickedUpParcel2()}</div>
        )}
        {parcel.status !== "[1] Order Created" && (
          <div className="container">{pickedUpParcel1()}</div>
        )}

        {/* Order Created */}
        <div className="container">
          <div className="left">
            <div className="date">
              {addLeadingZero(parcel.shippedDay)} {parcel.shippedMonth}{" "}
              {parcel.shippedYear}
            </div>
          </div>
          <div className="middle">
            <img
              src={
                parcel.status !== "[1] Order Created"
                  ? "/src/assets/icons/icon-circle.svg"
                  : "/src/assets/icons/icon-circle-check.svg"
              }
              alt="icon-circle-check"
            />
          </div>
          <div className="right">
            <div className="description">Order has been created</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelTrackerBody;
