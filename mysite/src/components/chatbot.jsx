import React, { useState } from "react";

const faqData = [
  { question: "Quels services proposez-vous ?", answer: "Nous proposons du développement web, design UI/UX, SEO et support." },
  { question: "Comment puis-je vous contacter ?", answer: "Vous pouvez utiliser le formulaire de contact en bas de page ou nous envoyer un email." },
  { question: "Quels délais pour un projet ?", answer: "Les délais dépendent de la complexité, généralement 2 à 6 semaines." },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Bouton pour ouvrir/fermer */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 transition"
      >
        {isOpen ? "X" : "FAQ"}
      </button>

      {isOpen && (
        <div className="w-80 max-w-full bg-white rounded-lg shadow-xl mt-4 p-4 text-gray-800">
          <h3 className="text-lg font-bold mb-4">Questions fréquentes</h3>
          <ul className="space-y-2">
            {faqData.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelected(selected === index ? null : index)}
                  className="w-full text-left font-semibold hover:text-blue-600 transition"
                >
                  {item.question}
                </button>
                {selected === index && (
                  <p className="mt-1 text-gray-700">{item.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
