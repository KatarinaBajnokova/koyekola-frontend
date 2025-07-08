import { useState } from "react";
import "@/pages/game/GameIntro.scss";

const difficultyOptions = [
  { value: "easy", label: "Facile" },
  { value: "medium", label: "Moyenne" },
  { value: "hard", label: "Difficile" },
];

export default function GameIntro({ mode, category, onStart, categoryImage }) {
  const [difficulty, setDifficulty] = useState("medium");

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleStart = () => {
    onStart(difficulty);
  };

  return (
    <section className="game-page__intro">
      <div className="category-header">
        <p className="body-default">
          Catégorie sélectionnée : <strong>{category}</strong>
        </p>

        {categoryImage && (
          <div className="category-image-wrapper">
            <img
              src={categoryImage}
              alt={`Illustration de la catégorie ${category}`}
              className="category-image"
            />
          </div>
        )}
      </div>

      <p className="body-default intro-text">
        Ici commencera le jeu <strong>{mode}</strong> avec les mots de la
        catégorie <strong>{category}</strong>.
      </p>

      <div className="difficulty-selector">
        <label htmlFor="difficulty">Choisir une difficulté :</label>
        <select
          id="difficulty"
          aria-label="Choisir la difficulté"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          {difficultyOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button className="start-button" onClick={handleStart}>
        Commencer
      </button>
    </section>
  );
}
