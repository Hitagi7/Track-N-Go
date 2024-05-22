import { useState, useRef } from "react";
import "./Header.css";
import ButtonStack from "../ButtonStack";
import { Link } from "react-router-dom";
import LoginOverlay from "./LoginOverlay";
import logo from "/src/assets/TNG Logo V2.png";

function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
}

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
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("our-product")}>Our Product</li>
          <li onClick={() => scrollTo("partners")}>Partners</li>
          <li onClick={() => scrollTo("about-us")}>About Us</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
        <ButtonStack />
        <hr />
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
