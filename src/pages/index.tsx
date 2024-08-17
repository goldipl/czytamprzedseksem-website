import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import React from "react";
import "@/sass/main.scss";
import Footer from "@/components/common/Footer";
import News from "@/components/sections/News";
import AboutMe from "@/components/sections/AboutMe";
import Workshops from "@/components/sections/Workshops";

const index = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <AboutMe />
        <News />
        <Workshops />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
