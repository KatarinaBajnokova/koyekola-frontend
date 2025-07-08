import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import GameIntro from "@/pages/game/GameIntro";

// 🖼 Category image imports
import imgLegumes from "@/assets/img/legumes.png";
import imgFruits from "@/assets/img/fruits.png";
import imgAnimaux from "@/assets/img/animaux.png";
import imgChiffres from "@/assets/img/chiffres.png";

// 🗺 Image map
const categoryImages = {
  légumes: imgLegumes,
  fruits: imgFruits,
  animaux: imgAnimaux,
  chiffres: imgChiffres,
};

export default function GameIntroPage() {
  const { game, category } = useParams();
  const navigate = useNavigate();

  const handleStart = (difficulty) => {
    navigate(`/${game}/${category}`, {
      state: { difficulty },
    });
  };

  return (
    <>
      <Navbar />
      <main className="game-intro-container">
        <GameIntro
          mode={game}
          category={category}
          categoryImage={categoryImages[category]}
          onStart={handleStart}
        />
      </main>
    </>
  );
}
