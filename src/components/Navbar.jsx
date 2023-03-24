import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="logo">Bold Tattoo</h1> {/* trocar h1 por uma logo */}
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/sobre" className="link">
          Sobre nós
        </Link>
        <Link to="/artistas" className="link">
          Artistas
        </Link>
        <Link to="/galeria" className="link">
          Galeria
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
