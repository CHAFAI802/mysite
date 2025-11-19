# Site Vitrine – React + TailwindCSS

Un site vitrine moderne, responsive et performant développé avec **React**, **Vite**, **TailwindCSS**, et une architecture de composants propre.  
Le site comprend :  
- Page d’accueil  
- Section Services  
- Portfolio  
- Témoignages  
- Footer personnalisé  
- Préparation à l’intégration future d’un chatbot FAQ  
- Code optimisé, composants réutilisables, structure claire

---

## 🚀 Technologies utilisées

- **React 18**
- **Vite**
- **TailwindCSS**
- **React Router DOM**
- **Lucide Icons** (si utilisés)
- **Framer Motion** (si animations activées)

---

## 📁 Structure du projet

mysite/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/             # images, icônes, logos
│   │   └── logo.png
│   ├── components/         # composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── HeroSection.jsx
│   ├── pages/              # pages principales du site
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/             # CSS global si besoin
│   │   └── index.css       # Tailwind directives
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
└── vite.config.js