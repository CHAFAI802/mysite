import React from "react";

const testimonialsData = [
  {
    name: "Alice Dupont",
    role: "CEO, StartUpTech",
    image: "/assets/images/testimonial1.jpg",
    quote: "Une équipe exceptionnelle, notre site web est devenu un véritable atout business.",
  },
  {
    name: "Marc Lefevre",
    role: "Freelancer Designer",
    image: "/assets/images/testimonial2.jpg",
    quote: "Leur créativité et professionnalisme dépassent toutes nos attentes.",
  },
  {
    name: "Sophie Martin",
    role: "Marketing Manager",
    image: "/assets/images/testimonial3.jpg",
    quote: "Collaboration fluide et résultats impressionnants, je recommande fortement.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600 fade-up">
          Témoignages
        </h2>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((t, index) => (
            <div
              key={t.name}
              className={`testimonial-card p-6 rounded-xl fade-up delay-${100 + index * 100}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden image-overlay">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 typed-premium">{t.name}</h3>
                <p className="text-blue-600 mb-4">{t.role}</p>
                <p className="text-gray-700 text-center">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
