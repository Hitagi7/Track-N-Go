import React from 'react'
import './ParcelTrackerBody.css'

function ParcelTrackerBody() {
  return (
    <div className="ParcelTrackerBody">
      {/* FRAME 1 */}
      <div className="frame1">
        <div className="city">
          <p >VALENZUELA CITY</p>
          <img src="/src/assets/icons/icon-arrow-right.svg" alt="Arrow" />
          <p >TOLEDO CITY</p>
        </div>
        <div className="refNumber">SPEPH043036716934</div>
      </div>

      {/* FRAME 2 */}
      <div className="frame2">
        <div className="order">
          <img src="/src/assets/icons/circle-active-order-created.svg" alt="circle-active-order-created" className='iconstatus'/>
          <p className='active'>Order Created</p>
        </div>
        <hr className="line-status-active" />
        <div className="pickup">
        <img src="/src/assets/icons/circle-active-picked-up.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='active'>Picked Up</p>
        </div>
        <hr className="line-status-active" />
        <div className="sorting">
        <img src="/src/assets/icons/circle-active-sorting.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='active'>Sorting</p>
        </div>
        <hr className="line-status-idle" />
        <div className="courier">
        <img src="/src/assets/icons/circle-idle-courier-delivery.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='idle'>Courier Delivery</p>
        </div>
        <hr className="line-status-idle" />
        <div className="delivered">
        <img src="/src/assets/icons/circle-idle-delivered.svg" alt="circle-active-order-created" className='iconstatus'/>
        <p className='idle'>Delivered</p>
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
          <img src="/src/assets/icons/icon-circle-check.svg" alt="icon-circle-check" />
          <div className="vertical-line"></div>
        </div>
        <div className="right">
          <div className="description">[SOC 4] Your parcel is being transported to [SOC 5]</div>
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
          <div className="description-1">[SOC 4] Your parcel has been received by sorting center</div>
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
          <div className="description-2">[Paranaque DC] Your parcel has been picked up</div>
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
          <div className="description-3">[SOC 4] Your parcel has been received by sorting center</div>
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
          <div className="description-4">[SOC 4] Your parcel has been received by sorting center</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ParcelTrackerBody