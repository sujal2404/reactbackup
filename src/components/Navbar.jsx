import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                Havyn
            </div>

            <div className="nav-links"> 
                <a href="#">Home</a>
                <a href="#">Properties</a>
                <a href="#">About</a>
                <a href="#">Agents</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>

            <button className="sigin-btn">
                Sign In
            </button>
        </nav>
    );
}

export default Navbar;