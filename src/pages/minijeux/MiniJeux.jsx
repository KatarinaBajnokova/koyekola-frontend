import "./MiniJeux.scss";
import Navbar from "@/components/navbar/Navbar";
import GameCard from "@/components/gamecard/GameCard";

import logoMemoire from "@/assets/img/memoire.png";
import logoGrille from "@/assets/img/mots.png";
import logoFruit from "@/assets/img/trouve.png";
import logoScramble from "@/assets/img/melanges.png";

// ─── Game Data ─────────────────────────────────────────────────────────────
const games = [
  {
    title: "Mémoire",
    description: "Associez les images aux mots en lingala",
    icon: logoMemoire,
    alt: "Jeu de mémoire",
    to: "/categories/memoire", // ✅ embedded game name in path
  },
  {
    title: "Mots Cachés",
    description: "Complétez la grille de mots cachés",
    icon: logoGrille,
    alt: "Grille de mots cachés",
    to: "/categories/grille",
  },
  {
    title: "Trouve le mot",
    description: "Choisissez le bon mot en lingala",
    icon: logoFruit,
    alt: "Jeu de mots à choix",
    to: "/categories/trouve",
  },
  {
    title: "Mots Mélangés",
    description: "Décodez le mot mélangé en lingala",
    icon: logoScramble,
    alt: "Jeu de mots mélangés",
    to: "/categories/melanges",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function MiniJeux() {
  return (
    <>
      <Navbar />

      <main className="mini-jeux">
        <h1 className="h1">Mini-jeux</h1>
        <p className="body-default">Apprends le Lingala de manière ludique</p>

        <section className="mini-jeux__games">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </section>
      </main>
    </>
  );
}
