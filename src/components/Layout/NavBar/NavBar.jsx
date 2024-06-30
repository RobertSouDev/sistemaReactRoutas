import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
  return (
    
      <nav className="topnav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
  );
}

export default NavBar;
