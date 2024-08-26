import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrownShapeNews01 from "./../../../public/shapes/brown-on-gold-shape01.jpg";
import BrownShapeNews02 from "./../../../public/shapes/brown-on-gold-shape03.jpg";
import sexedImg from "./../../../public/img/cooperation/sexedpl.png";
import czescCialoImg from "./../../../public/img/cooperation/czesc-cialo.jpg";
import aleImg from "./../../../public/img/cooperation/fundacja-ale.jpg";

const Cooperation = () => {
  return (
    <section id="wspolpraca" className="cooperation-section">
      <div className="cooperation-section-wrapper">
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
