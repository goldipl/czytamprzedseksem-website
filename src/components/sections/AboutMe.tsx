import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMeImg from "./../../../public/img/hubert/hubert02.jpg";
import BrownShapeNews01 from "./../../../public/shapes/brown-on-gold-shape01.jpg";
import BrownShapeNews02 from "./../../../public/shapes/brown-on-gold-shape03.jpg";

const AboutMe = () => {
  return (
    <section id="o-mnie" className="aboutme-section">
      <div className="aboutme-section-wrapper">
        <Image
          className="brown-shape-news01"
          src={BrownShapeNews01.src}
          loading="lazy"
          width={173}
          height={500}
          alt="Brązowy kształt"
        />
        <Image
          className="brown-shape-news02"
          src={BrownShapeNews02.src}
          loading="lazy"
          width={524}
          height={484}
          alt="Brązowy kształt"
        />
        <h2>O mnie</h2>
        <div className="img-text-wrapper">
          <div className="text-box">
            <div className="text-box-slot">
              <p>
                Jestem <strong>edukatorem seksualnym</strong>, absolwentem
                kierunku seksuologia praktyczna, koordynatorem projektów
                edukacyjnych, obecnie także w trakcie studiów psychologicznych.
              </p>
            </div>
            <div className="text-box-slot">
              <p>
                Prowadzę zajęcia w szkołach podstawowych oraz w liceach w ramach
                przedmiotu{" "}
                <strong>
                  edukacja zdrowotna (poprzednio wychowanie do życia w rodzinie)
                </strong>{" "}
                bądź jako zajęcia dodatkowe. Starannie selekcjonuję materiały,
                sam tworzę własne, jestem autorem scenariuszy zajęć. Prowadzę
                też szkolenia o seksualności dzieci i młodzieży dla rodziców i
                kadr pedagogicznych.
              </p>
            </div>
            <div className="text-box-slot">
              <p>
                Pracuję w Fundacji SEXEDPL skąd wspieram działania
                nauczycielskie, realizując projekty podejmujące temat
                seksualności dzieci i młodzieży. Prowadzę profil dla osób
                dorosłych na instagramie:{" "}
                <strong>
                  <Link
                    href="https://www.instagram.com/czytam_przedseksem/"
                    target="_blank"
                  >
                    @czytam_przedseksem
                  </Link>
                </strong>
                ,gdzie polecam książki związane z tematyką seksualności.
              </p>
            </div>
          </div>
          <div className="img-box">
            <Image src={AboutMeImg.src} alt="O mnie" width={240} height={240} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
