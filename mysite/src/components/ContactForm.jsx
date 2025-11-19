import React, { useState } from "react";
import { sendContact } from "../api/contactApi";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Message de confirmation ou d'erreur

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const data = { name, email, message };
    try {
      const response = await sendContact(data);
      setStatus("Votre message a été envoyé !");
      // Vider le formulaire
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Erreur lors de l'envoi, réessayez.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-lg">
        <h3 className="text-3xl font-bold mb-8 text-center">Contactez-nous</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            className="w-full p-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
}
