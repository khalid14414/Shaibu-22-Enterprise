import { useCart } from "../../context/CartContext";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {

    const { cartItems } = useCart();
    const cartCount = cartItems.length;

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/product" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-4"
                : "bg-white py-3"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">22</span>
                        </div>
                        <div>
                            <span className="text-xl font-bold text-green-800">Shaibu</span>
                            <span className="text-xl font-bold text-green-600">Enterprise</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive(link.path)
                                    ? "text-green-700 font-semibold"
                                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/cart"
                            className="relative ml-2 flex items-center justify-center w-10 h-10 text-green-800 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
                        >
                            <FaShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link
                            to="/product"
                            className="ml-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center"
                        >
                            Shop Now
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}

                    <div className="md:hidden flex items-center gap-4">
                        <Link
                            to="/cart"
                            className="relative flex items-center justify-center w-10 h-10 text-green-800 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
                        >
                            <FaShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={toggleMenu}
                            className="text-green-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <X size={30} className="text-green-800" />
                            ) : (
                                <Menu size={30} className="text-green-800" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            >
                <div
                    className={`absolute right-0 top-0 h-50 w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-50vh">
                        {/* Mobile Menu Header */}
                        <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                            <Link
                                to="/"
                                className="flex items-center space-x-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">22</span>
                                </div>
                                <div>
                                    <span className="text-lg font-bold text-green-800">Shaibu</span>
                                    <span className="text-lg font-bold text-green-600">Repellent</span>
                                </div>
                            </Link>
                            <div>

                            </div>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg transition-all ${isActive(link.path)
                                        ? "bg-green-600 text-white font-medium"
                                        : "text-gray-700 hover:bg-green-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="p-5 border-t border-gray-200">
                            <Link
                                to="/shop"
                                onClick={() => setMenuOpen(false)}
                                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 px-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;