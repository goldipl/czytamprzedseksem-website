import Link from "next/link";
import React from "react";
import logo from "./../../public/icons/header/logo.svg";
import menuDownIcon from "./../../public/icons/header/menu-down-icon.svg";

const Header = () => {
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
          <ul>
            <li className="nav-expand">
              <span>
                Warsztaty{" "}
                <img
                  src={menuDownIcon.src}
                  alt="strzałka"
                  height={12}
                  width={20}
                />
              </span>
            </li>
            <li>
              <Link href="">Szkolenia</Link>
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
