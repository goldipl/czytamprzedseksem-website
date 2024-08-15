import React from "react";
import book from "./../../public/img/book.png";

const Hero = () => {
  return (
    <div>
      <img src={book.src} alt="Czytam przed seksem" width={160} height={160} />
      <h1>Czytam przed seksem</h1>
    </div>
  );
};

export default Hero;
