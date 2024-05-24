import React from "react";
import "./AdminOverlay.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import iconX from "/src/assets/icons/icon-x.svg";
import iconChevronDown from "/src/assets/icons/icon-chevron-down.svg";

function AdminOverlay({ visible, toggleVisible, addParcel, generateID }) {
  // const [parcel, setParcel] = useState({
  //   id: generateID,
  //   weight: "",
  //   price: "",
  //   length: "",
  //   width: "",
  //   height: "",
  //   shipper: "",
  //   courier: "",
  //   status: "",
  //   shippedDate: "",
  //   deliveryDate: "",
  //   deliveredFrom: "",
  //   deliveredTo: "",
  // });

  // Parcel
  let id = generateID;
  const [weight, setWeight] = useState();
  const [price, setPrice] = useState("-");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [shipper, setShipper] = useState("");
  const [courier, setCourier] = useState("");
  const [status, setStatus] = useState("-");

  // Tracking
  const [shippedMonth, setShippedMonth] = useState("-");
  const [shippedDay, setShippedDay] = useState("-");
  const [shippedYear, setShippedYear] = useState("-");
  const [deliveryMonth, setDeliveryMonth] = useState("-");
  const [deliveryDay, setDeliveryDay] = useState("-");
  const [deliveryYear, setDeliveryYear] = useState("-");
  const [deliveredFrom, setDeliveredFrom] = useState("");
  const [deliveredTo, setDeliveredTo] = useState("");

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

    addParcel({
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

    setWeight();
    setLength();
    setWidth();
    setHeight();
    setPrice("-");
    setShipper("");
    setCourier("");
    setStatus("-");
    setShippedYear("-");
    setShippedDay("-");
    setShippedMonth("-");
    setDeliveryYear("-");
    setDeliveryDay("-");
    setDeliveryMonth("-");
    setDeliveredFrom("");
    setDeliveredTo("");
    toggleVisible();
  };

  // Cancel Changes
  const onCancel = () => {
    setWeight();
    setLength();
    setWidth();
    setHeight();
    setPrice("-");
    setShipper("");
    setCourier("");
    setStatus("-");
    setShippedYear("-");
    setShippedDay("-");
    setShippedMonth("-");
    setDeliveryYear("-");
    setDeliveryDay("-");
    setDeliveryMonth("-");
    setDeliveredFrom("");
    setDeliveredTo("");
  };
  return (
    visible && (
      <div className="admin-overlay" data-simplebar>
        <div className="a-dimmed-background"></div>
        <div className="a-overlay">
          <p className="a-overlay-title">Add new parcel</p>

          <form className="o-form" action="#">
            <div className="o-input-fields">
              <div className="o-left-fields">
                <div className="o-tracking-id-field o-field">
                  <p className="o-form-label">Tracking ID</p>
                  <input
                    type="text"
                    placeholder={id}
                    className="o-text-field"
                    disabled
                  />
                </div>

                <div className="o-weight-price-field o-field">
                  <div className="o-weight-field">
                    <p className="o-form-label">Weight</p>
                    <div className="o-input-label-field">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="o-text-field"
                        onChange={(e) => {
                          setWeight(e.target.value);
                          calculatePrice();
                        }}
                        required
                      />
                      <p className="o-p-icon">kg</p>
                    </div>
                  </div>

                  <div className="o-price-field">
                    <p className="o-form-label">Price</p>
                    <div className="o-input-label-field">
                      <input
                        type="number" 
                        placeholder={price}
                        className="o-text-field"
                        disabled
                      />
                      <p className="o-p-icon">₱</p>
                    </div>
                  </div>
                </div>

                <div className="o-size-field o-field">
                  <p className="o-form-label">Size</p>
                  <div className="o-size-individual-field">
                    
                    <div className="o-length-field o-lwh-field">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="o-text-field"
                        onChange={(e) => {
                          setLength(e.target.value);
                          calculatePrice();
                        }}
                        required
                      />
                      <p className="o-p-icon-cm o-length-icon">cm</p>
                      <p className="o-sublabel">Length</p>
                    </div>
                    
                    <img src={iconX} className="o-x-icon" alt="" />
                    
                    <div className="o-width-field o-lwh-field">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="o-text-field"
                        onChange={(e) => {
                          setWidth(e.target.value);
                          calculatePrice();
                        }}
                        required
                      />
                      <p className="o-p-icon-cm o-width-icon">cm</p>
                      <p className="o-sublabel">Width</p>
                    </div>
                    
                    <img src={iconX} className="o-x-icon" alt="" />

                    <div className="o-height-field o-lwh-field">
                      <input
                        type="number"
                        placeholder="0.0"
                        className="o-text-field"
                        onChange={(e) => {
                          setHeight(e.target.value);
                          calculatePrice();
                        }}
                        required
                      />
                      <p className="o-p-icon-cm o-height-icon">cm</p>
                      <p className="o-sublabel">Height</p>
                    </div>
                  </div>
                </div>

                <div className="o-shipper-field o-field">
                  <p className="o-form-label">Shipper</p>
                  <input
                    type="text"
                    placeholder="Enter parcel shipper"
                    className="o-text-field"
                    onChange={(e) => setShipper(e.target.value)}
                    required
                  />
                </div>

                <div className="o-courier-field">
                  <p className="o-form-label">Courier</p>
                  <input
                    type="text"
                    placeholder="Enter parcel courier"
                    className="o-text-field"
                    onChange={(e) => setCourier(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="o-right-fields">
                <div className="o-shipped-out-field">
                  <p className="o-form-label">Shipped out</p>
                  <div className="o-dropdown-fields">
                    <div className="o-month-dropdown o-dropdown">
                      <ul className="o-month-dropdown-content o-dropdown-content">
                        <li>
                          <a
                            href="#"
                            onClick={() => setShippedMonth("January")}
                          >
                            January
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => setShippedMonth("February")}
                          >
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
                          <a
                            href="#"
                            onClick={() => setShippedMonth("October")}
                          >
                            October
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => setShippedMonth("November")}
                          >
                            November
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => setShippedMonth("December")}
                          >
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
                          <a
                            href="#"
                            onClick={() => setDeliveryMonth("January")}
                          >
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
                          <a
                            href="#"
                            onClick={() => setDeliveryMonth("August")}
                          >
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
                          <a
                            href="#"
                            onClick={() => setDeliveryMonth("October")}
                          >
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
                    placeholder="Address of seller's location"
                    className="o-text-field"
                    onChange={(e) => setDeliveredFrom(e.target.value)}
                    required
                  />
                </div>

                <div className="o-delivered-to-field o-field">
                  <p className="o-form-label">Delivered To</p>
                  <input
                    type="text"
                    placeholder="Address of buyer's location"
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

            <div className="o-input-fields">
              <div className="o-buttons">
                <button
                  type="submit"
                  className="o-add-parcel-confirm o-button"
                  onClick={(data) => {
                    onSubmit(data);
                  }}
                >
                  Add new parcel
                </button>
                <button
                  className="o-cancel-button o-button"
                  onClick={() => {
                    toggleVisible();
                    onCancel();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default AdminOverlay;
