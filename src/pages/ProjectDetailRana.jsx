import { useEffect, useState } from "preact/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "preact-router";

export default function ProjectDetailRana() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-900/20 text-white font-sans">
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-yellow-300 text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-gray-800/50 p-6 md:p-8 rounded-2xl shadow-lg space-y-8">
          {/* Header */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 font-heading">La Rana Pintada</h1>
            <p className="text-white-300 text-xl">
              Ejercicio educativo que evolucionó de un simple consumo de API a una aplicación React completa,
              mostrando productos de un emprendimiento familiar de tote bags personalizadas.
            </p>
          </header>

          {/* Section: Origin */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Origen y Contexto</h2>
            <p className="text-white-300 text-xl">
              Este proyecto comenzó como un ejercicio en Platzi para aprender sobre el consumo de APIs usando RapidAPI.
              Decidí basarme en un emprendimiento familiar de tote bags personalizadas, creando una página simple que
              mostraba las imágenes publicadas en el Instagram del negocio.
            </p>
          </section>

          {/* Section: Initial Version */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Versión Inicial</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/La_Rana_Pintada_Platzi.gif")}
              >
                <img
                  src="/La_Rana_Pintada_Platzi.gif"
                  alt="Versión inicial del proyecto"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
              <div
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/La_Rana_Pintada_Codigo_Platzi.gif")}
              >
                <img
                  src="/La_Rana_Pintada_Codigo_Platzi.gif"
                  alt="Código inicial del proyecto"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Desafíos iniciales:</span> El código combinaba HTML y CSS en un solo archivo,
                lo que dificultaba su lectura y mantenimiento.
              </p>
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Aprendizaje clave:</span> Cómo consumir la API de Instagram de manera eficiente
                y crear una interfaz funcional.
              </p>
            </div>
          </section>

          {/* Section: Final Version */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Versión Refactorizada</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/La_Rana_Pintada.gif")}
              >
                <img
                  src="/La_Rana_Pintada.gif"
                  alt="Versión final del proyecto"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
              <div
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/La_Rana_Pintada_Codigo.gif")}
              >
                <img
                  src="/La_Rana_Pintada_Codigo.gif"
                  alt="Código final del proyecto"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
            </div>
            <ul className="text-white-300 text-xl list-disc pl-5 space-y-2 mt-4">
              <li>Migración a React con componentes reutilizables</li>
              <li>Uso de TailwindCSS para estilizado consistente</li>
              <li>Implementación de un botón de contacto funcional</li>
              <li>Separación clara entre lógica y presentación</li>
              <li>Mejor estructura de archivos y código</li>
            </ul>
          </section>

          {/* Section: Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Tecnologías Clave</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Frontend</h3>
                <ul className="space-y-1">
                  <li>React</li>
                  <li>Vite</li>
                  <li>TailwindCSS</li>
                  <li>Instagram API</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Características</h3>
                <ul className="space-y-1">
                  <li>Diseño responsivo</li>
                  <li>Consumo de API</li>
                  <li>Galería de productos</li>
                  <li>Contacto directo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Impacto y Aprendizaje</h2>
            <p className="text-white-300 text-xl">
              Este proyecto representó un punto importante en mi desarrollo profesional:
            </p>
            <ul className="text-white-300 text-xl list-disc pl-5 space-y-1">
              <li>Validación de conceptos aprendidos en cursos</li>
              <li>Primera experiencia real con React y TailwindCSS</li>
              <li>Demostración de capacidad para refactorizar código</li>
              <li>Proyecto puente entre el aprendizaje y proyectos más complejos</li>
            </ul>
            <p className="text-white-300 text-xl italic">
              "Fue fundamental para ganar confianza en mis habilidades como desarrollador."
            </p>
          </section>

          {/* Section: Links */}
          <section className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://la-rana-pintada.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
            >
              Ver Proyecto
            </a>
            <a
              href="https://github.com/Juan2330/La-Rana-Pintada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
            >
              Ver Código en GitHub
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}