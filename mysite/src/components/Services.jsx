import React from "react";
import { FaCode, FaPalette, FaSearch, FaHeadset } from "react-icons/fa";

const servicesData = [
  {
    title: "Développement Web",
    description: "Création de sites web modernes, rapides et responsives.",
    icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
    delay: 100,
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitives et esthétiques pour une expérience optimale.",
    icon: <FaPalette className="text-pink-500 text-4xl mb-4" />,
    delay: 200,
  },
  {
    title: "SEO & Performance",
    description: "Optimisation pour un meilleur référencement et rapidité.",
    icon: <FaSearch className="text-green-500 text-4xl mb-4" />,
    delay: 300,
  },
  {
    title: "Support & Maintenance",
    description: "Assistance continue et mise à jour de vos projets.",
    icon: <FaHeadset className="text-purple-500 text-4xl mb-4" />,
    delay: 400,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Titre principal */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 fade-up">
          Nos Services
        </h2>

        {/* Cartes de service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`service-card p-6 rounded-xl fade-up delay-${service.delay}`}
            >
              <div className="flex flex-col items-center justify-center">
                {/* Icône */}
                {service.icon}

                {/* Titre avec gradient */}
                <h3 className="text-2xl font-semibold mb-2 typed-premium">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 fade-up delay-500">
          <a
            href="#portfolio"
            className="cta-button inline-block"
          >
            Voir nos réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
