import { useEffect, useState } from "preact/hooks";

export default function ProjectDetailAI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Modal para imagen ampliada */}
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

      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-yellow-300">AI DevGuide</h1>
          <p className="text-gray-300 text-lg">
            Mi primer proyecto full-stack con IA, evolucionando de una idea ambiciosa a una solución práctica
            que combina Python, Flask y Preact para recomendar tecnologías de desarrollo.
          </p>
        </header>

        {/* Sección: Origen */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Origen y Evolución</h2>
          <p className="text-gray-300">
            Inicialmente planeé crear un recomendador de películas y series con IA, pero al enfrentar dificultades
            técnicas para implementar el sistema de recomendaciones, pivoté hacia un recomendador de tecnologías
            de desarrollo, un proyecto más manejable pero igualmente desafiante.
          </p>
          <div className="bg-gray-900 rounded-xl p-4">
            <div 
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal("/AI_DevGuide_Beta.gif")}
            >
              <img
                src="/AI_DevGuide_Beta.gif"
                alt="Vista inicial del proyecto"
                className="w-full max-h-[28rem] object-contain bg-gray-900 p-2 mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Sección: Desarrollo Técnico */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Desarrollo Técnico</h2>
          <div className="bg-gray-900 rounded-xl p-4">
            <div 
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal("/AI_DevGuide_Codigo_Ollama.gif")}
            >
              <img
                src="/AI_DevGuide_Codigo_Ollama.gif"
                alt="Código del proyecto con Ollama"
                className="w-full max-h-[28rem] object-contain bg-gray-900 p-2 mx-auto"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Primer intento:</span> Implementación inicial con Node.js y React,
              pero la IA devolvía respuestas incoherentes.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Solución clave:</span> Tras investigar, migré el backend a Python
              basándome en <a href="https://www.youtube.com/watch?v=a4N56VfW6hA" className="text-yellow-300 hover:underline" target="_blank">este tutorial</a>,
              lo que permitió una mejor comunicación con la IA de Ollama.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Optimización:</span> Para el frontend, cambié React por Preact
              para mayor ligereza y mejor rendimiento.
            </p>
          </div>
        </section>

        {/* Sección: Versión Final */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Implementación Final</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/AI_DevGuide.gif")}
            >
              <img
                src="/AI_DevGuide.gif"
                alt="Interfaz final de AI DevGuide"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/AI_DevGuide_Codigo_HF.gif")}
            >
              <img
                src="/AI_DevGuide_Codigo_HF.gif"
                alt="Código final refactorizado en Flask y Preact"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Características principales:</span>
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Backend en Flask para manejar la lógica de la IA</li>
              <li>Frontend en Preact para una interfaz ligera y rápida</li>
              <li>Respuestas estructuradas en 3 partes: tecnologías recomendadas, informe técnico y código de ejemplo</li>
              <li>Migración final de Ollama a Hugging Face para el despliegue</li>
            </ul>
          </div>
        </section>

        {/* Sección: Impacto y Futuro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Impacto y Próximos Pasos</h2>
          <p className="text-gray-300">
            Este proyecto representó un hito importante en mi desarrollo profesional:
          </p>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Primer proyecto full-stack desplegado con backend y frontend</li>
            <li>Primera experiencia real integrando IA en una aplicación</li>
            <li>Validación de mi capacidad para resolver problemas complejos y pivotear cuando es necesario</li>
          </ul>
          <p className="text-gray-300">
            <span className="font-semibold text-yellow-200">Próximo objetivo:</span> Aplicar lo aprendido en el desarrollo
            del recomendador de películas y series con IA que fue mi idea original.
          </p>
        </section>
      </div>
    </div>
  );
}