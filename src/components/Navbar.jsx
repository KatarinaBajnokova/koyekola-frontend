import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "@/assets/logo/koyekolaColoured.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Koyekola Logo" />
      </div>

      <ul className="navbar__links">
        <li>
          <NavLink to="/jeux">jeux</NavLink>
        </li>
        <li>
          <NavLink to="/#livre">livre</NavLink>
        </li>
        <li>
          <NavLink to="/#contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/#connexion">connexion</NavLink>
        </li>
      </ul>
    </nav>
  );
}
