import React from "react";
import "./ParcelTrackerBody.css";
import iconCircleCheck from "/track-n-go/src/assets/icons/icon-circle-check.svg";
import iconCircle from "/track-n-go/src/assets/icons/icon-circle.svg";
import arrowRightIcon from "/track-n-go/src/assets/icons/icon-arrow-right.svg";
import circleActiveOrderCreated from "/track-n-go/src/assets/icons/circle-active-order-created.svg";
import circleActivePickedUp from "/track-n-go/src/assets/icons/circle-active-picked-up.svg";
import circleIdlePickedUp from "/track-n-go/src/assets/icons/circle-idle-picked-up.svg";
import circleActiveSorting from "/track-n-go/src/assets/icons/circle-active-sorting.svg";
import circleIdleSorting from "/track-n-go/src/assets/icons/circle-idle-sorting.svg";
import circleActiveCourierDelivery from "/track-n-go/src/assets/icons/circle-active-courier-delivery.svg";
import circleIdleCourierDelivery from "/track-n-go/src/assets/icons/circle-idle-courier-delivery.svg";
import circleActiveDelivered from "/track-n-go/src/assets/icons/circle-active-delivered.svg";
import circleIdleDelivered from "/track-n-go/src/assets/icons/circle-idle-delivered.svg";

function ParcelTrackerBody({ parcel }) {
  const adjustDate = (monthStr, dayStr, yearStr) => {
    const monthNames = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    // Normalize month string
    let normalizedMonthStr =
      monthStr.charAt(0).toUpperCase() + monthStr.slice(1).toLowerCase();

    let month = monthNames[normalizedMonthStr]; // Use normalized month string

    if (month === undefined) {
      throw new Error("Invalid month string provided.");
    }

    let day = parseInt(dayStr);
    let year = parseInt(yearStr);

    const monthDays = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    // Check for leap year and adjust February days
    if (
      month === 2 &&
      year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0)
    ) {
      monthDays[2] = 29;
    }

    // Handle cases where day exceeds the maximum days in the month
    if (day > monthDays[month]) {
      // Move to the next month
      day -= monthDays[month]; // Limit day to the new month's max
      month += 1;

      // Handle year overflow (December to January)
      if (month === 13) {
        month = 1;
        year += 1;
      }
    }

    // Return adjusted date as a formatted string
    const adjustedMonth = Object.keys(monthNames).find(
      (key) => monthNames[key] === month
    );
    return `${day.toString().padStart(2, "0")} ${adjustedMonth} ${year}`;
  };

  const deliveredParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 8,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img src={iconCircleCheck} alt="icon-circle-check" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">Your parcel has been delivered.</div>
        </div>
      </div>
    );
  };

  const deliveredParcel1 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 8,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img src={iconCircle} alt="icon-circle" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [{parcel.deliveredTo} DC] Your parcel out for delivery.
          </div>
        </div>
      </div>
    );
  };

  const courierDeliveryParcel2 = () => {
    return (
      <div className="container">
        <div className="left">
          <div className="date">
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 6,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status !== "[3] Sorting" &&
              parcel.status === "[4] Courier Delivery"
                ? iconCircleCheck
                : iconCircle
            }
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [SOC 5] Your parcel is in transit to [{parcel.deliveredTo} DC]
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
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 6,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img src={iconCircle} alt="icon-circle" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [SOC 5] The parcel has been dispatched from our sorting center.
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
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 4,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status !== "[2] Picked Up" &&
              parcel.status === "[3] Sorting"
                ? iconCircleCheck
                : iconCircle
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
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 4,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img src={iconCircle} alt="icon-circle" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [SOC 4] Your parcel has been received by sorting center to determine
            the route for delivery.
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
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 2,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img
            src={
              parcel.status !== "[1] Order Created" &&
              parcel.status === "[2] Picked Up"
                ? iconCircleCheck
                : iconCircle
            }
            alt="icon-circle-check"
          />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            [{parcel.deliveredFrom} DC] Your parcel is on its way to the sorting
            center.
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
            {adjustDate(
              parcel.shippedMonth,
              parseInt(parcel.shippedDay) + 2,
              parcel.shippedYear
            )}
          </div>
        </div>
        <div className="middle">
          <img src={iconCircle} alt="icon-circle" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">
            Your parcel has been picked up by our courier. The package has been
            collected by our designated courier.
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
          <img src={arrowRightIcon} alt="Arrow" />
          <p>{parcel.deliveredTo}</p>
        </div>
        <div className="refNumber">{parcel.id}</div>
      </div>

      {/* FRAME 2 */}
      <div className="frame2">
        <div className="order">
          <img
            src={circleActiveOrderCreated}
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
                ? circleActivePickedUp
                : circleIdlePickedUp
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
                ? circleActiveSorting
                : circleIdleSorting
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
                ? circleActiveCourierDelivery
                : circleIdleCourierDelivery
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
                ? circleActiveDelivered
                : circleIdleDelivered
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
              {parcel.shippedDay.padStart(2, "0")} {parcel.shippedMonth}{" "}
              {parcel.shippedYear}
            </div>
          </div>
          <div className="middle">
            <img
              src={
                parcel.status !== "[1] Order Created"
                  ? iconCircle
                  : iconCircleCheck
              }
              alt="icon-circle-check"
            />
          </div>
          <div className="right">
            <div className="description">Order created successfully.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParcelTrackerBody;
