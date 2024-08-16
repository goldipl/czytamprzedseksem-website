import React from "react";
import heroVideo from "./../../public/movie/background-movie.mp4";
import avatar from "./../../public/img/avatar.jpg";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <video src={heroVideo} autoPlay muted loop className="hero-video">
        Your browser does not support the video tag.
      </video>
      <div className="hero-wrapper">
        <img src={avatar.src} alt="avatar" className="hero-wrapper__avatar" />
        <div className="hero-wrapper__text">
          <h1>Czytam przed seksem</h1>
          <h3>
            <span>-</span> Hubert Pajączkowski <span>-</span>
          </h3>
          <p>| Edukator seksualny |</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
