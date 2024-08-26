import Image from "next/image";
import React from "react";
import Link from "next/link";
import newsImg01 from "./../../../public/img/news/Fake-kNOw-more-wplyw-emocji-na-dezinformacje.jpg";
import newsImg02 from "./../../../public/img/news/love-hate-relationship-z-tinderem.jpg";
import newsImg03 from "./../../../public/img/news/Mamy-Czas-Kartkowka-z-WDZ.png";
import BrownShapeNews01 from "./../../../public/shapes/brown-on-gold-shape01.jpg";
import BrownShapeNews02 from "./../../../public/shapes/brown-on-gold-shape03.jpg";

const News = () => {
  return (
    <section id="news-section" className="news-section">
      <div className="news-section-wrapper">
        <h2>Moje projekty</h2>
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
        <div className="news-box">
          <div className="news-box-slot">
            <Link
              href="https://www.youtube.com/watch?v=NahyRycwWE4"
              target="_blank"
            >
              <Image
                src={newsImg01.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Fake kNOw more: Jak emocje wpływają na podatność na dezinformację?"
              />
              <div className="news-box-slot__title">
                <h3>
                  Fake kNOw more: Jak emocje wpływają na podatność na
                  dezinformację?
                </h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://magazynpismo.pl/idee/strategie-przetrwania/love-hate-relationship-z-tinderem/"
              target="_blank"
            >
              <Image
                src={newsImg02.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Love-hate relationship z Tinderem"
              />
              <div className="news-box-slot__title">
                <h3>Love-hate relationship z Tinderem</h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://radioram.pl/articles/view/53601/Mamy-Czas-Kartkowka-z-WDZ"
              target="_blank"
            >
              <Image
                src={newsImg03.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Mamy Czas: Kartkówka z WDŻ"
              />
              <div className="news-box-slot__title">
                <h3>Mamy Czas: Kartkówka z WDŻ</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
