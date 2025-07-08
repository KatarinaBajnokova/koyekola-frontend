import { useNavigate } from "react-router-dom";
import "@/components/GameWonModal.scss";

export default function GameWonModal({
  time,
  bestTime,
  isNewRecord,
  onReplay,
}) {
  const navigate = useNavigate();

  return (
    <div className="game-won__overlay">
      <div className="game-won__modal">
        <h2>🎉 Bravo !</h2>
        <p>
          Tu as terminé en <strong>{time}</strong>.
        </p>
        {isNewRecord ? (
          <p className="new-record">🏆 Nouveau record !</p>
        ) : (
          <p>Meilleur temps : {bestTime}</p>
        )}

        <div className="modal-buttons">
          <button onClick={onReplay} className="replay-button">
            🔁 Rejouer
          </button>
          <button
            onClick={() => navigate("/jeux")}
            className="back-button-to-games"
          >
            🕹️ Retour aux jeux
          </button>
        </div>
      </div>
    </div>
  );
}
