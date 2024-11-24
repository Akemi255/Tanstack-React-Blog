import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/" activeOptions={{ exact: true }}>
                        ReactBlog
                    </Link>
                </div>


                <nav className="hidden md:flex space-x-6">
                    <Link
                        to="/"
                        activeProps={{
                            className: 'font-bold text-blue-500',
                        }}
                        activeOptions={{ exact: true }}
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/tecnologia"
                        activeProps={{
                            className: 'font-bold text-blue-500',
                        }}
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                        Tecnología
                    </Link>
                    <Link
                        to="/opiniones"
                        activeProps={{
                            className: 'font-bold text-blue-500',
                        }}
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                        Opiniones
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <Link
                        to="/estadisticas"
                        activeProps={{
                            className: 'font-bold text-blue-500',
                        }}
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                        Estadísticas
                    </Link>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-label="Open menu"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            <div
                className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 mt-2`}
            >
                <Link
                    to="/"
                    activeProps={{
                        className: 'font-bold text-blue-500',
                    }}
                    activeOptions={{ exact: true }}
                    className="block text-gray-600 hover:text-blue-500 transition-colors duration-300 px-4 py-2"
                >
                    Inicio
                </Link>
                <Link
                    to="/tecnologia"
                    activeProps={{
                        className: 'font-bold text-blue-500',
                    }}
                    className="block text-gray-600 hover:text-blue-500 transition-colors duration-300 px-4 py-2"
                >
                    Tecnología
                </Link>
                <Link
                    to="/opiniones"
                    activeProps={{
                        className: 'font-bold text-blue-500',
                    }}
                    className="block text-gray-600 hover:text-blue-500 transition-colors duration-300 px-4 py-2"
                >
                    Opiniones
                </Link>
            </div>
        </header>
    );
}
