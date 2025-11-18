import React, { useState } from "react";

const portfolioData = [
  {
    title: "Site E-commerce",
    category: "Web",
    image: "/assets/images/portfolio-ecommerce.jpg",
  },
  {
    title: "Landing Page Design",
    category: "Design",
    image: "/assets/images/portfolio-landing.jpg",
  },
  {
    title: "SEO Optimisation",
    category: "SEO",
    image: "/assets/images/portfolio-seo.jpg",
  },
  {
    title: "Application Mobile",
    category: "Web",
    image: "/assets/images/portfolio-app.jpg",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "/assets/images/portfolio-brand.jpg",
  },
];

const categories = ["All", "Web", "Design", "SEO"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 fade-up">
          Nos Réalisations
        </h2>

        {/* Filtrage */}
        <div className="mb-12 flex justify-center gap-4 fade-up delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={item.title}
              className={`portfolio-card image-overlay fade-up delay-${100 + index * 100}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 typed-premium">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 fade-up delay-500">
          <a
            href="#contact"
            className="cta-button inline-block"
          >
            Me contacter pour un projet
          </a>
        </div>
      </div>
    </section>
  );
}
