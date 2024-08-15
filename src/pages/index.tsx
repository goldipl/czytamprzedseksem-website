import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import "@/sass/main.scss";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;
