import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <p>Czytam przed seksem - Hubert Pajączkowski © {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
