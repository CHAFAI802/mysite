import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            MonSite
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#hero" className="hover:text-blue-400 transition">Accueil</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Témoignages</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
