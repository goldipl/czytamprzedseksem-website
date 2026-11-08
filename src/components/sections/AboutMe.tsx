import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMeImg from "./../../../public/img/hubert/hubert03.jpg";

const AboutMe = () => {
  return (
    <section id="o-mnie" className="section section--paper about">
      <div className="container about__grid">
        <figure className="photo about__media">
          <Image
            src={AboutMeImg}
            loading="lazy"
            sizes="(max-width: 860px) 440px, 40vw"
            alt="Hubert Pajączkowski prowadzi zajęcia na świeżym powietrzu, pokazując ilustrację"
          />
        </figure>

        <div>
          <p className="kicker">O mnie</p>
          <h2>Hubert Pajączkowski</h2>
          <div className="prose">
            <p>
              Jestem <strong>edukatorem seksualnym</strong>, absolwentem
              kierunku seksuologia praktyczna, koordynatorem projektów
              edukacyjnych, obecnie także w trakcie studiów psychologicznych.
            </p>
            <p>
              Prowadzę zajęcia w szkołach podstawowych oraz w liceach w ramach
              przedmiotu{" "}
              <strong>
                edukacja zdrowotna (poprzednio wychowanie do życia w rodzinie)
              </strong>{" "}
              bądź jako zajęcia dodatkowe. Starannie selekcjonuję materiały,
              sam tworzę własne, jestem autorem scenariuszy zajęć. Prowadzę też
              szkolenia o seksualności dzieci i młodzieży dla rodziców i kadr
              pedagogicznych.
            </p>
            <p>
              Pracuję w Fundacji SEXEDPL, skąd wspieram działania
              nauczycielskie, realizując projekty podejmujące temat seksualności
              dzieci i młodzieży. Prowadzę profil dla osób dorosłych na
              Instagramie{" "}
              <Link
                href="https://www.instagram.com/czytam_przedseksem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @czytam_przedseksem
              </Link>
              , gdzie polecam książki związane z tematyką seksualności.
            </p>
          </div>

          <dl className="facts">
            <div>
              <dt>Wykształcenie</dt>
              <dd>seksuologia praktyczna; w trakcie studiów psychologicznych</dd>
            </div>
            <div>
              <dt>Praca</dt>
              <dd>Fundacja SEXEDPL — projekty edukacyjne</dd>
            </div>
            <div>
              <dt>Autor</dt>
              <dd>scenariuszy i materiałów do zajęć</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
