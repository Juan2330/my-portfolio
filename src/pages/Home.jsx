import ProjectCard from '../components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'preact/hooks';

export default function Home() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
        }
    }, []);

    const projects = [
        {
            title: "AI DevGuide",
            description: "Sistema de recomendación tecnológica con IA generativa para ayudar a los desarrolladores a elegir la mejor tecnología para sus proyectos.",
            imageUrl: "https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744329393/AI_DevGuide_lrzoyd.gif", 
            projectUrl: "https://ai-devguide-huggin-1.onrender.com/",
            detailsUrl: "/proyecto/ai-devguide",
            tags: ['Python', 'Flask', 'Hugging Face', 'Preact', 'TailwindCSS']
        },
        {
            title: "La Rana Pintada",
            description: "Sitio web para una tienda de tote bags personalizadas para visualizar las publicaciones hechas en Instagram.",
            imageUrl: "https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744330626/La_Rana_Pintada_sy5oah.gif",
            projectUrl: "https://la-rana-pintada.vercel.app/",
            detailsUrl: "/proyecto/la-rana-pintada",
            tags: ["React", "TailwindCSS"]
        },
    ];

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            {/* Hero */}
            <section id="hero" className="py-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6">Hola, soy <span className="text-blue-400">Jacobo Ramírez</span></h1>
                    <p className="text-lg sm:text-xl text-gray-300">
                        Desarrollador Full Stack junior especializado en crear soluciones web modernas y eficientes.
                    </p>
                </div>
            </section>

            {/* Proyectos */}
            <section id="projects" className="py-14 px-4 sm:px-6 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Mis Proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre mí */}
            <section id="about" className="py-14 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Sobre Mí</h2>
                    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg">
                        <p className="mb-4 text-sm sm:text-base">
                            Soy un apasionado desarrollador con conocimientos en tecnologías como Preact, Node.js y bases de datos.
                        </p>
                        <p className="mb-4 text-sm sm:text-base">
                            Me especializo en crear aplicaciones web responsivas, accesibles y con excelente rendimiento.
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-4">Habilidades Técnicas:</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                            {['JavaScript', 'React', 'Preact', 'Node.js', 'TailwindCSS', 'Git', 'SQL', 'Python', 'AI Integration'].map((skill, i) => (
                                <li key={i} className="bg-gray-700 px-3 py-2 rounded">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section id="contact" className="py-14 px-4 sm:px-6 bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">Contacto</h2>
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
                            <div className="w-16 h-16 aspect-square flex items-center justify-center bg-blue-500/20 rounded-full mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.068.432.27.268.432.643.432 1.068z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Correo</h3>
                                <a href="mailto:jacoboramirezcontacto@gmail.com" className="text-blue-400 hover:text-blue-300 transition block">
                                    jacoboramirezcontacto@gmail.com
                                </a>
                                <p className="text-sm text-gray-400">Disponible para consultas, proyectos o colaboraciones.</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
                            <div className="w-16 h-16 aspect-square flex items-center justify-center bg-blue-500/20 rounded-full mr-6">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-blue-400 text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">WhatsApp</h3>
                                <a href="https://wa.me/573170383544" className="text-blue-400 hover:text-blue-300 transition block">
                                    +57 317 038 3544
                                </a>
                                <p className="text-sm text-gray-400">Contáctame directamente por mensaje.</p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
                            <div className="w-16 h-16 aspect-square flex items-center justify-center bg-blue-500/20 rounded-full mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">LinkedIn</h3>
                                <a href="https://linkedin.com/in/jacobo-ramírez-a9028935b" className="text-blue-400 hover:text-blue-300 transition block">
                                    linkedin.com/in/jacobo-ramírez
                                </a>
                                <p className="text-sm text-gray-400">Conecta conmigo profesionalmente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
