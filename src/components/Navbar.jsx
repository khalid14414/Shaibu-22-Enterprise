import { Link } from "react-router-dom";
function Navbar() {

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
            <Link to="/" className="text-2xl font-bold text-green-600">Shaibu 22</Link>
        <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((links =>(
                console.log(links),
               <Link key={links.name} to={links.path} className="text-gray-700 hover:text-green-600 transition">
                   {links.name}</Link>
            )))}
            <Link to="contact" className="bg-green-600 text-white px-4 rounded-full hover:bg-green-700 transition">Shop Now</Link>
        </nav>
        </div>
           
        </header>
    );
}


export default Navbar;