import Image from "next/image";
import Link from "next/link";
import React from "react";
import mailImg from "./../../../public/img/contact/email.jpg";
import instagramImg from "./../../../public/img/contact/instagram.jpg";

const Contact = () => {
  return (
    <section id="skontaktuj-sie-ze-mna" className="contact-section">
      <div className="contact-section-wrapper">
        <h2>Skontaktuj się ze mną</h2>
        <div className="social-links">
          <div className="social-links-slot">
            <a
              href="mailto:hubertpajaczkowski@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-links-slot__icon"
                src={mailImg.src}
                loading="lazy"
                alt="e-mail"
                width={64}
                height={64}
              />
              <span className="social-links-slot__text">
                hubertpajaczkowski@gmail.com
              </span>
            </a>
          </div>
          <div className="social-links-slot">
            <Link
              href="https://www.instagram.com/czytam_przedseksem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-links-slot__icon"
                src={instagramImg.src}
                loading="lazy"
                alt="instagram"
                width={64}
                height={64}
              />
              <span className="social-links-slot__text">CZYTAMPRZEDSEKSEM</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
