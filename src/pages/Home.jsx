import { useEffect } from 'preact/hooks';
import ProjectCard from '../components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
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
        <main className="min-h-screen bg-translucent backdrop-blur-sm text-white relative overflow-hidden font-sans">
            {/* Hero Section */}
            <section id="hero" className="relative py-20 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 opacity-20"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-10 font-heading">
                            Hola, soy <span className="text-black/80">Jacobo Ramírez</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-gray-950 max-w-3xl mx-auto leading-relaxed mb-8">
                            Desarrollador Full Stack especializado en crear soluciones web modernas y eficientes.
                        </p>
                        
                        {/* Social Networks  */}
                        <div className="flex justify-center space-x-6 mb-10">
                            <a 
                                href="https://github.com/Juan2330" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray hover:text-black transition-colors"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
                            </a>
                            <a 
                                href="https://linkedin.com/in/jacobo-ramírez-a9028935b" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray hover:text-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-16 px-4 sm:px-6  bg-gray-800/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-small-gray-700/20"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center font-heading">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black/60 rounded-full"></span>
                            <span className="relative">Mis Proyectos</span>
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center font-heading">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black/60 rounded-full"></span>
                            <span className="relative">Sobre Mí</span>
                        </span>
                    </h2>
                    
                    <div className="bg-gray-800/70 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all">
                        <p className=" text-center text-xl mb-2 text-gray-300">
                            Soy un apasionado desarrollador con conocimientos en tecnologías como Preact, Node.js y bases de datos.
                        </p>
                        <p className="text-center text-xl mb-4 text-gray-300">
                            Me especializo en crear aplicaciones web responsivas, accesibles y con excelente rendimiento.
                        </p>
                        
                        <h3 className="text-center text-lg sm:text-xl font-semibold mt-6 mb-4 text-stone-200 font-heading">Habilidades Técnicas:</h3>
                        <ul className="text-center  text-cyan-300 grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {['JavaScript', 'React', 'Preact', 'Node.js', 'TailwindCSS', 'Git', 'SQL', 'Python', 'AI Integration'].map((skill, i) => (
                                <li 
                                    key={i} 
                                    className="bg-gray-700/50 hover:bg-gray-700 px-3 py-2 rounded transition-all hover:shadow-md font-mono text-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative py-16 px-4 sm:px-6 bg-gray-800/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 font-heading">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black/60 rounded-full"></span>
                            <span className="relative">Contacto</span>
                        </span>
                    </h2>
                    
                    <div className="flex justify-center space-x-12">
                        {/* Email */}
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jacoboramirezcontacto@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                            aria-label="Enviar correo"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-black/30 rounded-full group-hover:bg-red-600 transition-all">
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    className="text-black text-5xl group-hover:text-white transition-colors"
                                />
                            </div>
                            <span className="mt-2 text-gray-300 group-hover:text-white transition-colors">Email</span>
                        </a>

                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/573170383544"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                            aria-label="WhatsApp"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-black/30 rounded-full group-hover:bg-green-500/30 transition-all">
                                <FontAwesomeIcon 
                                    icon={faWhatsapp} 
                                    className="text-black text-5xl group-hover:text-white transition-colors"
                                />
                            </div>
                            <span className="mt-2 text-gray-300 group-hover:text-white transition-colors">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}