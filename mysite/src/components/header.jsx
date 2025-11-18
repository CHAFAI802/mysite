import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // sections (to = id des éléments dans la page)
  const links = [
    { name: "Accueil", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Témoignages", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  // Si on arrive vers "/" avec state.scrollTo, on déclenche le scroll
  useEffect(() => {
    if (location.pathname === "/" && location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      // petit délai pour laisser le rendu s'effectuer
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -72, // ajuste selon la hauteur de ton header fixe
        });
        // nettoie le state pour éviter scroll répété si possible (optionnel)
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 50);
    }
  }, [location]);

  // helper : link click handler — si on est déjà sur "/" on scroll directement,
  // sinon on navigue vers "/" en passant le nom de section dans state
  const handleLinkClick = (to) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      scroller.scrollTo(to, { smooth: true, duration: 500, offset: -72 });
    } else {
      // navigue vers home et passe la cible dans state
      navigate("/", { state: { scrollTo: to } });
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MonSite</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.to}>
                {/* si on veut purement scroll sur la page actuelle on pourrait utiliser <ScrollLink> */}
                <button
                  onClick={() => handleLinkClick(link.to)}
                  className="cursor-pointer hover:underline hover:scale-105 transition-transform bg-transparent border-none text-white"
                >
                  {link.name}
                </button>
              </li>
            ))}
            {/* exemple d'un lien vers une route distincte */}
            <li>
              <RouterLink to="/about" className="hover:underline">
                À propos
              </RouterLink>
            </li>
          </ul>
        </nav>

        {/* Burger menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile ouvert */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <button
                  onClick={() => handleLinkClick(link.to)}
                  className="block w-full text-left hover:underline"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <RouterLink to="/about" onClick={() => setIsOpen(false)} className="block hover:underline">
                À propos
              </RouterLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
