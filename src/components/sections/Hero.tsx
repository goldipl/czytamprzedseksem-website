import React from "react";
import heroVideo from "./../../../public/movie/background-movie.mp4";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video src={heroVideo} autoPlay muted loop className="hero-video">
        Your browser does not support the video tag.
      </video>
      <div className="hero-wrapper">
        <div className="hero-wrapper__text">
          <h1>Hubert Pajączkowski</h1>
          <div className="middle-text">
            <span>-</span>
            <h2>edukator seksualny</h2>
            <span>-</span>
          </div>
          <div className="hero-desc">
            <p>
              Współpracuję ze szkołami, organizacjami pozarządowymi, ośrodkami
              opiekuńczo-wychowawczymi i z klientami indywidualnymi.
            </p>
          </div>
          <Link href="#moje-projekty" className="button01">
            Sprawdź aktualności
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
