import React, { useState, useEffect } from "react";

export default function CTASticky() {
  const [visible, setVisible] = useState(true); // visible dès le début

  // Option : apparaît seulement après scroll
  // useEffect(() => {
  //   const handleScroll = () => setVisible(window.scrollY > 200);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-8 right-8 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition z-50"
    >
      Contactez-nous
    </a>
  );
}
