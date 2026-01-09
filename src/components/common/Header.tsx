import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../../../public/icons/header/logo.svg";
import menuDownIcon from "./../../../public/icons/header/menu-down-icon.svg";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openHamburger, setOpenHamburger] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const addBlockedWindow = () => {
    document.body.classList.add("blocked-body");
    document.documentElement.classList.add("blocked-body");
  };

  const removeBlockedWindow = () => {
    document.body.classList.remove("blocked-body");
    document.documentElement.classList.remove("blocked-body");
  };

  const handleCloseDropdown = () => {
    setActiveDropdown(null);
    setOpenHamburger(false);
    removeBlockedWindow();
  };

  const handleHamburgerMenu = () => {
    setOpenHamburger((prev) => !prev);
  };

  /** Lock body scroll on mobile menu */
  useEffect(() => {
    if (openHamburger) {
      addBlockedWindow();
    } else {
      removeBlockedWindow();
    }
  }, [openHamburger]);

  /** Close dropdown when clicking outside (desktop only) */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth > 992 &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
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
              <Link href="#o-mnie" onClick={handleCloseDropdown}>
                O mnie
              </Link>
            </li>
            <li>
              <Link href="#skontaktuj-sie" onClick={handleCloseDropdown}>
                Skontaktuj się
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
