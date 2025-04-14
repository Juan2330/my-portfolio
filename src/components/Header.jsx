import { route } from "preact-router";
import { useState } from "preact/hooks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigateToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      route(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-gray-900 text-white p-4 md:p-6 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          <a className="text-blue-400">Jacobo Ramírez</a>
        </h1>
        
        {/* Botón de menú para móvil */}
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

        {/* Menú de navegación */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="/" className="hover:text-blue-400 transition block py-2">Inicio</a>
            </li>
            <li>
              <button 
                onClick={() => navigateToSection("projects")} 
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateToSection("about")} 
                className="hover:text-blue-400 transition block py-2 text-left w-full md:w-auto"
              >
                Sobre mí
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateToSection("contact")} 
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