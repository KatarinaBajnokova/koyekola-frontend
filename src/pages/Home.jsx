import "./Home.scss";
import Navbar from "@/components/Navbar";
import monkeyImage from "../assets/img/monkey.png";
import iconBrain from "@/assets/icons/brain.png";
import iconBook from "@/assets/icons/book.png";
import iconProgress from "@/assets/icons/progress.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <main className="home">
          <header className="home__header">
            <img
              src={monkeyImage}
              alt="Mascot monkey"
              className="home__mascot"
            />

            <div className="home__intro">
              <h1 className="h1">Apprends le Lingala en t'amusant</h1>
              <button className="cta-button">commencer</button>
            </div>
          </header>

          <section className="home__features">
            <div className="feature">
              <img src={iconBrain} alt="Mini-jeux" />
              <h3 className="h3">Mini-jeux</h3>
              <p className="body-small">
                Apprends des mots et <br /> expressions en lingala de <br />{" "}
                manière ludique.
              </p>
            </div>

            <div className="feature">
              <img src={iconBook} alt="Livre de mots" />
              <h3 className="h3">Livre de mots</h3>
              <p className="body-small">
                Explore et révise les mots <br /> que tu as débloqués
              </p>
            </div>

            <div className="feature">
              <img src={iconProgress} alt="Suivi des progrès" />
              <h3 className="h3">Suivi des progrès</h3>
              <p className="body-small">
                Suis ton apprentissage, <br /> niveau après niveau
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
