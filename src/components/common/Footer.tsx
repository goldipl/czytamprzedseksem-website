import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container footer__inner">
        <p>© {currentYear} Czytam przed seksem — Hubert Pajączkowski</p>
        <p>
          Projekt i realizacja:{" "}
          <Link href="https://mgodlewskidev.pl/" target="_blank">
            mgodlewskidev.pl
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
