export default function ProjectCard({ title, description, imageUrl, projectUrl, tags, detailsUrl }) {
  return (
    <div className="bg-gray-900/70 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl group relative font-sans z-10 h-full flex flex-col mx-auto w-full">
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          loading="lazy"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>
      <div className="p-4 sm:p-6 relative flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-heading">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors text-sm sm:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600 text-xs text-white px-2 py-1 rounded transition-all group-hover:bg-blue-500 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 sm:gap-4 mt-auto">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 sm:px-4 rounded transition-all hover:shadow-lg hover:-translate-y-0.5 flex-1 text-center text-sm sm:text-base"
          >
            Ver Proyecto
          </a>
          <a
            href={detailsUrl}
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-3 sm:px-4 rounded transition-all hover:shadow-lg hover:-translate-y-0.5 flex-1 text-center text-sm sm:text-base"
          >
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
}