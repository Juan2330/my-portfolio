import { useState, useEffect, useRef } from 'preact/hooks';
import ProjectCard from '../components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [translateX, setTranslateX] = useState(0);
    const projectsContainerRef = useRef(null);
    const animationRef = useRef(null);

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
            title: "React Course Project",
            description: "Proyecto educativo de un curso de React que implementa un carrito de compras con funcionalidades avanzadas.",
            imageUrl: "/React-Course-Final.gif",
            projectUrl: "https://react-course-frontend-production.up.railway.app/",
            detailsUrl: "/proyecto/react-course",
            tags: ["React", "TailwindCSS", "Vite", "Context API", "GitHub Aouth"]
        },
        {
            title: "La Rana Pintada",
            description: "Sitio web para una tienda de tote bags personalizadas para visualizar las publicaciones hechas en Instagram.",
            imageUrl: "https://res.cloudinary.com/dy1t4y5wc/image/upload/v1744330626/La_Rana_Pintada_sy5oah.gif",
            projectUrl: "https://la-rana-pintada.vercel.app/",
            detailsUrl: "/proyecto/la-rana-pintada",
            tags: ["React", "TailwindCSS", "Vite"]
        },
    ];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    const animateSlide = (direction, velocity = 0.5) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const container = projectsContainerRef.current;
        const containerWidth = container.offsetWidth;
        const distance = direction === 'left' ? containerWidth : -containerWidth;

        let startTime = null;
        const duration = isMobile ? Math.min(500, Math.abs(distance) / velocity) : 300;

        const animation = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;

            setTranslateX(distance * easeProgress);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animation);
            } else {
                setCurrentIndex(prev =>
                    direction === 'left'
                        ? (prev + 1) % projects.length
                        : (prev - 1 + projects.length) % projects.length
                );
                setTranslateX(0);
                setIsAnimating(false);
                animationRef.current = null;
            }
        };

        animationRef.current = requestAnimationFrame(animation);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;
        const currentTouch = e.targetTouches[0].clientX;
        setTouchEnd(currentTouch);
        setTranslateX(currentTouch - touchStart);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchEnd - touchStart;
        const absDistance = Math.abs(distance);
        const velocity = absDistance / (performance.now() - touchStart.timeStamp);

        if (absDistance > 50) {
            if (distance > 0) {
                animateSlide('right', velocity);
            } else {
                animateSlide('left', velocity);
            }
        } else {
            setTranslateX(0);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    const nextProject = () => {
        animateSlide('left');
    };

    const prevProject = () => {
        animateSlide('right');
    };

    const getVisibleProjects = () => {
        return isMobile ? [projects[currentIndex]] : [
            projects[currentIndex],
            projects[(currentIndex + 1) % projects.length]
        ];
    };

    return (
        <main className="min-h-screen bg-translucent backdrop-blur-sm text-white relative overflow-hidden font-sans">
            {/* Hero Section */}
            <section id="hero" className="relative py-20 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 opacity-20"></div>
                <div className="container-responsive relative z-10">
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
            <section id="projects" className="relative py-16 px-4 sm:px-6 bg-gray-800/50 backdrop-blur-sm">
                <div className="container-responsive relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center font-heading">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black/60 rounded-full"></span>
                            <span className="relative">Mis Proyectos</span>
                        </span>
                    </h2>

                    <div className="relative mx-auto max-w-6xl">
                        <div
                            className="relative"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                ref={projectsContainerRef}
                                className={`flex ${isMobile ? 'justify-center' : 'justify-center'} gap-8`}
                                style={{
                                    transform: `translateX(${translateX}px)`,
                                    transition: isMobile && touchStart ? 'none' : 'transform 0.3s ease-out'
                                }}
                            >
                                {getVisibleProjects().map((project, index) => (
                                    <div
                                        key={`${currentIndex}-${index}`}
                                        className={`${isMobile ? 'w-full' : 'w-full max-w-xl'} flex-shrink-0`}
                                    >
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {!isMobile && (
                        <div className="flex justify-between w-full absolute left-0 right-0 top-1/2 bottom-1/2 -translate-y-1/2 px-8 pointer-events-none">
                            <button
                                onClick={prevProject}
                                className="bg-gray-700/80 hover:bg-gray-600/90 rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all hover:scale-110 shadow-lg pointer-events-auto transform -translate-x-16"
                                aria-label="Proyecto anterior"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl" />
                            </button>

                            <button
                                onClick={nextProject}
                                className="bg-gray-700/80 hover:bg-gray-600/90 rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all hover:scale-110 shadow-lg pointer-events-auto transform translate-x-16"
                                aria-label="Siguiente proyecto"
                            >
                                <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
                            </button>
                        </div>
                    )}

                    {isMobile && (
                        <div className="flex justify-center mt-8 gap-2">
                            {projects.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-16 container-responsive">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center font-heading">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black/60 rounded-full"></span>
                            <span className="relative">Sobre Mí</span>
                        </span>
                    </h2>

                    <div className="bg-gray-800/70 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all">
                        <p className=" text-center text-xl mb-2 text-gray-300">
                            Soy un apasionado desarrollador con conocimientos en tecnologías como React, Node.js y bases de datos.
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