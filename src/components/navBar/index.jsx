import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import Logo from "../../images/FloridaWagyu-logo.png";
import './styles.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src={Logo} alt="Florida Wagyu" width="656" height="70" />
          </Link>
          <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
