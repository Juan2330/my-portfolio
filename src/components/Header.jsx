import { route } from "preact-router";

export default function Header() {
  const navigateToSection = (sectionId) => {
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      route(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a className="text-blue-400">Jacobo Ramírez</a>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-400 transition">Inicio</a>
            </li>
            <li>
              <button onClick={() => navigateToSection("projects")} className="hover:text-blue-400 transition">
                Proyectos
              </button>
            </li>
            <li>
              <button onClick={() => navigateToSection("about")} className="hover:text-blue-400 transition">
                Sobre mí
              </button>
            </li>
            <li>
              <button onClick={() => navigateToSection("contact")} className="hover:text-blue-400 transition">
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
