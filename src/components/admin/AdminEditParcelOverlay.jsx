import React from "react";
import "./AdminOverlay.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import iconTrash from "/src/assets/icons/icon-trash.svg";
import iconX from "/src/assets/icons/icon-x.svg";
import iconChevronDown from "/src/assets/icons/icon-chevron-down.svg";

function AdminEditParcelOverlay({
  visible,
  toggleVisible,
  parcelDetails,
  editParcel,
  deleteParcel,
}) {
  // Parcel
  const [id, setId] = useState(parcelDetails.id);
  const [weight, setWeight] = useState(parcelDetails.weight);
  const [price, setPrice] = useState(parcelDetails.price);
  const [length, setLength] = useState(parcelDetails.length);
  const [width, setWidth] = useState(parcelDetails.width);
  const [height, setHeight] = useState(parcelDetails.height);
  const [shipper, setShipper] = useState(parcelDetails.shipper);
  const [courier, setCourier] = useState(parcelDetails.courier);
  const [status, setStatus] = useState(parcelDetails.status);

  // Tracking
  const [shippedMonth, setShippedMonth] = useState(parcelDetails.shippedMonth);
  const [shippedDay, setShippedDay] = useState(parcelDetails.shippedDay);
  const [shippedYear, setShippedYear] = useState(parcelDetails.shippedYear);
  const [deliveryMonth, setDeliveryMonth] = useState(
    parcelDetails.deliveryMonth
  );
  const [deliveryDay, setDeliveryDay] = useState(parcelDetails.deliveryDay);
  const [deliveryYear, setDeliveryYear] = useState(parcelDetails.deliveryYear);
  const [deliveredFrom, setDeliveredFrom] = useState(
    parcelDetails.deliveredFrom
  );
  const [deliveredTo, setDeliveredTo] = useState(parcelDetails.deliveredTo);

  // Calculate Price
  const calculatePrice = () => {
    if (!width || !height || !length || !weight) {
      setPrice("-");
      return;
    }

    const result = (width * height * length) / weight;
    setPrice(result.toFixed(2).toString());
  };

  // Save Changes
  const onSubmit = () => {
    // Check if all fields are filled
    if (
      !width ||
      !height ||
      !length ||
      !weight ||
      !price ||
      !shipper ||
      !courier ||
      !deliveredFrom ||
      !deliveredTo
    )
      return;

    if (
      status == "-" ||
      shippedDay == "-" ||
      shippedMonth == "-" ||
      shippedYear == "-"
    ) {
      alert("Please select from dropdown options.");
      return;
    }

    editParcel(id, {
      id,
      weight,
      length,
      width,
      height,
      price,
      shipper,
      courier,
      status,
      shippedMonth,
      shippedYear,
      shippedDay,
      deliveryYear,
      deliveryMonth,
      deliveryDay,
      deliveredFrom,
      deliveredTo,
    });
    toggleVisible();
  };

  const onDelete = () => {
    deleteParcel(id);
    toggleVisible();
  };

  return (
    visible && (
      <div className="admin-overlay">
        <div className="a-dimmed-background-edit"></div>
        <div className="a-overlay">
          <div className="o-title-block">
            <p className="a-overlay-title">Edit parcel</p>
            <button
              className="o-delete-parcel-button"
              onClick={() => onDelete()}
              style={{ cursor: "pointer" }}
            >
              <img src={iconTrash} className="o-trash-icon" />
              <p className="font-medium">Delete parcel</p>
            </button>
          </div>

          <div className="o-input-fields">
            <div className="o-left-fields">
              <div className="o-tracking-id-field o-field">
                <p className="o-form-label">Tracking ID</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder={id}
                    className="o-text-field"
                    disabled
                  />
                </form>
              </div>

              <div className="o-weight-price-field o-field">
                <div className="o-weight-field">
                  <p className="o-form-label">Weight</p>
                  <div className="o-input-label-field">
                    <form className="o-form" action="#">
                      <input
                        type="number"
                        placeholder="0.0"
                        value={weight}
                        className="o-text-field"
                        onChange={(e) => {
                          setWeight(e.target.value);
                          calculatePrice();
                        }}
                      />
                    </form>
                    <p className="o-p-icon">kg</p>
                  </div>
                </div>

                <div className="o-price-field">
                  <p className="o-form-label">Price</p>
                  <div className="o-input-label-field">
                    <form className="o-form" action="#">
                      <input
                        type="number"
                        placeholder={price}
                        className="o-text-field"
                        disabled
                      />
                    </form>
                    <p className="o-p-icon">₱ </p>
                  </div>
                </div>
              </div>

              <div className="o-size-field o-field">
                <p className="o-form-label">Size</p>
                <div className="o-size-individual-field">

                <div className="o-length-field o-lwh-field">
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Length"
                      className="o-text-field"
                      value={length}
                      onChange={(e) => {
                        setLength(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                  <p className="o-p-icon-cm o-length-icon">cm</p>
                  <p className="o-sublabel">Length</p>
                </div>

                <img src={iconX} className="o-x-icon" alt="" />

                <div className="o-width-field o-lwh-field">
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Width"
                      className="o-text-field"
                      value={width}
                      onChange={(e) => {
                        setWidth(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                  <p className="o-p-icon-cm o-width-icon">cm</p>
                  <p className="o-sublabel">Width</p>
                </div>

                <img src={iconX} className="o-x-icon" alt="" />

                <div className="o-height-field o-lwh-field">
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Height"
                      className="o-text-field"
                      value={height}
                      onChange={(e) => {
                        setHeight(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                  <p className="o-p-icon-cm o-height-icon">cm</p>
                  <p className="o-sublabel">Height</p>
                </div>
                </div>
              </div>

              <div className="o-shipper-field o-field">
                <p className="o-form-label">Shipper</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder="Nat'l Bookstore"
                    className="o-text-field"
                    value={shipper}
                    onChange={(e) => setShipper(e.target.value)}
                  />
                </form>
              </div>

              <div className="o-courier-field">
                <p className="o-form-label">Courier</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder="J&T"
                    className="o-text-field"
                    value={courier}
                    onChange={(e) => setCourier(e.target.value)}
                  />
                </form>
              </div>
            </div>

            <div className="o-right-fields">
              <div className="o-shipped-out-field">
                <p className="o-form-label">Shipped out</p>
                <div className="o-dropdown-fields">
                  <div className="o-month-dropdown o-dropdown">
                    <ul className="o-month-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#" onClick={() => setShippedMonth("January")}>
                          January
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("February")}>
                          February
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("March")}>
                          March
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("April")}>
                          April
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("May")}>
                          May
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("June")}>
                          June
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("July")}>
                          July
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("August")}>
                          August
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setShippedMonth("September")}
                        >
                          September
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("October")}>
                          October
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("November")}>
                          November
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedMonth("December")}>
                          December
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{shippedMonth}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>

                  <div className="o-day-dropdown o-dropdown">
                    <ul className="o-day-dropdown-content o-dropdown-content overflow">
                      <li>
                        <a href="#" onClick={() => setShippedDay("1")}>
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("2")}>
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("3")}>
                          3
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("4")}>
                          4
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("5")}>
                          5
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("6")}>
                          6
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("7")}>
                          7
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("8")}>
                          8
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("9")}>
                          9
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("10")}>
                          10
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("11")}>
                          11
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("12")}>
                          12
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("13")}>
                          13
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("14")}>
                          14
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("15")}>
                          15
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("16")}>
                          16
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("17")}>
                          17
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("18")}>
                          18
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("19")}>
                          19
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("20")}>
                          20
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("21")}>
                          21
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("22")}>
                          22
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("23")}>
                          23
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("24")}>
                          24
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("25")}>
                          25
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("26")}>
                          26
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("27")}>
                          27
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("28")}>
                          28
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("29")}>
                          29
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedDay("30")}>
                          30
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedDay("31")}>
                          31
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{shippedDay}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>

                  <div className="o-year-dropdown o-dropdown">
                    <ul className="o-year-dropdown-content o-dropdown-content overflow">
                      <li>
                        <a href="#" onClick={() => setShippedYear("2015")}>
                          2015
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2016")}>
                          2016
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2017")}>
                          2017
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2018")}>
                          2018
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2019")}>
                          2019
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedYear("2020")}>
                          2020
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2021")}>
                          2021
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2022")}>
                          2022
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2023")}>
                          2023
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2024")}>
                          2024
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setShippedYear("2025")}>
                          2025
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2026")}>
                          2026
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setShippedYear("2027")}>
                          2027
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{shippedYear}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="o-delivery-date-field">
                <p className="o-form-label">Delivery Date</p>
                <div className="o-dropdown-fields">
                  <div className="o-month-dropdown o-dropdown">
                    <ul className="o-month-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("-")}>
                          -
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("January")}>
                          January
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setDeliveryMonth("February")}
                        >
                          February
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("March")}>
                          March
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("April")}>
                          April
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("May")}>
                          May
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("June")}>
                          June
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("July")}>
                          July
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("August")}>
                          August
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setDeliveryMonth("September")}
                        >
                          September
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryMonth("October")}>
                          October
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setDeliveryMonth("November")}
                        >
                          November
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setDeliveryMonth("December")}
                        >
                          December
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{deliveryMonth}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>

                  <div className="o-day-dropdown o-dropdown">
                    <ul className="o-day-dropdown-content o-dropdown-content overflow">
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("-")}>
                          -
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("1")}>
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("2")}>
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("3")}>
                          3
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("4")}>
                          4
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("5")}>
                          5
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("6")}>
                          6
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("7")}>
                          7
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("8")}>
                          8
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("9")}>
                          9
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("10")}>
                          10
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("11")}>
                          11
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("12")}>
                          12
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("13")}>
                          13
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("14")}>
                          14
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("15")}>
                          15
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("16")}>
                          16
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("17")}>
                          17
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("18")}>
                          18
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("19")}>
                          19
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("20")}>
                          20
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("21")}>
                          21
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("22")}>
                          22
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("23")}>
                          23
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("24")}>
                          24
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("25")}>
                          25
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("26")}>
                          26
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("27")}>
                          27
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("28")}>
                          28
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("29")}>
                          29
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryDay("30")}>
                          30
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryDay("31")}>
                          31
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{deliveryDay}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>

                  <div className="o-year-dropdown o-dropdown">
                    <ul className="o-year-dropdown-content o-dropdown-content overflow">
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("-")}>
                          -
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2015")}>
                          2015
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2016")}>
                          2016
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2017")}>
                          2017
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2018")}>
                          2018
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2019")}>
                          2019
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2020")}>
                          2020
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2021")}>
                          2021
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2022")}>
                          2022
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2023")}>
                          2023
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2024")}>
                          2024
                        </a>
                      </li>

                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2025")}>
                          2025
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2026")}>
                          2026
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => setDeliveryYear("2027")}>
                          2027
                        </a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">{deliveryYear}</p>
                    <button className="o-dropdown-button">
                      <img src={iconChevronDown} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="o-delivered-from-field o-field">
                <p className="o-form-label">Delivered From</p>
                <input
                  type="text"
                  placeholder="Laguna Del Norte, PH"
                  className="o-text-field"
                  value={deliveredFrom}
                  onChange={(e) => setDeliveredFrom(e.target.value)}
                  required
                />
              </div>

              <div className="o-delivered-to-field o-field">
                <p className="o-form-label">Delivered To</p>
                <input
                  type="text"
                  placeholder="Cebu City, PH"
                  value={deliveredTo}
                  className="o-text-field"
                  onChange={(e) => setDeliveredTo(e.target.value)}
                  required
                />
              </div>

              <div className="o-status-field">
                <p className="o-form-label">Status</p>

                <div className="o-status-dropdown o-dropdown">
                  <ul className="o-month-dropdown-content o-dropdown-content">
                    <li>
                      <a
                        href="#"
                        onClick={() => setStatus("[1] Order Created")}
                      >
                        [1] Order Created
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setStatus("[2] Picked Up")}>
                        [2] Picked Up
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setStatus("[3] Sorting")}>
                        [3] Sorting
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => setStatus("[4] Courier Delivery")}
                      >
                        [4] Courier Delivery
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={() => setStatus("[5] Delivered")}>
                        [5] Delivered
                      </a>
                    </li>
                  </ul>
                  <p className="o-dropdown-placeholder">{status}</p>
                  <button className="o-status-dropdown-trigger o-dropdown-button">
                    <img src={iconChevronDown} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="o-buttons">
            <button
              className="o-add-parcel-confirm o-button"
              onClick={() => {
                onSubmit();
              }}
            >
              Save changes
            </button>
            <button
              className="o-cancel-button o-button"
              onClick={() => {
                toggleVisible();
                console.log(parcelDetails.id);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default AdminEditParcelOverlay;
