import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "./../../../public/img/hubert/hubert02.jpg";
import heroVideo from "./../../../public/movie/background-movie.mp4";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="kicker">Edukator seksualny</p>
            <h1>
              <span>Hubert</span> <span>Pajączkowski</span>
            </h1>
            <p className="hero__lead">
              Współpracuję ze szkołami, organizacjami pozarządowymi, ośrodkami
              opiekuńczo-wychowawczymi i z klientami indywidualnymi.
            </p>
            <div className="hero__actions">
              <Link href="#skontaktuj-sie" className="btn btn--gold">
                Zapytaj o zajęcia{" "}
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="#moje-projekty" className="btn btn--outline-light">
                Sprawdź aktualności
              </Link>
            </div>
          </div>

          <figure className="hero__figure">
            <div className="hero__media">
              <Image
                src={heroImg}
                alt="Hubert Pajączkowski z książką w dłoni"
                priority
                sizes="(max-width: 860px) 360px, 400px"
              />
            </div>
            <figcaption className="hero__caption">
              Książki o seksualności polecam na{" "}
              <Link
                href="https://www.instagram.com/czytam_przedseksem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @czytam_przedseksem
              </Link>
            </figcaption>
          </figure>
        </div>

        <ul className="hero__facts">
          <li>
            <strong>Szkoły podstawowe i średnie</strong>
            <span>warsztaty w ramach edukacji zdrowotnej</span>
          </li>
          <li>
            <strong>Rodzice i kadra</strong>
            <span>szkolenia połączone z dyskusją</span>
          </li>
          <li>
            <strong>Konsultacje</strong>
            <span>dla dzieci, młodzieży i osób dorosłych</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
