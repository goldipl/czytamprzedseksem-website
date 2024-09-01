import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoldShapeAboutMe01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShapeAboutMe02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";
import sexedImg from "./../../../public/img/cooperation/sexedpl.png";
import czescCialoImg from "./../../../public/img/cooperation/czesc-cialo.jpg";
import aleImg from "./../../../public/img/cooperation/fundacja-ale.jpg";

const Cooperation = () => {
  return (
    <section id="wspolpraca" className="cooperation-section">
      <div className="cooperation-section-wrapper">
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
