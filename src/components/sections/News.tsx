import Image from "next/image";
import React from "react";
import Link from "next/link";
import newsImg01 from "./../../../public/img/news/Fake-kNOw-more-wplyw-emocji-na-dezinformacje.jpg";
import newsImg02 from "./../../../public/img/news/love-hate-relationship-z-tinderem.jpg";
import newsImg03 from "./../../../public/img/news/Mamy-Czas-Kartkowka-z-WDZ.png";
import newsImg04 from "./../../../public/img/news/first-date.jpg";
import newsImg05 from "./../../../public/img/news/czy-edukacja-zdrowotna-bedzie-obowiazkowa-od-2025-roku.jpg";
import newsImg06 from "./../../../public/img/news/rozpoznawanie-wlasnych-granic-i-umiejetnosc-ich-egzekwowania.jpg";
import GoldShapeCooperation01 from "./../../../public/shapes/gold-on-brown-shape01.jpg";
import GoldShapeCooperation02 from "./../../../public/shapes/gold-on-brown-shape02.jpg";
import newsImg07 from "./../../../public/img/news/cialo-to-nie-tabu-to-rzeczywistosc.jpg";
import newsImg08 from "./../../../public/img/news/jak-wyglada-dojrzewanie-sexed.jpg";
import newsImg09 from "./../../../public/img/news/eksperci-obalaja-mity-na-temat-hpv.jpg";

const News = () => {
  return (
    <section id="moje-projekty" className="news-section">
      <div className="news-section-wrapper">
        <h2>Moje projekty</h2>
        <Image
          className="golden-shape-cooperation01"
          loading="lazy"
          src={GoldShapeCooperation01.src}
          width={224}
          height={300}
          alt="Złoty kształt"
        />
        <Image
          className="golden-shape-cooperation02"
          loading="lazy"
          src={GoldShapeCooperation02.src}
          width={124}
          height={400}
          alt="Złoty kształt"
        />
        <div className="news-box">
          <div className="news-box-slot">
            <Link
              href="https://www.youtube.com/watch?v=ItWa17-zb2o"
              target="_blank"
            >
              <Image
                src={newsImg09.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Kiedy najlepiej szczepić przeciw HPV? `Zaszczepiłam syna jak miał 13 lat`"
              />
              <div className="news-box-slot__title">
                <h3>
                  Kiedy najlepiej szczepić przeciw HPV? `Zaszczepiłam syna jak
                  miał 13 lat`
                </h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://www.youtube.com/watch?v=6OY9AhPewzs"
              target="_blank"
            >
              <Image
                src={newsImg08.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Jak wygląda dojrzewanie? - Hubert Pajączkowski | SEXEDPL"
              />
              <div className="news-box-slot__title">
                <h3>
                  Jak wygląda dojrzewanie? - Hubert Pajączkowski | SEXEDPL
                </h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://www.youtube.com/watch?v=Ci-cJAWg7ss"
              target="_blank"
            >
              <Image
                src={newsImg07.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Hubert Pajączkowski, Wojtek Papuziński: Ciało to nie tabu – to rzeczywistość [PODCAST]"
              />
              <div className="news-box-slot__title">
                <h3>
                  Hubert Pajączkowski, Wojtek Papuziński: Ciało to nie tabu – to
                  rzeczywistość [PODCAST]
                </h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://www.youtube.com/watch?v=QBFsc7Ev3nw"
              target="_blank"
            >
              <Image
                src={newsImg06.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Rozpoznawanie własnych granic i umiejętność ich egzekwowania"
              />
              <div className="news-box-slot__title">
                <h3>
                  Rozpoznawanie własnych granic i umiejętność ich egzekwowania
                </h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://sexed.pl/czy-edukacja-zdrowotna-bedzie-obowiazkowa-od-2025-roku/"
              target="_blank"
            >
              <Image
                src={newsImg05.src}
                loading="lazy"
                width={600}
                height={315}
                alt="Czy edukacja zdrowotna będzie obowiązkowa od 2025 roku?"
              />
              <div className="news-box-slot__title">
                <h3>Czy edukacja zdrowotna będzie obowiązkowa od 2025 roku?</h3>
              </div>
            </Link>
          </div>
          <div className="news-box-slot">
            <Link
              href="https://www.vogue.pl/a/o-czym-rozmawiac-na-pierwszej-rance-by-poznac-druga-osobe-i-uniknac-krepujacej-ciszy"
              target="_blank"
            >
              <Image
                src={newsImg04.src}
                loading="lazy"
                width={600}
                height={315}
                alt="O czym rozmawiać na pierwszej randce, by była udana"
              />
              <div className="news-box-slot__title">
                <h3>O czym rozmawiać na pierwszej randce, by była udana</h3>
              </div>
            </Link>
          </div>
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
        <h2>Edukacyjne shorty</h2>
        <div className="shorts-box">
          <div className="shorts-box-slot">
            <iframe
              loading="lazy"
              width="340"
              height="620"
              src="https://www.youtube.com/embed/D8KNDnN5YKA?si=HMuU-A7gb8zpX50x"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="shorts-box-slot">
            <iframe
              loading="lazy"
              width="340"
              height="620"
              src="https://www.youtube.com/embed/Or0zWYbZk3s?si=Qqfv6j2-MGrpwOXr"
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
