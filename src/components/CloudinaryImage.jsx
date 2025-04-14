export default function CloudinaryImage({ 
    src, 
    alt, 
    width = 800,
    className = "",
    ...props 
}) {
    const transform = `f_auto,q_auto,w_${width},c_limit`;
    const optimizedSrc = src.replace('/upload/', `/upload/${transform}/`);
    
    return (
        <div className="overflow-hidden rounded-lg">
            <img 
                src={optimizedSrc} 
                alt={alt}
                className={`${className} w-full h-auto object-cover`}
                loading="lazy"
                {...props}
            />
        </div>
    );
}
