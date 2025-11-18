import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-lg">
        <h3 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Nom" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
