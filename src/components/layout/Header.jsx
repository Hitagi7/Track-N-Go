import { useState } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'

function Header() {

  return (
    <div className='Header'>
        <img src="/src/assets/Logo Text.png" alt="Logo Text" />
        <div className="Nav">
            <div className="NavBar">
                <a href="">Home</a>
                <a href="">Partners</a>
                <a href="">Our Product</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
            </div>
            <ButtonStack />
        </div>
    </div>
  )
}

export default Header
