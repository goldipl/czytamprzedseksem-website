import React from "react";
import Image from "next/image";
import BrownShapePrimarySchoolWorkshop01 from "./../../../public/shapes/brown-on-gold-shape03.jpg";

const PrimarySchoolWorkshops = () => {
  return (
    <section id="primaryschool-section" className="primaryschool-section">
      <div className="primaryschool-section-wrapper">
        <h2>Dla szkół podstawowych</h2>
        <Image
          className="golden-shape-workshops01"
          src={BrownShapePrimarySchoolWorkshop01.src}
          width={224}
          height={300}
          alt="Miedziany kształt"
        />
        <Image
          className="golden-shape-workshops02"
          src={BrownShapePrimarySchoolWorkshop01.src}
          width={224}
          height={300}
          alt="Miedziany kształt"
        />
        <div className="vert-box">
          <div className="vert-box-slot">
            <h4>
              <strong>Emocje</strong>
            </h4>
            <p>
              rozpoznawanie i nazywanie odczuć, radzenie sobie z problemami,
              umiejętność szukania pomocy i wsparcia
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Dojrzewanie - zmiany w ciele</strong>
            </h4>
            <p>
              poznanie zmian, przez które przechodzą dorastające osoby.
              Zrozumienie, że każdy dojrzewa w indywidualnym tempie. Dbanie o
              higienę ciała i umysłu.
            </p>
            <p>
              <strong>Dojrzewanie z podziałem na grupy</strong> - pogłębienie
              tematów realizowanych wspólnie z całą klasą.
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Zapłodnienie i ciąża</strong>
            </h4>
            <p>
              zrozumienie, na czym polegają zapłodnienie i ciąża oraz jakie są
              jej pierwsze symptomy.
            </p>
          </div>
          <div className="vert-box-slot">
            <h4>
              <strong>Stereotypy płciowe</strong>
            </h4>
            <p>
              poznanie czym są stereotypy, zauważenie tego jak mogą oddziaływać
              na nasze życie, zrozumienie, że każdy człowiek to dużo więcej niż
              tylko to, co widać na pierwszy rzut oka.
            </p>
          </div>
          <div className="vert-box-slot">
            <p>
              Zagadnienia związane z budowaniem relacji, pierwszymi
              zakochaniami, stawianiem granic, tożsamością płciową i seksualną,
              korzystaniem z internetu i pornografią.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrimarySchoolWorkshops;
