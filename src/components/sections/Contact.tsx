import Link from "next/link";
import React from "react";

const LINKS = [
  {
    label: "E-mail",
    value: "hubertpajaczkowski@gmail.com",
    href: "mailto:hubertpajaczkowski@gmail.com",
  },
  {
    label: "Instagram",
    value: "@czytam_przedseksem",
    href: "https://www.instagram.com/czytam_przedseksem/",
  },
];

const Contact = () => {
  return (
    <section id="skontaktuj-sie" className="section section--burgundy contact">
      <div className="container contact__grid">
        <div>
          <p className="kicker">Kontakt</p>
          <h2>Skontaktuj się</h2>
          <p className="contact__lead">
            Napisz, jeśli chcesz zaprosić mnie do swojej szkoły lub placówki
            albo umówić konsultację indywidualną. Pełną ofertę cenową
            przygotowuję indywidualnie.
          </p>
        </div>

        <ul className="contact__links">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">{link.value}</span>
                <span className="contact__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
