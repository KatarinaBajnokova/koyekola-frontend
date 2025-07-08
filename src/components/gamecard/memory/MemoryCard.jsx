// src/components/MemoryCard.jsx
export default function MemoryCard({ card, isFlipped, onClick }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => onClick(card)}
    >
      {isFlipped ? (
        card.type === "image" ? (
          <img src={card.content} alt="mot" className="card-image" />
        ) : (
          <span className="card-text">{card.content}</span>
        )
      ) : (
        <span className="card-back">❓</span>
      )}
    </div>
  );
}
