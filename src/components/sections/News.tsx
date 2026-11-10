import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import newsImg01 from "./../../../public/img/news/Fake-kNOw-more-wplyw-emocji-na-dezinformacje.jpg";
import newsImg02 from "./../../../public/img/news/love-hate-relationship-z-tinderem.jpg";
import newsImg03 from "./../../../public/img/news/Mamy-Czas-Kartkowka-z-WDZ.png";
import newsImg04 from "./../../../public/img/news/first-date.jpg";
import newsImg05 from "./../../../public/img/news/czy-edukacja-zdrowotna-bedzie-obowiazkowa-od-2025-roku.jpg";
import newsImg06 from "./../../../public/img/news/rozpoznawanie-wlasnych-granic-i-umiejetnosc-ich-egzekwowania.jpg";
import newsImg07 from "./../../../public/img/news/cialo-to-nie-tabu-to-rzeczywistosc.jpg";
import newsImg08 from "./../../../public/img/news/jak-wyglada-dojrzewanie-sexed.jpg";
import newsImg09 from "./../../../public/img/news/eksperci-obalaja-mity-na-temat-hpv.jpg";
import newsImg10 from "./../../../public/img/news/jak-dojrzewaja-chlopcy.jpg";
import newsImg11 from "./../../../public/img/news/edukacja-zdrowotna-w-szkolach-czego-obawiaja-sie-rodzice.jpg";
import newsImg12 from "./../../../public/img/news/gdzie-konczy-sie-flirt-a-zaczyna-molestowanie.jpg";
import newsImg13 from "./../../../public/img/news/lekcje-bez-tabu-program-ambasadorski.jpg";
import newsImg14 from "./../../../public/img/news/edukacja-zdrowotna-bez-komponentu-o-zdrowiu-seksualnym.jpg";
import newsImg15 from "./../../../public/img/news/seksualizacja-nastolatek-w-popkulturze.jpg";

type Project = {
  href: string;
  image: StaticImageData;
  title: string;
  source: string;
  /** Publication date (Polish local time), YYYY-MM-DD */
  date: string;
};

