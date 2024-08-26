import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMeImg from "./../../../public/img/hubert/hubert02.jpg";
import GoldShapeAboutMe01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShapeAboutMe02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";

const AboutMe = () => {
  return (
    <section id="o-mnie" className="aboutme-section">
      <div className="aboutme-section-wrapper">
        <Image
          className="golden-shape-aboutme01"
          src={GoldShapeAboutMe01.src}
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <Image
          className="golden-shape-aboutme02"
          src={GoldShapeAboutMe02.src}
          width={124}
          height={400}
          alt="Złoty kształt"
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
                przedmiotu <strong>wychowanie do życia w rodzinie</strong> bądź
                jako zajęcia dodatkowe. Starannie selekcjonuję materiały, sam
                tworzę własne, jestem autorem scenariuszy zajęć. Prowadzę też
                szkolenia o seksualności dzieci i młodzieży dla rodziców i kadr
                pedagogicznych.
              </p>
            </div>
            <div className="text-box-slot">
              <p>
                Pracuję w Fundacji Szkoła z Klasą, gdzie wspieram działania
                nauczycielskie, realizując projekty podejmujące temat
                bezpieczeństwa w sieci i migracji. Prowadzę profil dla osób
                dorosłych na instagramie:{" "}
                <strong>
                  <Link
                    href="https://www.instagram.com/czytam_przedseksem/"
                    target="_blank"
                  >
                    @czytam_przedseksem
                  </Link>
                </strong>
                , gdzie polecam książki związane z tematyką seksualności.
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
