import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../../../public/icons/header/logo.svg";

type NavLink = { label: string; href: string };
type NavItem = { id: string; label: string; href?: string; children?: NavLink[] };

/** Keep in sync with $bp-lg in sass/global/_variables.scss */
const DESKTOP_BP = 1140;

const NAV: NavItem[] = [
  {
    id: "warsztaty",
    label: "Warsztaty",
    children: [
      { label: "Szkoła podstawowa", href: "#dla-szkol-podstawowych" },
      { label: "Szkoła średnia", href: "#dla-szkol-srednich" },
    ],
  },
  {
    id: "szkolenia",
    label: "Szkolenia",
    children: [
      {
        label: "Z rodzicami i/lub kadrą pedagogiczną",
        href: "#spotkania-z-rodzicami-i-kadra-pedagogiczna",
      },
    ],
  },
  { id: "konsultacje", label: "Konsultacje", href: "#konsultacje" },
  { id: "projekty", label: "Projekty", href: "#moje-projekty" },
  { id: "o-mnie", label: "O mnie", href: "#o-mnie" },
];

const Chevron = () => (
  <svg
    className="header__chevron"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M1.5 3.5 5 7l3.5-3.5" />
  </svg>
);

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
  };

  const toggleDropdown = (id: string) =>
    setActiveDropdown((prev) => (prev === id ? null : id));

  /** Lock page scroll while the mobile menu is open */
  useEffect(() => {
    const targets = [document.body, document.documentElement];
    targets.forEach((el) => el.classList.toggle("blocked-body", menuOpen));
    return () => targets.forEach((el) => el.classList.remove("blocked-body"));
  }, [menuOpen]);

  /** Click outside / Escape closes dropdowns; leaving mobile width closes the menu */
  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onResize = () => {
      if (window.innerWidth > DESKTOP_BP) setMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="container header__inner">
        <Link href="/" className="header__logo" onClick={closeAll}>
          <Image src={logo} alt="Czytam przed seksem" priority />
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="header__toggle-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Menu główne"
        >
          <ul className="header__list">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.id} className="header__item">
                  <button
                    type="button"
                    className="header__link"
                    aria-expanded={activeDropdown === item.id}
                    aria-controls={`submenu-${item.id}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.label}
                    <Chevron />
                  </button>
                  <ul
                    id={`submenu-${item.id}`}
                    className={`header__dropdown ${
                      activeDropdown === item.id ? "is-open" : ""
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeAll}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id} className="header__item">
                  <Link
                    href={item.href ?? "#"}
                    className="header__link"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link
            href="#skontaktuj-sie"
            className="btn btn--gold header__cta"
            onClick={closeAll}
          >
            Skontaktuj się
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
