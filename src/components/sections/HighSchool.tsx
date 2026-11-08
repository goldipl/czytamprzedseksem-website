import React from "react";
import TopicList, { Topic } from "@/components/common/TopicList";

const TOPICS: Topic[] = [
  {
    title: "Kilka słów o dojrzewaniu",
    body: (
      <p>
        Czym jest dojrzewanie i jakie są jego fazy? Jak dojrzewają dziewczyny,
        a jak chłopcy? Jakie emocje i uczucia towarzyszą dojrzewaniu? Jak
        zmienia się ciało? Jak o siebie dbać w tym okresie? Dojrzewanie płciowe
        a dojrzewanie psychiczne i emocjonalne.
      </p>
    ),
  },
  {
    title: "Budowanie relacji",
    body: (
      <p>
        Czym jest miłość, przyjaźń, zaufanie, zdrowa i niezdrowa relacja, troska
        o siebie i drugą osobę oraz jak wyznaczać granice? Jak seksualność wiąże
        się z miłością?
      </p>
    ),
  },
  {
    title: "Menstruacja",
    body: (
      <p>
        Czym jest cykl miesięczny? Jak dbać o higienę narządów płciowych? Jakich
        artykułów menstruacyjnych używać? Kiedy pierwszy raz pójść do
        ginekologa/ginekolożki?
      </p>
    ),
  },
  {
    title: "Zapłodnienie, ciąża i antykoncepcja",
    body: (
      <p>
        Jak okres dojrzewania przygotowuje nasze ciała na możliwość
        zapłodnienia, a w następstwie do ciąży? Jak wygląda proces
        reprodukcyjny? Będę miał/a dziecko, czyli jak zmieni się moje życie?
        Czego dziecko oczekuje od swoich rodziców? Co to znaczy być dobrym
        rodzicem? Jakie są środki antykoncepcyjne?
      </p>
    ),
  },
  {
    title: "Płeć, tożsamość, orientacja psychoseksualna",
    body: (
      <p>
        Jaki wizerunek kobiety i mężczyzny kreują media i popkultura? Czym są
        stereotypy płci? Czym jest i na jakim etapie rozwoju człowieka
        kształtuje się tożsamość seksualna? Konsekwencje homo-, trans- i
        bifobii.
      </p>
    ),
  },
  {
    title: "Obraz ciała",
    body: (
      <p>
        Jak postrzegamy nasze ciała, a jak postrzegają je inni? Jaki obraz ciała
        widzimy w sieci i w reklamach i jak to na nas wpływa? Jak budować
        pozytywny obraz ciała?
      </p>
    ),
  },
  {
    title: "Znam swoje prawa",
    body: (
      <p>
        Kiedy według prawa można podejmować kontakty seksualne? Jak prawo chroni
        osoby niepełnoletnie? Gdzie szukać pomocy? Gdzie zgłaszać nadużycia i
        przestępstwa? Czy w moim życiu jest zaufana osoba dorosła, z którą mogę
        swobodnie porozmawiać na każdy temat?
      </p>
    ),
  },
  {
    title: "Infekcje przenoszone drogą płciową",
    body: (
      <p>
        Podstawowe czynniki ryzyka przy podejmowaniu aktywności seksualnych,
        typy infekcji, o tym, jak rozpoznać infekcję, jak wygląda profilaktyka,
        a jak leczenie infekcji.
      </p>
    ),
  },
];

const HighSchoolWorkshops = () => {
  return (
    <section
      id="dla-szkol-srednich"
      className="section section--burgundy program"
    >
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Warsztaty</p>
            <h2>Dla szkół średnich</h2>
          </div>
          <p className="section-head__lead">
            Formę i zakres zajęć dostosowuję do indywidualnych potrzeb
            placówki.
          </p>
        </div>

        <TopicList topics={TOPICS} />
      </div>
    </section>
  );
};

export default HighSchoolWorkshops;
