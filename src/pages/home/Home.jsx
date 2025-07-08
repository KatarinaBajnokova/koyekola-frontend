// ─── React / Routing ────────────────────────────────────────────────────────
import { useNavigate } from "react-router-dom";

// ─── Styles ─────────────────────────────────────────────────────────────────
import "./Home.scss";

// ─── Components ─────────────────────────────────────────────────────────────
import FeatureCard from "@/components/home/FeatureCard";
import Navbar from "@/components/navbar/Navbar";

// ─── Data / Assets ──────────────────────────────────────────────────────────
import { features } from "@/data/featuresData.jsx";
import monkeyImage from "@/assets/img/monkey.png";

// ─── Component ──────────────────────────────────────────────────────────────
function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/jeux");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <main className="home" role="main">
          {/* ─── Hero Section ─────────────────────────────────────────────── */}
          <header className="home__header">
            <img
              src={monkeyImage}
              alt="Mascotte du jeu Lingala"
              className="home__mascot"
              width={150}
              height="auto"
              loading="lazy"
            />

            <div className="home__intro">
              <h1 className="h1">Apprends le Lingala en t'amusant</h1>
              <button
                className="cta-button"
                onClick={handleStart}
                aria-label="Commencer les jeux"
              >
                Commencer
              </button>
            </div>
          </header>

          {/* ─── Features Section ────────────────────────────────────────── */}
          <section
            className="home__features"
            aria-label="Fonctionnalités du jeu"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
