import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoldShapeCooperation01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShapeCooperation02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";
import sexedImg from "./../../../public/img/cooperation/sexedpl.png";
import czescCialoImg from "./../../../public/img/cooperation/czesc-cialo.jpg";
import aleImg from "./../../../public/img/cooperation/fundacja-ale.jpg";

const Cooperation = () => {
  return (
    <section id="cooperation-section" className="cooperation-section">
      <div className="cooperation-section-wrapper">
        <Image
          className="golden-shape-cooperation01"
          loading="lazy"
          src={GoldShapeCooperation01.src}
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <Image
          className="golden-shape-cooperation02"
          loading="lazy"
          src={GoldShapeCooperation02.src}
          width={124}
          height={400}
          alt="Złoty kształt"
        />
        <h2>Współpracowali ze mną</h2>
        <div className="imglinks-box">
          <div className="imglinks-box-slot">
            <Link href="https://sexed.pl/" target="_blank">
              <Image
                src={sexedImg.src}
                loading="lazy"
                width={300}
                height={300}
                alt="sexed"
              />
            </Link>
          </div>
          <div className="imglinks-box-slot">
            <Link href="https://www.czesccialo.pl/" target="_blank">
              <Image
                src={czescCialoImg.src}
                loading="lazy"
                width={300}
                height={300}
                alt="sexed"
              />
            </Link>
          </div>
          <div className="imglinks-box-slot">
            <Link href="https://alefundacja.pl/" target="_blank">
              <Image
                src={aleImg.src}
                loading="lazy"
                width={300}
                height={300}
                alt="sexed"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
