import React, { useState } from "react";
import ContactForm from "./components/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center">
      <NavBar />
      <section id="moi">
      <div className="relative w-full h-screen">
      <img
        src="/assets/Photopro.png"
        alt="Background"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
        <p className="text-xl max-w-2xl">
          Découvrez mes projets, compétences et expériences à travers mon portfolio interactif :)
        </p>
      </div>
      <div className="mt-20 text-lg max-w-3xl text-center">
          <p>Étudiante à EPITECH Lyon, passionnée par le développement et la création digitale, j’aime concevoir des expériences qui donnent vie à mes idées et répondent à mes besoins.</p>
        </div>
    </div>
      </section>

      <section id="projets" className="mt-60 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Mes Projets</h2>
        <div className="w-full max-w-5xl overflow-x-auto scrollbar-hide">
          <div className="flex gap-10 p-4">
            <div className="flex-shrink-0 min-w-[350px] bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform origin-center hover:scale-105">
              <h2 className="text-xl font-bold text-center mb-5">Projet Spotify</h2>
              <img src="/assets/Spotify.png" alt="Spotify" className="w-full h-72 object-contain rounded mb-4" />
              <p className="text-lg font-semibold text-center">
                Création d’un lecteur multimédia online en React en un week-end avec une API.
              </p>
            </div>

            <div className="flex-shrink-0 min-w-[350px] bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform origin-center hover:scale-105">
              <h2 className="text-xl font-bold text-center mb-5">Projet Cinéma</h2>
              <img src="/assets/Cinema.png" alt="Site web cinema" className="w-full h-72 object-contain rounded mb-4" />
              <p className="text-lg font-semibold text-center">
                Création d'un site de référencement de films en deux semaines avec une base de données SQL.
              </p>
              <p className="text-center text-sm text-gray-400">(PHP, SQL, Bootstrap CSS, JavaScript)</p>
            </div>

            <div className="flex-shrink-0 min-w-[350px] bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform origin-center hover:scale-105">
              <h2 className="text-xl font-bold text-center mb-5">Projet Tweeter</h2>
              <img src="/assets/Tweeter.png" alt="Tweeter" className="w-full h-72 object-contain rounded mb-4" />
              <p className="text-lg font-semibold text-center">
                Reproduction en trois semaines de Twitter avec des langages et frameworks libres.
              </p>
              <p className="text-center text-sm text-gray-400">(MVC, Orienté objet)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="competences" className="mt-20 w-full text-center">
        <h2 className="text-3xl font-bold mb-20">Mes Compétences</h2>

        <div className="space-y-12">
          <div className="flex flex-col items-center overflow-hidden">
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-gray-400 transition text-center"
              onClick={() => toggleSection(1)}
            >
              Début et apprentissage →
            </h2>
            <div
              className={`max-w-2xl text-lg text-gray-300 mt-4 transition-all duration-700 ${
                openSection === 1
                  ? "max-h-[500px] opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
              style={{ overflow: "hidden" }}
            >
              J’ai commencé avec HTML, CSS et PHP durant la piscine de trois semaines, mon premier projet était un générateur de Sprite en CSS fait avec du PHP
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden">
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-gray-400 transition text-center"
              onClick={() => toggleSection(2)}
            >
              Évolution et projets marquants →
            </h2>
            <div
              className={`max-w-2xl text-lg text-gray-300 mt-4 transition-all duration-700 ${
                openSection === 2
                  ? "max-h-[500px] opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
              style={{ overflow: "hidden" }}
            >
              J'ai réalisé un site de cinéma, et des reproductions de sites comme Meetic, Twitter et Spotify, grâce auxquels j'ai appris l'architecture MVC, l'orienté objet, créer et intéragir avec une base de donnée SQL ainsi que les API etc...
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden">
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-gray-400 transition text-center"
              onClick={() => toggleSection(3)}
            >
              Défis rencontrés →
            </h2>
            <div
              className={`max-w-2xl text-lg text-gray-300 mt-4 transition-all duration-700 ${
                openSection === 3
                  ? "max-h-[500px] opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
              style={{ overflow: "hidden" }}
            >
              Gérer les CORS en React avec un backend PHP a été un challenge, lancer son projet avec Docker, lier le back-end au front-end avec des requêtes PHP et les fetch json, json encode des fichiers etc...
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden">
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-gray-400 transition text-center"
              onClick={() => toggleSection(4)}
            >
              Outils et technologies →
            </h2>
            <div
              className={`max-w-2xl text-lg text-gray-300 mt-4 transition-all duration-700 ${
                openSection === 4
                  ? "max-h-[500px] opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
              style={{ overflow: "hidden" }}
            >
              J’utilise React et React Vite, Tailwind, SASS, PHP, SQL, HTML, CSS, JS, Laravel et diverses API...
            </div>
          </div>

          <div className="flex flex-col items-center overflow-hidden">
            <h2
              className="text-2xl font-semibold cursor-pointer hover:text-gray-400 transition text-center"
              onClick={() => toggleSection(5)}
            >
              Vision et objectifs →
            </h2>
            <div
              className={`max-w-2xl text-lg text-gray-300 mt-4 transition-all duration-700 ${
                openSection === 5
                  ? "max-h-[500px] opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
              style={{ overflow: "hidden" }}
            >
              Mon objectif est de devenir full-stack et maîtriser les frameworks et librairies JS tel que Express, Typescript, Angular, Node.js, Next.js, Vue.js, développer mes compétences en UI/UIX ainsi que d'apprendre Python et/ou Rubis...
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="mt-20 mb-20 w-full max-w-lg">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
