import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import React from "react";
import "@/sass/main.scss";
import Footer from "@/components/common/Footer";
import Welcome from "@/components/sections/Welcome";

const index = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Welcome />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
