import { useState } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'

function Header() {

  return (
    <div className='Header'>
        <img src="/src/assets/Logo Text.png" alt="Logo Text" />
        <ButtonStack />
    </div>
  )
}

export default Header