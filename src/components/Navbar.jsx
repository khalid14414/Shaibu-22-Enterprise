function Navbar() {
    return (
        <header className="flex justify-between items-center bg-white p-4 ">
            {/* <img src="" alt="Logo" /> */}
            <h2 className="">Logo</h2>
            <nav className="flex">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>About</li>
                
                <button>Shop Now</button>
            </nav>
        </header>
    );
}


export default Navbar;