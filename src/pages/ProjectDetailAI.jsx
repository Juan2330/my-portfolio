import { useEffect, useState } from "preact/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "preact-router";

export default function ProjectDetailReact() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 font-heading">React-Course Project</h1>
            <p className="text-white-300 text-xl">
              Proyecto educativo de un curso de React que evolucionó a una aplicación completa con autenticación,
              carrito de compras y backend personalizado, demostrando mi capacidad para mejorar y extender proyectos existentes.
            </p>
          </header>

          {/* Section: Origin */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Origen y Evolución</h2>
            <p className="text-white-300 text-xl">
              Este proyecto comenzó como parte del curso de React en Platzi, donde aprendí los fundamentos de React
              mientras desarrollaba una tienda virtual básica. La versión inicial usaba la API de Platzi que presentaba
              múltiples problemas técnicos.
            </p>
            <div className="bg-gray-900 rounded-xl p-4">
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal("/React-Course-Platzi.gif")}
              >
                <img
                  src="/React-Course-Platzi.gif"
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
                onClick={() => openModal("/React-Course-Platzi-Codigo.gif")}
              >
                <img
                  src="/React-Course-Platzi-Codigo.gif"
                  alt="Código inicial del proyecto"
                  className="w-full max-h-[28rem] object-contain bg-gray-900 p-2 mx-auto"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Problemas iniciales:</span> La API de Platzi (api.escuelajs.co) presentaba múltiples fallos:
              </p>
              <ul className="text-white-300 text-xl list-disc pl-5 space-y-1">
                <li>Frecuentes caídas del servicio</li>
                <li>Imágenes de productos que no cargaban</li>
                <li>Categorías de productos mal organizadas</li>
              </ul>
              <p className="text-white-300 text-xl">
                <span className="font-semibold text-yellow-200">Solución implementada:</span> Migración a Fake Store API (fakestoreapi.com), más estable pero con menos productos.
              </p>
            </div>
          </section>

          {/* Section: Final Version */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-300 font-heading">Implementación Final</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div 
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/React-Course-Final.gif")}
              >
                <img
                  src="/React-Course-Final.gif"
                  alt="Interfaz final"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
              <div 
                className="bg-gray-700 rounded-xl p-2 cursor-pointer"
                onClick={() => openModal("/React-Course-Final-Codigo.gif")}
              >
                <img
                  src="/React-Course-Final-Codigo.gif"
                  alt="Código final"
                  className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
                />
              </div>
            </div>
            <ul className="text-white-300 text-xl list-disc pl-5 space-y-2 mt-4">
              <li>Autenticación con GitHub OAuth</li>
              <li>Sistema de persistencia de compras</li>
              <li>Perfil de usuario con historial de pedidos</li>
              <li>Uso de cookies para mantener la sesión</li>
              <li>Backend con Node.js y Express</li>
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
                  <li>Context API</li>
                </ul>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-300 mb-2">Backend</h3>
                <ul className="space-y-1">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>GitHub OAuth</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Links */}
          <section className="pt-4 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://react-course-frontend-production.up.railway.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
            >
              Ver Proyecto
            </a>
            <a 
              href="https://github.com/Juan2330/react-course" 
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