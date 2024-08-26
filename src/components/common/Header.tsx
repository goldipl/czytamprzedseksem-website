import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "./../../../public/icons/header/logo.svg";
import menuDownIcon from "./../../../public/icons/header/menu-down-icon.svg";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleDropdownToggle = (dropdown: any) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const addBlockedWindow = () => {
    document.body.classList.add("blocked-body");
    document.getElementsByTagName("html")[0].classList.add("blocked-body");
  };

  const removeBlockedWindow = () => {
    document.body.classList.remove("blocked-body");
    document.getElementsByTagName("html")[0].classList.remove("blocked-body");
  };

  const handleCloseDropdown = () => {
    setActiveDropdown(null);
    removeBlockedWindow();
    setOpenHamburger(false);
  };

  const handleHamburgerMenu = () => {
    setOpenHamburger((prev) => !prev);
  };

  useEffect(() => {
    if (openHamburger) {
      addBlockedWindow();
    } else {
      removeBlockedWindow();
    }
  }, [openHamburger]);

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <Link href="/">
            <Image
              src={logo.src}
              alt="Czytam przed seksem"
              height={90}
              width={300}
            />
          </Link>
        </div>
        <div
          className={`hamburger ${openHamburger ? "open" : ""}`}
          onClick={handleHamburgerMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
        <nav className={`header-wrapper__nav ${openHamburger ? "open" : ""}`}>
          <ul className="nav-first-lvl">
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("firstDropdown")}>
                Warsztaty
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "firstDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "firstDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link
                    href="#dla-szkol-podstawowych"
                    onClick={handleCloseDropdown}
                  >
                    Szkoła podstawowa
                  </Link>
                </li>
                <li>
                  <Link
                    href="#dla-szkol-srednich"
                    onClick={handleCloseDropdown}
                  >
                    Szkoła średnia
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-expand">
              <span onClick={() => handleDropdownToggle("secondDropdown")}>
                Szkolenia
                <Image
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={9}
                  width={16}
                  className={`arrow-img ${
                    activeDropdown === "secondDropdown" ? "rotate" : ""
                  }`}
                />
              </span>
              <ul
                className={`nav-second-lvl ${
                  activeDropdown === "secondDropdown" ? "active" : ""
                }`}
              >
                <li>
                  <Link
                    href="#spotkania-z-rodzicami-i-kadra-pedagogiczna"
                    onClick={handleCloseDropdown}
                  >
                    Z rodzicami i/lub kadrą pedagogiczną
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#konsultacje" onClick={handleCloseDropdown}>
                Konsultacje
              </Link>
            </li>
            <li>
              <Link href="#skontaktuj-sie-ze-mna" onClick={handleCloseDropdown}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
