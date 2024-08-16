import Link from "next/link";
import React, { useState } from "react";
import logo from "./../../public/icons/header/logo.svg";
import menuDownIcon from "./../../public/icons/header/menu-down-icon.svg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown: any) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <Link href="/">
            <img
              src={logo.src}
              alt="Czytam przed seksem"
              height={90}
              width={300}
            />
          </Link>
        </div>
        <nav className="header-wrapper__nav">
          <ul className="nav-first-lvl">
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("firstDropdown")}>
                Warsztaty
                <img
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "firstDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link href="">Szkoła podstawowa</Link>
                </li>
                <li>
                  <Link href="">Szkoła średnia</Link>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("secondDropdown")}>
                Szkolenia
                <img
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "secondDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link href="">Z rodzicami i kadrą pedagogiczną</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Konsultacje</Link>
            </li>
            <li>
              <Link href="">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
