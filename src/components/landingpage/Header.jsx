import { useRef } from 'react'
import './Header.css'
import ButtonStack from '../ButtonStack'
import { Link } from 'react-router-dom'


function Header() {

  // possible changes for backend interactivity
  // const home = useRef(null);
  // const product = useRef(null);
  // const partners = useRef(null);
  // const aboutus = useRef(null);
  // const contact = useRef(null);
  
  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div className='Header'>
        <img src="/src/assets/TNG Logo V2.png" alt="Logo Text" class="logo"/>
        <div className="Nav">
            <ul className="NavBar">
              <li onClick={() => scrollToSection(home)}><Link to="/">Home</Link></li>
              <li onClick={() => scrollToSection(product)}>Our Product</li>
              <li onClick={() => scrollToSection(partners)}>Partners</li>
              <li onClick={() => scrollToSection(aboutus)}>About Us</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
              <li><Link to="/DashboardPage">Dashboard</Link></li>
              
            </ul>
            <ButtonStack />
        </div>
    </div>
  )
}

export default Header