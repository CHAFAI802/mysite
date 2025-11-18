import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="hero"
      className="relative hero-animated-bg h-screen text-white overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 3 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1.2 },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Bienvenue sur MonSite
        </h2>

        <ReactTyped
          strings={[
            "Développement Web Moderne",
            "Solutions Digitales Professionnelles",
            "Design Créatif et Optimisé",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-2xl md:text-3xl mb-8 font-semibold"
        />

        <p className="text-xl md:text-2xl mb-10 opacity-80">
          Découvrez nos services et notre expertise digitale.
        </p>

        <a
          href="#contact"
          className="fixed bottom-8 right-8 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition z-50"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  );
}
