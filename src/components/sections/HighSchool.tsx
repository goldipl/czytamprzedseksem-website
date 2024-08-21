import React from "react";
import Image from "next/image";
import GoldShapeHighSchoolWorkshop01 from "./../../../public/shapes/gold-on-brown-shape02.jpg";

const HighSchoolWorkshops = () => {
  return (
    <section id="dla-szkol-srednich" className="highschool-section">
      <div className="highschool-section-wrapper">
        <h2>Dla szkół średnich</h2>
        <Image
          className="golden-shape-highschool01"
          src={GoldShapeHighSchoolWorkshop01.src}
          loading="lazy"
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <Image
          className="golden-shape-highschool02"
          src={GoldShapeHighSchoolWorkshop01.src}
          loading="lazy"
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <div className="vert-box light-version">
          <div className="vert-box-slot">
            <h4>
              <strong>Kilka słów o dojrzewaniu</strong>
            </h4>
            <p>
              Czym jest dojrzewanie i jakie są jego fazy? Jak dojrzewają
              dziewczyny, a jak chłopcy? Jakie emocje i uczucia towarzyszą
              dojrzewaniu? Jak zmienia się ciało? Jak o siebie dbać w tym
              okresie? Dojrzewanie płciowe a dojrzewanie psychiczne i
              emocjonalne.
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Budowanie relacji</strong>
            </h4>
            <p>
              Czym jest miłość, przyjaźń, zaufanie, zdrowa i niezdrowa relacja,
              troska o siebie i drugą osobę oraz jak wyznaczać granice? Jak
              seksualność wiąże się z miłością?
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Menstruacja</strong>
            </h4>
            <p>
              Czym jest cykl miesięczny? Jak dbać o higienę narządów płciowych?
              Jakich artykułów menstruacyjnych używać? Kiedy pierwszy raz pójść
              do ginekologa/ginekolożki?
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Zapłodnienie, ciąża i antykoncepcja</strong>
            </h4>
            <p>
              Jak okres dojrzewania przygotowuje nasze ciała na możliwość
              zapłodnienia, a w następstwie do ciąży? Jak wygląda proces
              reprodukcyjny? Będę miał/a dziecko, czyli jak zmieni się moje
              życie? Czego dziecko oczekuje od swoich rodziców? Co to znaczy być
              dobrym rodzicem? Jakie są środki antykoncepcyjne?
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Płeć, tożsamość, orientacja psychoseksualna</strong>
            </h4>
            <p>
              Jaki wizerunek kobiety i mężczyzny kreują media i popkultura? Czym
              są stereotypy płci? Czym jest i na jakim etapie rozwoju człowieka
              kształtuje się tożsamość seksualna? Konsekwencje homo, trans i
              bifobii.
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Obraz ciała</strong>
            </h4>
            <p>
              Jak postrzegamy nasze ciała, a jak postrzegają je inni? Jaki obraz
              ciała widzimy w sieci i w reklamach i jak to nas wpływa? Jak
              budować pozytywny obraz ciała?
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Znam swoje prawa</strong>
            </h4>
            <p>
              Kiedy według prawa można podejmować kontakty seksualne? Jak prawo
              chroni osoby niepełnoletnie? Gdzie szukać pomocy? Gdzie zgłaszać
              nadużycia i przestępstwa? Czy w moim życiu jest zaufana osoba
              dorosła, z którą mogę swobodnie porozmawiać na każdy temat?
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Infekcje przenoszone drogą płciową</strong>
            </h4>
            <p>
              Podstawowe czynniki ryzyka przy podejmowaniu aktywności
              seksualnych, typy infekcji, o tym jak rozpoznać infekcję, jak
              wygląda profilaktyka, a jak leczenie infekcji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighSchoolWorkshops;
