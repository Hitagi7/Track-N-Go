import { useState } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='Header'>
        <Link to="/"><img src="/src/assets/TNG Logo V2.png" alt="Logo" className="logo"/></Link>
        <ButtonStack />
    </div>
  )
}

export default Header