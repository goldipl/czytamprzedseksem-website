import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import sexedImg from "./../../../public/img/cooperation/sexedpl.png";
import czescCialoImg from "./../../../public/img/cooperation/czesc-cialo.jpg";
import rozowaSkrzyneczka from "./../../../public/img/cooperation/rozowa-skrzyneczka.png";
import poleDialogu from "./../../../public/img/cooperation/fundacja-pole-dialogu.png";

const PARTNERS: { name: string; href: string; logo: StaticImageData }[] = [
  { name: "SEXEDPL", href: "https://sexed.pl/", logo: sexedImg },
  { name: "Cześć Ciało", href: "https://www.czesccialo.pl/", logo: czescCialoImg },
  {
    name: "Różowa Skrzyneczka",
    href: "https://rozowaskrzyneczka.pl/",
    logo: rozowaSkrzyneczka,
  },
  {
    name: "Fundacja Pole Dialogu",
    href: "https://poledialogu.org.pl/",
    logo: poleDialogu,
  },
];

const Cooperation = () => {
  return (
    <section id="wspolpraca" className="section section--sand cooperation">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Partnerzy</p>
            <h2>Współpracowali ze mną</h2>
          </div>
        </div>
        <ul className="partners">
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={partner.logo}
                  loading="lazy"
                  sizes="(max-width: 860px) 50vw, 280px"
                  alt={partner.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cooperation;
