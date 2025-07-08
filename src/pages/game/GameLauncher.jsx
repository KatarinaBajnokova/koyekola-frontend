import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import GameLoader from "@/components/game/GameLoader";
import Spinner from "@/components/ui/Spinner";
import "@/pages/game/GameLauncher.scss";

import imgLegumes from "@/assets/img/legumes.png";
import imgFruits from "@/assets/img/fruits.png";
import imgAnimaux from "@/assets/img/animaux.png";
import imgChiffres from "@/assets/img/chiffres.png";

const categoryImages = {
  légumes: imgLegumes,
  fruits: imgFruits,
  animaux: imgAnimaux,
  chiffres: imgChiffres,
};

export default function GameLauncher() {
  const { game, category } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const difficulty = state?.difficulty;

  useEffect(() => {
    if (!difficulty) {
      navigate("/jeux");
    }
  }, [difficulty, navigate]);

  if (!game || !category || !difficulty) {
    return (
      <>
        <Navbar />
        <main className="game-launcher fade-in">
          <Spinner />
        </main>
      </>
    );
  }

  const categoryImage = categoryImages[category];

  return (
    <>
      <Navbar />
      <main className="game-launcher fade-in">
        <GameLoader
          mode={game}
          category={category}
          difficulty={difficulty}
          categoryImage={categoryImage}
        />
      </main>
    </>
  );
}
