export default function ProjectCard({ title, description, imageUrl, projectUrl, tags, detailsUrl }) {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="w-full overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-600 text-xs text-white px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a 
                        href={projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition"
                    >
                        Ver Proyecto
                    </a>
                    <a 
                        href={detailsUrl}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition"
                    >
                        Detalles
                    </a>
                </div>
            </div>
        </div>
    );
}
