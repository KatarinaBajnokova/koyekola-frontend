import "./MiniJeux.scss";
import Navbar from "@/components/Navbar";
import logoMemoire from "@/assets/img/memoire.png";
import logoGrille from "@/assets/img/mots.png";
import logoFruit from "@/assets/img/trouve.png";
import logoScramble from "@/assets/img/melanges.png";

export default function MiniJeux() {
  return (
    <>
      <Navbar />

      <main className="mini-jeux">
        <h1 className="h1">Mini-jeux</h1>
        <p className="body-default">Apprends le Lingala de manière ludique</p>

        <section className="mini-jeux__games">
          <div className="game-card">
            <img src={logoMemoire} alt="Memoire" />
            <h3 className="h3">Memoire</h3>
            <p className="body-small">
              Associez les images aux mots en lingala
            </p>
          </div>

          <div className="game-card">
            <img src={logoGrille} alt="Mots Caches" />
            <h3 className="h3">Mots Caches</h3>
            <p className="body-small">Complétez la grille de mots cachés</p>
          </div>

          <div className="game-card">
            <img src={logoFruit} alt="Trouve le mot" />
            <h3 className="h3">Trouve le mot</h3>
            <p className="body-small">Choisissez le bon mot en lingala</p>
          </div>

          <div className="game-card">
            <img src={logoScramble} alt="Mots Melangés" />
            <h3 className="h3">Mots Melangés</h3>
            <p className="body-small">Decodez le mot mélangé en lingala</p>
          </div>
        </section>
      </main>
    </>
  );
}
