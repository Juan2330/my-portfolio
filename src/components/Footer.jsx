export default function Footer() {
    return (
        <footer className="bg-gray-900/80 text-white py-6 px-4 border-t border-gray-800 font-sans">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base text-gray-400">
                    © {new Date().getFullYear()} Jacobo Ramírez. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}