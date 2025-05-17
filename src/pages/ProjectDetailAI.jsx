import { useEffect, useState } from "preact/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "preact-router";

export default function ProjectDetailAI() {
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
            <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Volver al portafolio
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 font-heading">AI DevGuide</h1>
            <p className="text-white-300 text-xl">
              Mi primer proyecto full-stack con IA, evolucionando de una idea ambiciosa a una solución práctica
              que combina Python, Flask y Preact para recomendar tecnologías de desarrollo.
            </p>
          </header>

          {/* Section: Origin */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Origen y Evolución</h2>
            <p className="text-white-300 text-xl">
              Inicialmente planeé crear un recomendador de películas y series con IA, pero al enfrentar dificultades
              técnicas para implementar el sistema de recomendaciones, cambié mi idea hacia un recomendador de tecnologías
              de desarrollo.
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal("/AI_DevGuide_Beta.gif")}
              >
                <img
                  src="/AI_DevGuide_Beta.gif"
                  alt="Versión inicial del proyecto"
                  className="w-full max-h-[28rem] object-contain bg-gray-900 p-2 mx-auto"
                />
              </div>
            </div>
          </section>

          {/* Section: Technical Development */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Desarrollo Técnico</h2>
            <div className="bg-gray-900 rounded-xl p-4">
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal("/AI_DevGuide_Codigo_Ollama.gif")}
              >
                <img
                  src="/AI_DevGuide_Codigo_Ollama.gif"
                  alt="Código inicial del proyecto"
                  className="w-full max-h-[28rem] object-contain bg-gray-900 p-2 mx-auto"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Problemas iniciales:</span> Implementación inicial con Node.js y React,
                pero la IA devolvía respuestas incoherentes.
              </p>
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Solución clave:</span> Migré el backend a Python
                basándome en <a href="https://www.youtube.com/watch?v=a4N56VfW6hA" className="text-yellow-200 hover:underline" target="_blank">este tutorial</a>,
                lo que permitió una mejor comunicación con la IA.
              </p>
            </div>
          </section>

          {/* Section: Final Version */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Implementación Final</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div 
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/AI_DevGuide.gif")}
              >
                <img
                  src="/AI_DevGuide.gif"
                  alt="Interfaz final"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
              <div 
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/AI_DevGuide_Codigo_HF.gif")}
              >
                <img
                  src="/AI_DevGuide_Codigo_HF.gif"
                  alt="Código final"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
            </div>
            <ul className="text-white-300 text-xl list-disc pl-5 space-y-2 mt-4">
              <li>Backend en Flask para manejar la lógica de la IA</li>
              <li>Frontend en Preact para una interfaz ligera</li>
              <li>Migración final de Ollama a Hugging Face</li>
              <li>Sistema de recomendaciones basado en descripciones</li>
              <li>Interfaz intuitiva para desarrolladores</li>
            </ul>
          </section>

          {/* Section: Technologies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Tecnologías Clave</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Frontend</h3>
                <ul className="space-y-1">
                  <li>Preact</li>
                  <li>Vite</li>
                  <li>TailwindCSS</li>
                  <li>Fetch API</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Backend</h3>
                <ul className="space-y-1">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>Hugging Face</li>
                  <li>Ollama (inicialmente)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Links */}
          <section className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://ai-devguide-huggin-1.onrender.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
            >
              Ver Proyecto en Vivo
            </a>
            <a 
              href="https://github.com/Juan2330/AI-DevGuide" 
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