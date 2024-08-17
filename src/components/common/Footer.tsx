import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <p>Czytam przed seksem - Hubert Pajączkowski © {currentYear}</p>
        <span>
          Projekt i realizacja:
          <Link href="https://mgodlewskidev.pl/" target="_blank">
            mgodlewskidev.pl
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
