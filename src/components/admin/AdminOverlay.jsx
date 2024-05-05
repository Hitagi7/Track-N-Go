import React from 'react'
import './AdminOverlay.css'
import { Link } from 'react-router-dom';

function AdminOverlay({ visible, toggleVisible}) {
    return (
        visible && (
            <div className="admin-overlay">
                <div className="a-dimmed-background">                
                </div>
                <div className="a-overlay">
                    <p className="a-overlay-title">Add new parcel</p>

                    <div className="o-input-fields">
                        <div className="o-left-fields">

                            <div class="o-tracking-id-field o-field">
                                <p class="o-form-label">Tracking ID</p>
                                <form class="o-form" action="#">
                                    <input type="text" placeholder="NDJ297ADM1EL" class="o-text-field" disabled />
                                </form>
                            </div>

                            <div className="o-weight-price-field o-field">
                                <div class="o-weight-field">
                                    <p class="o-form-label">Weight</p>
                                    <form class="o-form" action="#">
                                        <input type="number" placeholder="2.1" class="o-text-field" />
                                    </form>
                                </div>

                                <div class="o-price-field">
                                    <p class="o-form-label">Price</p>
                                    <form class="o-form" action="#">
                                        <input type="number" placeholder="100.0" class="o-text-field" disabled />
                                    </form>
                                </div>
                            </div>

                            <div class="o-size-field o-field">
                                <p class="o-form-label">Size</p>
                                <div className="o-size-individual-field">
                                    <form class="o-form" action="#">
                                        <input type="number" placeholder="Length" class="o-text-field" />
                                    </form>
                                    <img src="src/assets/icons/icon-x.svg" class="o-x-icon" alt="" />
                                    <form class="o-form" action="#">
                                        <input type="number" placeholder="Width" class="o-text-field" />
                                    </form>
                                    <img src="src/assets/icons/icon-x.svg" class="o-x-icon" alt="" />    
                                    <form class="o-form" action="#">
                                        <input type="number" placeholder="Height" class="o-text-field" />
                                    </form>
                                </div>
                            </div>

                            <div class="o-shipper-field o-field">
                                <p class="o-form-label">Shipper</p>
                                <form class="o-form" action="#">
                                    <input type="text" placeholder="Nat'l Bookstore" class="o-text-field" />
                                </form>
                            </div>

                            <div class="o-courier-field">
                                <p class="o-form-label">Courier</p>
                                <form class="o-form" action="#">
                                    <input type="text" placeholder="J&T" class="o-text-field" />
                                </form>
                            </div>

                        </div>

                        <div className="o-right-fields">
                            <div class="o-shipped-out-field">
                                <p class="o-form-label">Shipped out</p>

                                <div className="o-dropdown-fields">

                                    <div className="o-month-dropdown o-dropdown">
                                        <ul className="o-month-dropdown-content o-dropdown-content">
                                            <li><a href="#">January</a></li>
                                            <li><a href="#">February</a></li>
                                            <li><a href="#">March</a></li>
                                            <li><a href="#">April</a></li>
                                            <li><a href="#">May</a></li>
                                            <li><a href="#">June</a></li>
                                            <li><a href="#">July</a></li>
                                            <li><a href="#">August</a></li>
                                            <li><a href="#">September</a></li>
                                            <li><a href="#">October</a></li>
                                            <li><a href="#">November</a></li>
                                            <li><a href="#">December</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">September</p>
                                        <button class="o-dropdown-button">
                                            <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="o-day-dropdown o-dropdown">
                                        <ul className="o-day-dropdown-content o-dropdown-content">
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>

                                            <li><a href="#">6</a></li>
                                            <li><a href="#">7</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">9</a></li>
                                            <li><a href="#">10</a></li>

                                            <li><a href="#">11</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">13</a></li>
                                            <li><a href="#">14</a></li>
                                            <li><a href="#">15</a></li>

                                            <li><a href="#">16</a></li>
                                            <li><a href="#">17</a></li>
                                            <li><a href="#">18</a></li>
                                            <li><a href="#">19</a></li>
                                            <li><a href="#">20</a></li>

                                            <li><a href="#">21</a></li>
                                            <li><a href="#">22</a></li>
                                            <li><a href="#">23</a></li>
                                            <li><a href="#">24</a></li>
                                            <li><a href="#">25</a></li>

                                            <li><a href="#">26</a></li>
                                            <li><a href="#">27</a></li>
                                            <li><a href="#">28</a></li>
                                            <li><a href="#">29</a></li>
                                            <li><a href="#">30</a></li>

                                            <li><a href="#">31</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">1</p>
                                        <button class="o-dropdown-button">
                                            <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>
                                
                                    <div className="o-year-dropdown o-dropdown">
                                        <ul className="o-year-dropdown-content o-dropdown-content">

                                            <li><a href="#">2015</a></li>
                                            <li><a href="#">2016</a></li>
                                            <li><a href="#">2017</a></li>
                                            <li><a href="#">2018</a></li>
                                            <li><a href="#">2019</a></li>

                                            <li><a href="#">2020</a></li>
                                            <li><a href="#">2021</a></li>
                                            <li><a href="#">2022</a></li>
                                            <li><a href="#">2023</a></li>
                                            <li><a href="#">2024</a></li>

                                            <li><a href="#">2025</a></li>
                                            <li><a href="#">2026</a></li>
                                            <li><a href="#">2027</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">2000</p>
                                        <button class="o-dropdown-button">
                                                <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>
                                    
                                </div>

                            </div>  

                            <div class="o-delivery-date-field">
                                <p class="o-form-label">Delivery Date</p>

                                <div className="o-dropdown-fields">

                                    <div className="o-month-dropdown o-dropdown">
                                        <ul className="o-month-dropdown-content o-dropdown-content">
                                            <li><a href="#">January</a></li>
                                            <li><a href="#">February</a></li>
                                            <li><a href="#">March</a></li>
                                            <li><a href="#">April</a></li>
                                            <li><a href="#">May</a></li>
                                            <li><a href="#">June</a></li>
                                            <li><a href="#">July</a></li>
                                            <li><a href="#">August</a></li>
                                            <li><a href="#">September</a></li>
                                            <li><a href="#">October</a></li>
                                            <li><a href="#">November</a></li>
                                            <li><a href="#">December</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">September</p>
                                        <button class="o-dropdown-button">
                                            <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="o-day-dropdown o-dropdown">
                                        <ul className="o-day-dropdown-content o-dropdown-content">
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>

                                            <li><a href="#">6</a></li>
                                            <li><a href="#">7</a></li>
                                            <li><a href="#">8</a></li>
                                            <li><a href="#">9</a></li>
                                            <li><a href="#">10</a></li>

                                            <li><a href="#">11</a></li>
                                            <li><a href="#">12</a></li>
                                            <li><a href="#">13</a></li>
                                            <li><a href="#">14</a></li>
                                            <li><a href="#">15</a></li>

                                            <li><a href="#">16</a></li>
                                            <li><a href="#">17</a></li>
                                            <li><a href="#">18</a></li>
                                            <li><a href="#">19</a></li>
                                            <li><a href="#">20</a></li>

                                            <li><a href="#">21</a></li>
                                            <li><a href="#">22</a></li>
                                            <li><a href="#">23</a></li>
                                            <li><a href="#">24</a></li>
                                            <li><a href="#">25</a></li>

                                            <li><a href="#">26</a></li>
                                            <li><a href="#">27</a></li>
                                            <li><a href="#">28</a></li>
                                            <li><a href="#">29</a></li>
                                            <li><a href="#">30</a></li>

                                            <li><a href="#">31</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">1</p>
                                        <button class="o-dropdown-button">
                                            <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="o-year-dropdown o-dropdown">
                                        <ul className="o-year-dropdown-content o-dropdown-content">

                                            <li><a href="#">2015</a></li>
                                            <li><a href="#">2016</a></li>
                                            <li><a href="#">2017</a></li>
                                            <li><a href="#">2018</a></li>
                                            <li><a href="#">2019</a></li>

                                            <li><a href="#">2020</a></li>
                                            <li><a href="#">2021</a></li>
                                            <li><a href="#">2022</a></li>
                                            <li><a href="#">2023</a></li>
                                            <li><a href="#">2024</a></li>

                                            <li><a href="#">2025</a></li>
                                            <li><a href="#">2026</a></li>
                                            <li><a href="#">2027</a></li>
                                        </ul>
                                        <p className="o-dropdown-placeholder">2000</p>
                                        <button class="o-dropdown-button">
                                                <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                        </button>
                                    </div>

                                </div>

                            </div>  

                            <div class="o-delivered-from-field o-field">
                                <p class="o-form-label">Delivered From</p>
                                <form class="o-form" action="#">
                                    <input type="text" placeholder="Laguna Del Norte, PH" class="o-text-field" />
                                </form>
                            </div> 
                            
                            <div class="o-delivered-to-field o-field">
                                <p class="o-form-label">Delivered To</p>
                                <form class="o-form" action="#">
                                    <input type="text" placeholder="Cebu City, PH" class="o-text-field" />
                                </form>
                            </div> 

                            <div class="o-status-field">
                                <p class="o-form-label">Status</p>

                                <div className="o-status-dropdown o-dropdown">
                                    <ul className="o-month-dropdown-content o-dropdown-content">
                                        <li><a href="#">[1] Order Created</a></li>
                                        <li><a href="#">[2] Picked Up</a></li>
                                        <li><a href="#">[3] Sorting</a></li>
                                        <li><a href="#">[4] Courier Delivery</a></li>
                                        <li><a href="#">[5] Delivered</a></li>
                                    </ul>
                                    <p className="o-dropdown-placeholder">[4] Courier Delivery</p>
                                    <button class="o-status-dropdown-trigger o-dropdown-button">
                                        <img src="src/assets/icons/icon-chevron-down.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="o-buttons">
                        <button className="o-add-parcel-confirm o-button">
                            Add new parcel
                        </button>
                        <button className="o-cancel-button o-button" onClick={toggleVisible}>
                            Cancel
                        </button>
                    </div>


                </div>
            </div>
        )
    );
}

export default AdminOverlay;
