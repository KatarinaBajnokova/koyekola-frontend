import MemoryCard from "@/components/gamecard/memory/MemoryCard";

export default function MemoryGrid({ cards, flipped, matched, onFlip }) {
  return (
    <div className="grid">
      {cards.map((card) => {
        const isFlipped =
          flipped.includes(card.id) || matched.includes(card.id);
        return (
          <MemoryCard
            key={card.id}
            card={card}
            isFlipped={isFlipped}
            onClick={onFlip}
          />
        );
      })}
    </div>
  );
}
