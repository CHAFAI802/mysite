import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
