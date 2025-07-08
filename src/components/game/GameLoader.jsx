// src/components/game/GameLoader.jsx
import MemoryGame from "@/pages/memorygame/MemoryGame";
// import others as you build them

export default function GameLoader({ mode, category, difficulty }) {
  switch (mode) {
    case "memoire":
      return <MemoryGame category={category} difficulty={difficulty} />;
    // other game modes...
    default:
      return <p>Ce mode de jeu n’est pas encore disponible.</p>;
  }
}
