import { useRef } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'
import { Link } from 'react-router-dom'


function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Header() {

  return (
    <div className='Header'>
        <Link to="/"><img src="/src/assets/TNG Logo V2.png" alt="Logo Text" class="logo"/></Link>
        <div className="Nav">
            <ul className="NavBar">
              <li ><Link to="/">Home</Link></li>
              <li onClick={() => scrollTo('our-product')}>Our Product</li>
              <li onClick={() => scrollTo('partners')}>Partners</li>
              <li onClick={() => scrollTo('about-us')}>About Us</li>
              <li onClick={() => scrollTo('contact')}>Contact</li>
              <li><Link to="/DashboardPage">Dashboard</Link></li>
              <li><Link to="/AdminPage">Admin</Link></li>
            </ul>
            <ButtonStack />
            <hr />
            <button className="scroll-to-top" onClick={scrollToTop}><img src="/src/assets/icons/up-arrow.svg" alt="up-arrow" /></button>
        </div>
    </div>
  )
}

export default Header