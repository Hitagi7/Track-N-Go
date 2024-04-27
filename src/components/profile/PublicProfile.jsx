import React from 'react'
import './PublicProfile.css'

function PublicProfile() {
  return (
    <div className="PublicProfile">
        <div className="profile-frame">
          <div className="title">Public profile</div>
          <div className="profile-picture">
            <img src="/src/assets/icons/profile-placeholder.svg" alt="profile-placeholder" className='profile-placeholder' />
            <img src="/src/assets/icons/button-camera.svg" alt="button-camera" className='button-camera' />
          </div>
          <div className="input-fields">
            <div className="first-name">
              <div className="input-title">First Name</div>
              <input type="text" placeholder='Juan' className='input-box' />
            </div>
            <div className="last-name">
              <div className="input-title">Last Name</div>
              <input type="text" placeholder='Dela Cruz' className='input-box' />
            </div>
            <div className="username">
              <div className="input-title" >Username</div>
              <input type="text" placeholder='@juan_delacruz' className='input-box' />
            </div>
            <div className="email-address">
              <div className="input-title">Email Address</div>
              <input type="text" placeholder='juan_delacruz@gmail.com' className='input-box' />
            </div>
          </div>
          <div className="profile-buttons">
            <button className="save-changes-profile">Save changes</button>
            <button className="cancel-profile">Cancel</button>
          </div>
        </div>
    </div>
  )
}

export default PublicProfile