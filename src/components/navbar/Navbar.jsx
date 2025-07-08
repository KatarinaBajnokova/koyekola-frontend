import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "@/assets/logo/koyekolaColoured.png";

export default function Navbar() {
  const navItems = [
    { path: "/jeux", label: "jeux" },
    { path: "/#livre", label: "livre" },
    { path: "/#contact", label: "contact" },
    { path: "/#connexion", label: "connexion" },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Menu principal">
      <div className="navbar__logo">
        <img src={logo} alt="Logo de Koyekola" />
      </div>

      <ul className="navbar__links">
        {navItems.map(({ path, label }) => (
          <li key={label}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
