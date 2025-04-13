import { useEffect, useState } from "preact/hooks";

export default function ProjectDetailRana() {
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
          <h1 className="text-4xl font-bold text-yellow-300">Tote Bags Personalizadas</h1>
          <p className="text-gray-300 text-lg">
            Ejercicio educativo que evolucionó de un simple consumo de API a una aplicación React completa,
            marcando mi transición de estudiante a desarrollador profesional.
          </p>
        </header>

        {/* Sección: Contexto */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Contexto del Proyecto</h2>
          <p className="text-gray-300">
            Este proyecto comenzó como un ejercicio en Platzi para aprender sobre el consumo de APIs usando RapidAPI.
            Decidí basarme en un emprendimiento familiar de tote bags personalizadas, creando una página simple que
            mostraba las imágenes publicadas en Instagram del negocio.
          </p>
        </section>

        {/* Sección: Versión Inicial */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Versión Inicial (Platzi)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/La_Rana_Pintada_Platzi.gif")}
            >
              <img
                src="/La_Rana_Pintada_Platzi.gif"
                alt="Vista previa inicial del proyecto"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/La_Rana_Pintada_Codigo_Platzi.gif")}
            >
              <img
                src="/La_Rana_Pintada_Codigo_Platzi.gif"
                alt="Código original del proyecto"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Desafíos iniciales:</span> El código combinaba HTML y CSS en un solo archivo, 
              lo que dificultaba su lectura y mantenimiento.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Aprendizaje clave:</span> Cómo consumir la API de Instagram de manera eficiente 
              y crear una interfaz funcional.
            </p>
          </div>
        </section>

        {/* Sección: Refactorización */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Refactorización con React</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/La_Rana_Pintada.gif")}
            >
              <img
                src="/La_Rana_Pintada.gif"
                alt="Interfaz final mejorada con React"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
            <div 
              className="bg-gray-700 rounded-xl p-2 cursor-pointer"
              onClick={() => openModal("/La_Rana_Pintada_Codigo.gif")}
            >
              <img
                src="/La_Rana_Pintada_Codigo.gif"
                alt="Código final mejor organizado"
                className="rounded-lg shadow-md w-full h-64 object-contain bg-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold text-yellow-200">Mejoras implementadas:</span>
            </p>
            <ul className="text-gray-300 list-disc pl-5 space-y-1">
              <li>Migración a React con componentes reutilizables</li>
              <li>Uso de TailwindCSS para estilizado consistente</li>
              <li>Implementación de un botón de contacto funcional</li>
              <li>Separación clara entre lógica y presentación</li>
              <li>Mejor estructura de archivos y código</li>
            </ul>
          </div>
        </section>

        {/* Sección: Impacto */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-200">Impacto Profesional</h2>
          <p className="text-gray-300">
            Este proyecto, aunque aparentemente simple, representó un punto de inflexión en mi carrera:
          </p>
          <ul className="text-gray-300 list-disc pl-5 space-y-1">
            <li>Último proyecto como estudiante y primero como desarrollador profesional</li>
            <li>Validación de conceptos aprendidos en cursos</li>
            <li>Primera experiencia real con React y TailwindCSS</li>
            <li>Demostración de capacidad para refactorizar y mejorar código existente</li>
          </ul>
          <p className="text-gray-300 italic">
            "Fue fundamental para ganar confianza en mis habilidades y comenzar a crear proyectos más complejos."
          </p>
        </section>
      </div>
    </div>
  );
}