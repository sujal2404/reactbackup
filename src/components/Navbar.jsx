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

            <button className="btn btn-secondary">
                Sign In
            </button>
        </nav>

        // <Navbar bg="dark" data-bs-theme="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
    );
}

export default Navbar;