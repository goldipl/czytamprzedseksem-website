import Link from "next/link";
import React from "react";
import logo from "./../../public/icons/logo.svg";

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
            <li>
              <Link href="">Warsztaty</Link>
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
