import React from "react";
import Image from "next/image";
import GoldShapeWorkshop01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShapeWorkshop02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";
import Photo02 from "./../../../public/img/photos/photos02.jpg";
import Photo03 from "./../../../public/img/photos/photos03.jpg";
import Link from "next/link";

const Workshops = () => {
  return (
    <section id="workshops-section" className="workshops-section">
      <div className="workshops-section-wrapper">
        <h2>Warsztaty</h2>
        <Image
          className="golden-shape-workshops01"
          src={GoldShapeWorkshop01.src}
          loading="lazy"
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <Image
          className="golden-shape-workshops02"
          src={GoldShapeWorkshop02.src}
          loading="lazy"
          width={124}
          height={400}
          alt="Złoty kształt"
        />

        <div className="img-text-wrapper">
          <div className="text-box">
            <div className="text-box-slot">
              <p>
                <strong>
                  Dojrzewanie to okres kluczowych zmian w życiu młodej osoby.
                  Obejmuje zmiany na poziomie fizjologicznym, poznawczym,
                  behawioralnym, intelektualnym, emocjonalnym oraz relacyjnym.
                </strong>
              </p>
            </div>
            <div className="text-box-slot">
              <p>
                Edukacja seksualna to tak naprawdę{" "}
                <strong>profilaktyka zdrowotna</strong>. Na moich zajęciach
                podkreślam, że <strong>seksualność</strong> to nie tylko
                zdolność do odbycia stosunku płciowego. W jej ramach mieści się
                zdecydowanie więcej, począwszy od potrzeby bliskości,
                zrozumienia i akceptacji, poprzez umiejętność tworzenia relacji
                i akceptacji swojego ciała, tożsamości płciowej i seksualnej.
              </p>
            </div>
          </div>
          <div className="img-box">
            <Image
              className="workshop-bottom-img"
              loading="lazy"
              src={Photo02.src}
              width={280}
              height={320}
              alt="Hubert Pajączkowski - warsztaty"
            />
          </div>
        </div>

        <div className="img-text-wrapper reverted">
          <div className="text-box">
            <div className="text-box-slot">
              <p>
                Zajęcia prowadzę formą warsztatową. Dbam o przekazywanie treści
                zgodnych z obecnymi osiągnięciami badań naukowych. Chcę
                wyposażyć młodych ludzi w <strong>rzetelne informacje</strong>,
                jednocześnie aktywizując grupę i inicjując dyskusję. Nie straszę
                seksualnością, mówię o niej jako o ważnej i pozytywnej części
                naszego życia, nie pomijając również zagrożeń i trudności, które
                mogą jej dotyczyć.
              </p>
            </div>
            <div className="text-box-slot">
              <p>
                Formę warsztatów dostosowuję do indywidualnych potrzeb placówki,
                ale rekomenduję cykl składający się z co najmniej 6 spotkań.
                Pierwsze spotkanie jest spotkaniem zapoznawczym i integracyjnym.
                Godzinę pracy wyceniam na 150 zł netto.{" "}
                <strong>
                  <Link href="#skontaktuj-sie-ze-mna">
                    Pełną ofertę cenową przygotowuję indywidualnie
                  </Link>
                </strong>
                . W cenie mieści się przygotowanie przed warsztatami oraz
                materiały dla osób uczestniczących.
              </p>
            </div>
          </div>
          <div className="img-box">
            <Image
              className="workshop-bottom-img"
              loading="lazy"
              src={Photo03.src}
              width={280}
              height={320}
              alt="Hubert Pajączkowski - warsztaty"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
