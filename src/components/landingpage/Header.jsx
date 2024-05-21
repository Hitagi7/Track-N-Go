import { useState, useRef } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'
import { Link } from 'react-router-dom'
import LoginOverlay from './LoginOverlay'


function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Header() {
  const [openLogin, setOpenLogin] = useState(false);

  const handleAdminButtonClick = () => {
    // Handle optional admin button logic (e.g., basic authentication check)
    setOpenLogin(true);
  };

  return (
    <div className='Header'>
        <Link to="/track-n-go/"><img src="/track-n-go/src/assets/TNG Logo V2.png" alt="Logo Text" className="logo"/></Link>
        <div className="Nav">
            <ul className="NavBar">
              <li ><Link to="/track-n-go/">Home</Link></li>
              <li onClick={() => scrollTo('our-product')}>Our Product</li>
              <li onClick={() => scrollTo('partners')}>Partners</li>
              <li onClick={() => scrollTo('about-us')}>About Us</li>
              <li onClick={() => scrollTo('contact')}>Contact</li>
              <li><Link to="/track-n-go/DashboardPage">Dashboard</Link></li>
              <li><button onClick={handleAdminButtonClick}>Admin</button></li>
            </ul>
            <ButtonStack />
            <hr />
            <button className="scroll-to-top" onClick={scrollToTop}><img src="/track-n-go/src/assets/icons/up-arrow.svg" alt="up-arrow" /></button>
        </div>
        {openLogin && (
        <LoginOverlay
          visible={openLogin}
          toggleVisible={() => setOpenLogin(false)}
          loginType="admin"
        />
      )}
    </div>
  );
}

export default Header