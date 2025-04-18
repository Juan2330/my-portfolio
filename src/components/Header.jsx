import { route } from "preact-router";
import { useState } from "preact/hooks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } 
    else {
      route("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-gray-900/70 text-white p-4 md:p-6 z-50 backdrop-blur-sm border-b border-gray-800 transition-all hover:bg-gray-900/90 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold font-heading">
          <span>Jacobo Ramírez</span>
        </h1>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-sans">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}