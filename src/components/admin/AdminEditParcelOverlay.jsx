import React from "react";
import "./AdminOverlay.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";

function AdminEditParcelOverlay({
  visible,
  toggleVisible,
  addParcel,
  generateID,
}) {
  // Parcel
  const id = generateID;
  const [weight, setWeight] = useState();
  const [price, setPrice] = useState("-");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [shipper, setShipper] = useState("");
  const [courier, setCourier] = useState("");
  const [status, setStatus] = useState("-");

  // Tracking
  const [shippedMonth, setShippedMonth] = useState("");
  const [shippedDay, setShippedDay] = useState("");
  const [shippedYear, setShippedYear] = useState("");
  const [deliveryMonth, setDeliveryMonth] = useState("");
  const [deliveryDay, setDeliveryDay] = useState("");
  const [deliveryYear, setDeliveryYear] = useState("");
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
    // Check if all fields are filled
    if (!weight) {
      alert("Please fill up the required fields");
      return;
    }

    if (!length) {
      alert("Please fill up the required fields");
      return;
    }

    if (!width) {
      alert("Please fill up the required fields");
      return;
    }

    if (!height) {
      alert("Please fill up the required fields");
      return;
    }

    if (!shipper) {
      alert("Please fill up the required fields");
      return;
    }

    if (!courier) {
      alert("Please fill up the required fields");
      return;
    }

    if (status === "-") {
      alert("Please fill up the required fields");
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
    });

    setWeight();
    setLength();
    setWidth();
    setHeight();
    setPrice("-");
    setShipper("");
    setCourier("");
    setStatus("-");
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
  };
  return (
    visible && (
      <div className="admin-overlay">
        <div className="a-dimmed-background"></div>
        <div className="a-overlay">
          <div className="o-title-block">
            <p className="a-overlay-title">Edit parcel</p>
            <button className="o-delete-parcel-button">
              <img
                src="src/assets/icons/icon-trash.svg"
                className="o-trash-icon"
              />
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
                    placeholder={generateID}
                    className="o-text-field"
                    disabled
                  />
                </form>
              </div>

              <div className="o-weight-price-field o-field">
                <div className="o-weight-field">
                  <p className="o-form-label">Weight</p>
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="2.1"
                      className="o-text-field"
                      onChange={(e) => {
                        setWeight(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                </div>

                <div className="o-price-field">
                  <p className="o-form-label">Price</p>
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder={price}
                      className="o-text-field"
                      disabled
                    />
                  </form>
                </div>
              </div>

              <div className="o-size-field o-field">
                <p className="o-form-label">Size</p>
                <div className="o-size-individual-field">
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Length"
                      className="o-text-field"
                      onChange={(e) => {
                        setLength(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                  <img
                    src="src/assets/icons/icon-x.svg"
                    className="o-x-icon"
                    alt=""
                  />
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Width"
                      className="o-text-field"
                      onChange={(e) => {
                        setWidth(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                  <img
                    src="src/assets/icons/icon-x.svg"
                    className="o-x-icon"
                    alt=""
                  />
                  <form className="o-form" action="#">
                    <input
                      type="number"
                      placeholder="Height"
                      className="o-text-field"
                      onChange={(e) => {
                        setHeight(e.target.value);
                        calculatePrice();
                      }}
                    />
                  </form>
                </div>
              </div>

              <div className="o-shipper-field o-field">
                <p className="o-form-label">Shipper</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder="Nat'l Bookstore"
                    className="o-text-field"
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
                        <a
                          href="#"
                          // onClick={set('January')}
                        >
                          January
                        </a>
                      </li>
                      <li>
                        <a href="#">February</a>
                      </li>
                      <li>
                        <a href="#">March</a>
                      </li>
                      <li>
                        <a href="#">April</a>
                      </li>
                      <li>
                        <a href="#">May</a>
                      </li>
                      <li>
                        <a href="#">June</a>
                      </li>
                      <li>
                        <a href="#">July</a>
                      </li>
                      <li>
                        <a href="#">August</a>
                      </li>
                      <li>
                        <a href="#">September</a>
                      </li>
                      <li>
                        <a href="#">October</a>
                      </li>
                      <li>
                        <a href="#">November</a>
                      </li>
                      <li>
                        <a href="#">December</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">September</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="o-day-dropdown o-dropdown">
                    <ul className="o-day-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>

                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#">7</a>
                      </li>
                      <li>
                        <a href="#">8</a>
                      </li>
                      <li>
                        <a href="#">9</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>

                      <li>
                        <a href="#">11</a>
                      </li>
                      <li>
                        <a href="#">12</a>
                      </li>
                      <li>
                        <a href="#">13</a>
                      </li>
                      <li>
                        <a href="#">14</a>
                      </li>
                      <li>
                        <a href="#">15</a>
                      </li>

                      <li>
                        <a href="#">16</a>
                      </li>
                      <li>
                        <a href="#">17</a>
                      </li>
                      <li>
                        <a href="#">18</a>
                      </li>
                      <li>
                        <a href="#">19</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>

                      <li>
                        <a href="#">21</a>
                      </li>
                      <li>
                        <a href="#">22</a>
                      </li>
                      <li>
                        <a href="#">23</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li>
                        <a href="#">25</a>
                      </li>

                      <li>
                        <a href="#">26</a>
                      </li>
                      <li>
                        <a href="#">27</a>
                      </li>
                      <li>
                        <a href="#">28</a>
                      </li>
                      <li>
                        <a href="#">29</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>

                      <li>
                        <a href="#">31</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">1</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="o-year-dropdown o-dropdown">
                    <ul className="o-year-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#">2015</a>
                      </li>
                      <li>
                        <a href="#">2016</a>
                      </li>
                      <li>
                        <a href="#">2017</a>
                      </li>
                      <li>
                        <a href="#">2018</a>
                      </li>
                      <li>
                        <a href="#">2019</a>
                      </li>

                      <li>
                        <a href="#">2020</a>
                      </li>
                      <li>
                        <a href="#">2021</a>
                      </li>
                      <li>
                        <a href="#">2022</a>
                      </li>
                      <li>
                        <a href="#">2023</a>
                      </li>
                      <li>
                        <a href="#">2024</a>
                      </li>

                      <li>
                        <a href="#">2025</a>
                      </li>
                      <li>
                        <a href="#">2026</a>
                      </li>
                      <li>
                        <a href="#">2027</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">2000</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
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
                        <a href="#">January</a>
                      </li>
                      <li>
                        <a href="#">February</a>
                      </li>
                      <li>
                        <a href="#">March</a>
                      </li>
                      <li>
                        <a href="#">April</a>
                      </li>
                      <li>
                        <a href="#">May</a>
                      </li>
                      <li>
                        <a href="#">June</a>
                      </li>
                      <li>
                        <a href="#">July</a>
                      </li>
                      <li>
                        <a href="#">August</a>
                      </li>
                      <li>
                        <a href="#">September</a>
                      </li>
                      <li>
                        <a href="#">October</a>
                      </li>
                      <li>
                        <a href="#">November</a>
                      </li>
                      <li>
                        <a href="#">December</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">September</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="o-day-dropdown o-dropdown">
                    <ul className="o-day-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>

                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#">7</a>
                      </li>
                      <li>
                        <a href="#">8</a>
                      </li>
                      <li>
                        <a href="#">9</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>

                      <li>
                        <a href="#">11</a>
                      </li>
                      <li>
                        <a href="#">12</a>
                      </li>
                      <li>
                        <a href="#">13</a>
                      </li>
                      <li>
                        <a href="#">14</a>
                      </li>
                      <li>
                        <a href="#">15</a>
                      </li>

                      <li>
                        <a href="#">16</a>
                      </li>
                      <li>
                        <a href="#">17</a>
                      </li>
                      <li>
                        <a href="#">18</a>
                      </li>
                      <li>
                        <a href="#">19</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>

                      <li>
                        <a href="#">21</a>
                      </li>
                      <li>
                        <a href="#">22</a>
                      </li>
                      <li>
                        <a href="#">23</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li>
                        <a href="#">25</a>
                      </li>

                      <li>
                        <a href="#">26</a>
                      </li>
                      <li>
                        <a href="#">27</a>
                      </li>
                      <li>
                        <a href="#">28</a>
                      </li>
                      <li>
                        <a href="#">29</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>

                      <li>
                        <a href="#">31</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">1</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="o-year-dropdown o-dropdown">
                    <ul className="o-year-dropdown-content o-dropdown-content">
                      <li>
                        <a href="#">2015</a>
                      </li>
                      <li>
                        <a href="#">2016</a>
                      </li>
                      <li>
                        <a href="#">2017</a>
                      </li>
                      <li>
                        <a href="#">2018</a>
                      </li>
                      <li>
                        <a href="#">2019</a>
                      </li>

                      <li>
                        <a href="#">2020</a>
                      </li>
                      <li>
                        <a href="#">2021</a>
                      </li>
                      <li>
                        <a href="#">2022</a>
                      </li>
                      <li>
                        <a href="#">2023</a>
                      </li>
                      <li>
                        <a href="#">2024</a>
                      </li>

                      <li>
                        <a href="#">2025</a>
                      </li>
                      <li>
                        <a href="#">2026</a>
                      </li>
                      <li>
                        <a href="#">2027</a>
                      </li>
                    </ul>
                    <p className="o-dropdown-placeholder">2000</p>
                    <button className="o-dropdown-button">
                      <img
                        src="src/assets/icons/icon-chevron-down.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="o-delivered-from-field o-field">
                <p className="o-form-label">Delivered From</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder="Laguna Del Norte, PH"
                    className="o-text-field"
                  />
                </form>
              </div>

              <div className="o-delivered-to-field o-field">
                <p className="o-form-label">Delivered To</p>
                <form className="o-form" action="#">
                  <input
                    type="text"
                    placeholder="Cebu City, PH"
                    className="o-text-field"
                  />
                </form>
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
                    <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
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
                onCancel();
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
