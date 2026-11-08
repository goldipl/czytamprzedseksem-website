import React from "react";
import TopicList, { Topic } from "@/components/common/TopicList";

const TOPICS: Topic[] = [
  {
    title: "Emocje",
    body: (
      <p>
        Rozpoznawanie i nazywanie odczuć, radzenie sobie z problemami,
        umiejętność szukania pomocy i wsparcia.
      </p>
    ),
  },
  {
    title: "Dojrzewanie – zmiany w ciele",
    body: (
      <>
        <p>
          Poznanie zmian, przez które przechodzą dorastające osoby.
          Zrozumienie, że każdy dojrzewa w indywidualnym tempie. Dbanie o
          higienę ciała i umysłu.
        </p>
        <p>
          <strong>Dojrzewanie z podziałem na grupy</strong> – pogłębienie
          tematów realizowanych wspólnie z całą klasą.
        </p>
      </>
    ),
  },
  {
    title: "Zapłodnienie i ciąża",
    body: (
      <p>
        Zrozumienie, na czym polegają zapłodnienie i ciąża oraz jakie są jej
        pierwsze symptomy.
      </p>
    ),
  },
  {
    title: "Stereotypy płciowe",
    body: (
      <p>
        Poznanie, czym są stereotypy, zauważenie tego, jak mogą oddziaływać na
        nasze życie, zrozumienie, że każdy człowiek to dużo więcej niż tylko
        to, co widać na pierwszy rzut oka.
      </p>
    ),
  },
];

const PrimarySchoolWorkshops = () => {
  return (
    <section
      id="dla-szkol-podstawowych"
      className="section section--paper program"
    >
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Warsztaty</p>
            <h2>Dla szkół podstawowych</h2>
          </div>
          <p className="section-head__lead">
            Zajęcia w ramach przedmiotu edukacja zdrowotna lub jako zajęcia
            dodatkowe.
          </p>
        </div>

        <TopicList topics={TOPICS} />

        <div className="program__more">
          <p className="program__more-label">Ponadto</p>
          <p>
            Zagadnienia związane z budowaniem relacji, pierwszymi zakochaniami,
            stawianiem granic, tożsamością płciową i seksualną, korzystaniem z
            internetu i pornografią.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrimarySchoolWorkshops;
