import React from "react";
import About from "../../Components/About";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";
import Service from "../../Components/Service";

export default function index() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  );
}
