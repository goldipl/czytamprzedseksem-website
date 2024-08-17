import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import React from "react";
import "@/sass/main.scss";
import Footer from "@/components/common/Footer";
import News from "@/components/sections/News";
import AboutMe from "@/components/sections/AboutMe";
import Workshops from "@/components/sections/Workshops";
import PrimarySchoolWorkshops from "@/components/sections/PrimarySchoolWorkshops";
import HighSchoolWorkshops from "@/components/sections/HighSchool";
import Courses from "@/components/sections/Courses";
import Cooperation from "@/components/sections/Cooperation";
import Contact from "@/components/sections/Contact";

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
        <PrimarySchoolWorkshops />
        <HighSchoolWorkshops />
        <Courses />
        <Cooperation />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
