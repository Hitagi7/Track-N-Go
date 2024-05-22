import { useState, useRef } from "react";
import "./Header.css";
import ButtonStack from "../ButtonStack";
import { Link } from "react-router-dom";
import LoginOverlay from "./LoginOverlay";
import logo from "/track-n-go/src/assets/TNG Logo V2.png";
import upArrow from "/track-n-go/src/assets/icons/up-arrow.svg";

function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Header() {
  const [openLogin, setOpenLogin] = useState(false);

  const handleAdminButtonClick = () => {
    // Handle optional admin button logic (e.g., basic authentication check)
    setOpenLogin(true);
  };

  return (
    <div className="Header">
      <img src={logo} alt="Logo Text" className="logo" />
      <div className="Nav">
        <ul className="NavBar">
          <li>
            <Link to="/track-n-go/">Home</Link>
          </li>
          <li onClick={() => scrollTo("our-product")}>Our Product</li>
          <li onClick={() => scrollTo("partners")}>Partners</li>
          <li onClick={() => scrollTo("about-us")}>About Us</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
        <ButtonStack />
        <hr />
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src={upArrow} alt="up-arrow" />
        </button>
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

export default Header;
