import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutMeImg from "./../../../public/img/o_mnie.jpg";
import GoldShape01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShape02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";

const AboutMe = () => {
  return (
    <section id="aboutme-section" className="aboutme-section">
      <div className="aboutme-section-wrapper">
        <Image
          className="golden-shape01"
          src={GoldShape01.src}
          width={224}
          height={300}
          alt="Brązowy kształt"
        />
        <Image
          className="golden-shape02"
          src={GoldShape02.src}
          width={124}
          height={400}
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
                  <Link href="https://www.instagram.com/czytam_przedseksem/">
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
