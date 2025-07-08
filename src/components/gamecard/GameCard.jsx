import { Link } from "react-router-dom";
import "./GameCard.scss";

export default function GameCard({ title, description, icon, alt, to }) {
  return (
    <Link to={to} className="game-card" aria-label={`Accéder à ${title}`}>
      <img src={icon} alt={alt} />
      <h3 className="h3">{title}</h3>
      <p className="body-small">{description}</p>
    </Link>
  );
}
