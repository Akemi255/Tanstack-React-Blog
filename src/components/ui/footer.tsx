import { Link } from '@tanstack/react-router';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-lg font-bold mb-4">ReactBlog</h3>
                        <p className="text-sm text-gray-400">
                            Una plataforma para mantenerse actualizado con las últimas noticias sobre tecnología, opinión y más.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    activeProps={{ className: 'font-bold text-blue-500' }}
                                    activeOptions={{ exact: true }}
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tecnologia"
                                    activeProps={{ className: 'font-bold text-blue-500' }}
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Tecnología
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/opiniones"
                                    activeProps={{ className: 'font-bold text-blue-500' }}
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Opiniones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/estadisticas"
                                    activeProps={{ className: 'font-bold text-blue-500' }}
                                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Estadísticas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Síguenos</h3>

                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>&copy; 2024 ReactBlog. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
