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
    } else {
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
    <>
      <header className="bg-gray-900/70 text-white p-4 md:p-6 z-50 backdrop-blur-sm border-b border-gray-800 transition-all hover:bg-gray-900/90 font-sans">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold font-heading">
            <span>Jacobo Ramírez</span>
          </h1>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-sans">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-blue-400 transition py-2"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-400 transition py-2"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-400 transition py-2"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-400 transition py-2"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm z-40 border-b border-gray-800 text-white">
          <ul className="flex flex-col space-y-4 p-4 font-sans">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-blue-400 transition block py-2 text-left w-full"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400 transition block py-2 text-left w-full"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 transition block py-2 text-left w-full"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 transition block py-2 text-left w-full"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