const PROJECT_LIST: Project[] = [
  {
    href: "https://www.youtube.com/watch?v=ZmeJun5FaxE",
    image: newsImg10,
    title: "Chłopaki. Rozmowy o stawaniu się: Jak dojrzewają chłopcy",
    source: "Podcast",
    date: "2026-11-06",
  },
  {
    href: "https://sexed.pl/projekt-regulaminu-rekrutacji-i-uczestnictwa-w-programie-ambasadorskim-lekcje-bez-tabu-fundacji-sexedpl-x-swps/",
    image: newsImg13,
    title:
      "Projekt regulaminu rekrutacji i uczestnictwa w programie ambasadorskim „Lekcje bez tabu” Fundacji SEXEDPL x SWPS",
    source: "sexed.pl",
    date: "2026-10-12",
  },
  {
    href: "https://www.youtube.com/watch?v=IwHPjS8h1cg",
    image: newsImg11,
    title: "Edukacja zdrowotna w szkołach – czego obawiają się rodzice?",
    source: "Dzień Dobry TVN",
    date: "2026-09-17",
  },
  {
    href: "https://sexed.pl/edukacja-zdrowotna-bedzie-obowiazkowa-ale-bez-komponentu-o-zdrowiu-seksualnym/",
    image: newsImg14,
    title:
      "Edukacja zdrowotna będzie obowiązkowa, ale bez komponentu o zdrowiu seksualnym",
    source: "sexed.pl",
    date: "2026-04-09",
  },
  {
    href: "https://www.youtube.com/watch?v=jMljw1mwbIA",
    image: newsImg12,
    title: "Gdzie kończy się flirt, a zaczyna molestowanie | Sukces Pisany Szminką",
    source: "Podcast",
    date: "2026-03-04",
  },
  {
    href: "https://sexed.pl/czy-edukacja-zdrowotna-bedzie-obowiazkowa-od-2025-roku/",
    image: newsImg05,
    title: "Czy edukacja zdrowotna będzie obowiązkowa od 2025 roku?",
    source: "sexed.pl",
    date: "2025-08-27",
  },
  {
    href: "https://www.youtube.com/watch?v=Ci-cJAWg7ss",
    image: newsImg07,
    title:
      "Hubert Pajączkowski, Wojtek Papuziński: Ciało to nie tabu – to rzeczywistość",
    source: "Podcast",
    date: "2025-05-26",
  },
  {
    href: "https://www.youtube.com/watch?v=6OY9AhPewzs",
    image: newsImg08,
    title: "Jak wygląda dojrzewanie? – Hubert Pajączkowski | SEXEDPL",
    source: "YouTube",
    date: "2025-04-23",
  },
  {
    href: "https://www.youtube.com/watch?v=ItWa17-zb2o",
    image: newsImg09,
    title: "Kiedy najlepiej szczepić przeciw HPV? „Zaszczepiłam syna, jak miał 13 lat”",
    source: "YouTube",
    date: "2025-03-04",
  },
  {
    href: "https://www.youtube.com/watch?v=QBFsc7Ev3nw",
    image: newsImg06,
    title: "Rozpoznawanie własnych granic i umiejętność ich egzekwowania",
    source: "YouTube",
    date: "2025-01-16",
  },
  {
    href: "https://sexed.pl/seksualizacja-nastolatek-w-popkulturze/",
    image: newsImg15,
    title:
      "Seksualizacja nastolatek w popkulturze. Od Britney Spears po Millie Bobby Brown",
    source: "sexed.pl",
    date: "2024-09-01",
  },
  {
    href: "https://www.vogue.pl/a/o-czym-rozmawiac-na-pierwszej-rance-by-poznac-druga-osobe-i-uniknac-krepujacej-ciszy",
    image: newsImg04,
    title: "O czym rozmawiać na pierwszej randce, by była udana",
    source: "Vogue Polska",
    date: "2024-08-02",
  },
  {
    href: "https://magazynpismo.pl/idee/strategie-przetrwania/love-hate-relationship-z-tinderem/",
    image: newsImg02,
    title: "Love-hate relationship z Tinderem",
    source: "Magazyn Pismo",
    date: "2024-07-11",
  },
  {
    href: "https://radioram.pl/articles/view/53601/Mamy-Czas-Kartkowka-z-WDZ",
    image: newsImg03,
    title: "Mamy Czas: Kartkówka z WDŻ",
    source: "Radio RAM",
    date: "2024-06-30",
  },
  {
    href: "https://www.youtube.com/watch?v=NahyRycwWE4",
    image: newsImg01,
    title: "Fake kNOw more: Jak emocje wpływają na podatność na dezinformację?",
    source: "YouTube",
    date: "2024-04-12",
  },
];

/** Always rendered newest first, regardless of the order above */
const PROJECTS = [...PROJECT_LIST].sort((a, b) => b.date.localeCompare(a.date));

/** "2026-11-06" -> "06.11.2026" (no Date/Intl, so SSR and client always match) */
const formatDate = (isoDate: string) => isoDate.split("-").reverse().join(".");

const SHORTS = [
  "https://www.youtube.com/embed/D8KNDnN5YKA?si=HMuU-A7gb8zpX50x",
  "https://www.youtube.com/embed/Or0zWYbZk3s?si=Qqfv6j2-MGrpwOXr",
];

const News = () => {
  return (
    <section id="moje-projekty" className="section section--sand projects">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">Media i publikacje</p>
            <h2>Moje projekty</h2>
          </div>
          <p className="section-head__lead">
            Wywiady, podcasty, artykuły i materiały wideo, w których mówię o
            edukacji seksualnej.
          </p>
        </div>

        <ul className="projects__grid">
          {PROJECTS.map((project) => (
            <li key={project.href} className="project">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project__media">
                  <Image
                    src={project.image}
                    loading="lazy"
                    sizes="(max-width: 560px) 100vw, (max-width: 1140px) 50vw, 400px"
                    alt=""
                  />
                </div>
                <p className="project__meta">
                  <span>
                    {project.source} ·{" "}
                    <time dateTime={project.date}>
                      {formatDate(project.date)}
                    </time>
                  </span>
                  <span aria-hidden="true">↗</span>
                </p>
                <h3>{project.title}</h3>
              </Link>
            </li>
          ))}
        </ul>

        <div className="shorts">
          <div className="shorts__text">
            <h3>Edukacyjne shorty</h3>
            <p>Krótkie materiały wideo na YouTube.</p>
          </div>
          <div className="shorts__videos">
            {SHORTS.map((src, index) => (
              <iframe
                key={src}
                loading="lazy"
                width="300"
                height="533"
                src={src}
                title={`Edukacyjny short ${index + 1} – YouTube`}
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
