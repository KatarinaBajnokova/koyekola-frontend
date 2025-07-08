import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import "./Categories.scss";

import imgLegumes from "@/assets/img/legumes.png";
import imgFruits from "@/assets/img/fruits.png";
import imgAnimaux from "@/assets/img/animaux.png";
import imgChiffres from "@/assets/img/chiffres.png";

// ─── Category Data ─────────────────────────────────────────────────────────
const categories = [
  { name: "légumes", image: imgLegumes },
  { name: "fruits", image: imgFruits },
  { name: "animaux", image: imgAnimaux },
  { name: "chiffres", image: imgChiffres },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function Categories() {
  const { game } = useParams(); // ✅ now from URL
  const navigate = useNavigate();

  // ⛔ Redirect to /jeux if game is missing (e.g. invalid URL)
  useEffect(() => {
    if (!game) {
      alert("Erreur : jeu inconnu");
      navigate("/jeux");
    }
  }, [game, navigate]);

  const handleClick = (category) => {
    navigate(`/${game}/${category}/intro`);
  };

  return (
    <>
      <Navbar />

      <main className="categories">
        <h1 className="h1">Catégories</h1>
        <p className="body-default">Choisis une catégorie pour continuer</p>

        <section className="categories__list">
          {categories.map(({ name, image }) => (
            <div
              key={name}
              className="category-card"
              onClick={() => handleClick(name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClick(name)}
            >
              <img src={image} alt={name} />
              <p className="body-default">{name}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
