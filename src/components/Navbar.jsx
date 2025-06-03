import { useLocation,Link } from "react-router-dom";
import { Menu, X } from "lucide-react"

import { useState } from "react";




function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation();

    console.log("Current location:", location);
    // Check if the current path is the home page
    const isActive =(path)=>location.pathname === path 
    
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" }
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 ">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-2xl font-bold text-green-600">Shaibu 22
                </Link>
                <nav className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((links => (
                        
                        <Link key={links.name} to={links.path} className={`${isActive(links.path)?"text-green-600 font-semibold":"text-gray-700"} font-body text-gray-700 hover:text-green-500 transition duration-200`}>
                            {links.name}</Link>
                    )))}
                    <Link to="contact" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Shop Now</Link>
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-green-600 focus:outline-none" aria-label="Toggle menu">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
            
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md p-4 transition-all transform duration-300 ease-in-out">
                    < nav className="flex flex-col space-y-2 px-4 py-3">
                        {navLinks.map((links => (<Link key={links.name} to={links.path}  onClick={()=>setMenuOpen(false)} className="block text-gray-700 hover:text-green-600 transition">
                            {links.name}
                            </Link>
                        )))}
                            <Link to="contact" className="block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">Shop Now</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}


export default Navbar;