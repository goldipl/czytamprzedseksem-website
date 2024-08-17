import Image from "next/image";
import React from "react";
import Link from "next/link";
import newsImg01 from "./../../../public/img/news/Fake-kNOw-more-wplyw-emocji-na-dezinformacje.jpg";
import newsImg02 from "./../../../public/img/news/love-hate-relationship-z-tinderem.jpg";
import newsImg03 from "./../../../public/img/news/Mamy-Czas-Kartkowka-z-WDZ.png";

const News = () => {
  return (
    <section id="news-section" className="news-section">
      <div className="news-section-wrapper">
        <h2>Aktualności</h2>
        <div className="news-box">
          <div className="news-box-slot">
            <Link href="https://www.youtube.com/watch?v=NahyRycwWE4">
              <Image
                src={newsImg01.src}
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
            <Link href="https://magazynpismo.pl/idee/strategie-przetrwania/love-hate-relationship-z-tinderem/">
              <Image
                src={newsImg02.src}
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
            <Link href="https://radioram.pl/articles/view/53601/Mamy-Czas-Kartkowka-z-WDZ">
              <Image
                src={newsImg03.src}
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
