import { useEffect, useState } from "react";
import { categoryDataMap } from "@/data/memory/categories";
import { generateMemoryCards } from "@/utils/memoryHelpers";
import GameWonModal from "@/components/GameWonModal";
import TimerBox from "@/components/ui/TimerBox";
import MemoryGrid from "@/components/gameboard/MemoryGrid";
import {
  popSound,
  mismatchSound,
  matchSound,
  victorySound,
  preloadSounds,
} from "@/utils/sounds";
import "./MemoryGame.scss";

export default function MemoryGame({ category, difficulty = "medium" }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(false);

  useEffect(() => {
    preloadSounds();
  }, []);

  useEffect(() => {
    const storedBest = localStorage.getItem(
      `bestTime-${category}-${difficulty}`
    );
    if (storedBest) setBestTime(Number(storedBest));
  }, [category, difficulty]);

  useEffect(() => {
    const data = categoryDataMap[category] || [];
    const generated = generateMemoryCards(category, difficulty, data);
    setCards(generated);
    setFlipped([]);
    setMatched([]);
    setTime(0);
    setIsFinished(false);
    setShowModal(false);
    setIsNewRecord(false);
  }, [category, difficulty]);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished]);

  const handleFlip = (card) => {
    if (flipped.length === 2 || flipped.includes(card.id)) return;

    try {
      popSound.currentTime = 0;
      popSound.play();
    } catch (e) {
      console.warn("Pop sound couldn't play:", e);
    }

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map((id) =>
        cards.find((c) => c.id === id)
      );
      const isMatch =
        first.pairId === second.pairId && first.type !== second.type;

      if (isMatch) {
        try {
          matchSound.currentTime = 0;
          matchSound.play();
        } catch (e) {
          console.warn("Match sound couldn't play:", e);
        }

        setMatched((prev) => {
          const newMatched = [...prev, first.id, second.id];
          if (newMatched.length === cards.length) {
            setIsFinished(true);
            if (!bestTime || time < bestTime) {
              localStorage.setItem(`bestTime-${category}-${difficulty}`, time);
              setBestTime(time);
              setIsNewRecord(true);
            }
            setTimeout(() => {
              try {
                victorySound.currentTime = 0;
                victorySound.play();
              } catch (e) {
                console.warn("Victory sound couldn't play:", e);
              }
              setShowModal(true);
            }, 500);
          }
          return newMatched;
        });
      } else {
        try {
          mismatchSound.currentTime = 0;
          mismatchSound.play();
        } catch (e) {
          console.warn("Mismatch sound couldn't play:", e);
        }
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const handleReplay = () => {
    setShowModal(false);
    setIsFinished(false);
    setFlipped([]);
    setMatched([]);
    setTime(0);
    const reshuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(reshuffled);
  };

  return (
    <div className="memory-game">
      <h1 className="h1">Jeu de mémoire</h1>

      <TimerBox time={time} bestTime={bestTime} />

      <MemoryGrid
        cards={cards}
        flipped={flipped}
        matched={matched}
        onFlip={handleFlip}
      />

      {showModal && (
        <GameWonModal
          time={time}
          bestTime={bestTime}
          isNewRecord={isNewRecord}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
}
