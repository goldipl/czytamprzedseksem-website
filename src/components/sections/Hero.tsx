import React from "react";
import Image from "next/image";
import heroVideo from "./../../../public/movie/background-movie.mp4";
import avatar from "./../../../public/img/avatar.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video src={heroVideo} autoPlay muted loop className="hero-video">
        Your browser does not support the video tag.
      </video>
      <div className="hero-wrapper">
        <Image src={avatar} alt="avatar" className="hero-wrapper__avatar" />
        <div className="hero-wrapper__text">
          <h1>Czytam przed seksem</h1>
          <h3>
            <span>-</span> Hubert Pajączkowski <span>-</span>
          </h3>
          <p>| Edukator seksualny |</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
