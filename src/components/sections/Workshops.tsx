import React from "react";
import Image from "next/image";
import Link from "next/link";
import Photo01 from "./../../../public/img/photos/photos01.jpg";
import Photo02 from "./../../../public/img/photos/photos02.jpg";
import Photo03 from "./../../../public/img/photos/photos03.jpg";

const Workshops = () => {
  return (
    <section id="warsztaty" className="section section--sand workshops">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Dla szkół i placówek</p>
            <h2>Warsztaty</h2>
          </div>
          <p className="section-head__lead">
            Dojrzewanie to okres kluczowych zmian w życiu młodej osoby. Obejmuje
            zmiany na poziomie fizjologicznym, poznawczym, behawioralnym,
            intelektualnym, emocjonalnym oraz relacyjnym.
          </p>
        </div>

        <div className="workshops__body">
          <div className="prose workshops__text">
            <p>
              Edukacja seksualna to tak naprawdę{" "}
              <strong>profilaktyka zdrowotna</strong>. Na moich zajęciach
              podkreślam, że <strong>seksualność</strong> to nie tylko zdolność
              do odbycia stosunku płciowego. W jej ramach mieści się
              zdecydowanie więcej, począwszy od potrzeby bliskości, zrozumienia
              i akceptacji, poprzez umiejętność tworzenia relacji i akceptacji
              swojego ciała, tożsamości płciowej i seksualnej.
            </p>
            <p>
              Zajęcia prowadzę formą warsztatową. Dbam o przekazywanie treści
              zgodnych z obecnymi osiągnięciami badań naukowych. Chcę wyposażyć
              młodych ludzi w <strong>rzetelne informacje</strong>, jednocześnie
              aktywizując grupę i inicjując dyskusję. Nie straszę seksualnością,
              mówię o niej jako o ważnej i pozytywnej części naszego życia, nie
              pomijając również zagrożeń i trudności, które mogą jej dotyczyć.
            </p>
            <p>
              Formę warsztatów dostosowuję do indywidualnych potrzeb placówki,
              ale rekomenduję cykl składający się z co najmniej 6 spotkań.
              Pierwsze spotkanie jest spotkaniem zapoznawczym i integracyjnym.
            </p>
          </div>

          <aside className="workshops__aside" aria-label="Informacje praktyczne">
            <h3>Informacje praktyczne</h3>
            <dl className="facts">
              <div>
                <dt>Stawka</dt>
                <dd>200 zł brutto za godzinę pracy</dd>
              </div>
              <div>
                <dt>Cykl</dt>
                <dd>rekomendowany: co najmniej 6&nbsp;spotkań</dd>
              </div>
              <div>
                <dt>W cenie</dt>
                <dd>
                  przygotowanie przed warsztatami oraz materiały dla osób
                  uczestniczących
                </dd>
              </div>
              <div>
                <dt>Rozliczenie</dt>
                <dd>wystawiam faktury</dd>
              </div>
            </dl>
            <p className="workshops__note">
              Pełną ofertę cenową przygotowuję indywidualnie.
            </p>
            <Link href="#skontaktuj-sie" className="btn btn--primary">
              Zapytaj o ofertę{" "}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </aside>
        </div>

        <div className="workshops__gallery">
          <figure className="photo">
            <Image
              src={Photo02}
              loading="lazy"
              sizes="(max-width: 860px) 50vw, 400px"
              alt="Tablica z karteczkami uczniów wokół napisu „Dzięki mojemu ciału mogę…”"
            />
            <figcaption>Ćwiczenie „Dzięki mojemu ciału mogę…”</figcaption>
          </figure>
          <figure className="photo">
            <Image
              src={Photo03}
              loading="lazy"
              sizes="(max-width: 860px) 50vw, 400px"
              alt="Kolorowe klocki i piłeczki z hasłami zapisanymi przez uczestników warsztatów"
            />
            <figcaption>Pomoce warsztatowe</figcaption>
          </figure>
          <figure className="photo">
            <Image
              src={Photo01}
              loading="lazy"
              sizes="(max-width: 860px) 100vw, 400px"
              alt="Laurka od uczniów z podpisami „Hubert”, „fajny”, „git”"
            />
            <figcaption>Laurka od uczestników zajęć</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
