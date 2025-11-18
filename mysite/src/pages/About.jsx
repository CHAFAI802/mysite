import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 fade-up">
          À propos de nous
        </h2>

        {/* Contenu principal */}
        <div className="md:flex md:items-center md:space-x-12">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 fade-up delay-100 image-overlay">
            <img
              src="/assets/images/team-work.jpg" 
              alt="Notre équipe"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Texte */}
          <div className="md:w-1/2 space-y-6 fade-up delay-200">
            <p className="text-lg text-gray-700">
              Nous sommes une équipe passionnée de développeurs, designers et
              spécialistes du digital. Notre objectif est de fournir des
              solutions modernes et innovantes adaptées à chaque client.
            </p>
            <p className="text-lg text-gray-700">
              Depuis notre création, nous avons travaillé sur de nombreux
              projets web et mobiles, en combinant expertise technique et
              créativité pour garantir des résultats exceptionnels.
            </p>

            {/* Points clés */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
                Développement Web moderne et performant
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
                Design UI/UX attractif et intuitif
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
                Optimisation SEO et performance
              </li>
              <li className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
                Support et suivi client réactif
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
