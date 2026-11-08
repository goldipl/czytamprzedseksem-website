import React from "react";
import Image from "next/image";
import Link from "next/link";
import HubertImg01 from "./../../../public/img/hubert/hubert01.jpg";

const COMMON_TOPICS = [
  "pornografia",
  "dojrzewanie",
  "relacje",
  "tożsamość płciowa i seksualna",
];

const Courses = () => {
  return (
    <section
      id="spotkania-z-rodzicami-i-kadra-pedagogiczna"
      className="section section--paper courses"
    >
      <div className="container">
        <div className="courses__grid">
          <figure className="photo courses__media">
            <Image
              src={HubertImg01}
              loading="lazy"
              sizes="(max-width: 860px) 440px, 40vw"
              alt="Hubert Pajączkowski w sali, w tle plansza z rysunkiem sylwetki człowieka"
            />
          </figure>

          <div>
            <p className="kicker">Szkolenia</p>
            <h2>Spotkania z rodzicami i/lub kadrą pedagogiczną</h2>
            <div className="prose">
              <p>
                Spotkania dla rodziców i nauczycieli prowadzę w formie
                szkolenia połączonego z dyskusją. Temat zazwyczaj jest wybierany
                w porozumieniu z rodzicami i szkołą.
              </p>
            </div>

            <h3 className="courses__subhead">
              Najczęściej proponowane zagadnienia
            </h3>
            <ul className="tags">
              {COMMON_TOPICS.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            <dl className="facts">
              <div>
                <dt>Czas trwania</dt>
                <dd>2 godziny zegarowe</dd>
              </div>
              <div>
                <dt>Forma</dt>
                <dd>szkolenie połączone z dyskusją</dd>
              </div>
            </dl>
          </div>
        </div>

        <div id="konsultacje" className="consult">
          <div>
            <p className="kicker">Konsultacje</p>
            <h2>Konsultacje indywidualne</h2>
          </div>
          <p>
            Konsultacje indywidualne prowadzę dla dzieci, młodzieży i osób
            dorosłych.
          </p>
          <Link href="#skontaktuj-sie" className="btn btn--primary">
            Umów konsultację{" "}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
