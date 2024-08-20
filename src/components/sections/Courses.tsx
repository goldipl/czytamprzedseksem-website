import React from "react";
import Image from "next/image";
import GoldenShapeCourses01 from "./../../../public/shapes/brown-on-gold-shape01.jpg";
import HubertImg03 from "./../../../public/img/hubert/hubert03.jpg";
import HubertImg01 from "./../../../public/img/hubert/hubert01.jpg";

const Courses = () => {
  return (
    <section id="courses-section" className="courses-section">
      <div className="courses-section-wrapper">
        <h2>SPOTKANIA Z RODZICAMI I KADRĄ PEDAGOGICZNĄ</h2>
        <Image
          className="brown-shape-courses01"
          loading="lazy"
          src={GoldenShapeCourses01.src}
          width={173}
          height={500}
          alt="Brązowy kształt"
        />
        <div className="img-text-wrapper">
          <div className="text-box dark-text">
            <div className="text-box-slot">
              <p>
                Spotkania dla rodziców i nauczycieli prowadzę w formie szkolenia
                połączonego z dyskusją. Temat zazwyczaj jest wybierany w
                porozumieniu z rodzicami i szkołą. Najczęściej proponowane
                zagadnienia to pornografia, dojrzewanie, relacje, tożsamość
                płciowa i seksualna. Spotkanie realizowane jest w formie 2
                godzin zegarowych.
              </p>
            </div>
          </div>
          <div className="img-box">
            <Image
              src={HubertImg03.src}
              loading="lazy"
              alt="O mnie"
              width={360}
              height={240}
            />
          </div>
        </div>

        <h2>KONSULTACJE INDYWIDUALNE</h2>
        <div className="img-text-wrapper reversed">
          <div className="img-box">
            <Image
              src={HubertImg01.src}
              loading="lazy"
              alt="O mnie"
              width={360}
              height={240}
            />
          </div>
          <div className="text-box dark-text">
            <div className="text-box-slot">
              <p>
                Konsultacje indywidualne prowadzę dla dzieci, młodzieży i osób
                dorosłych.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
