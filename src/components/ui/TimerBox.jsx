import { formatTime } from "@/utils/time";

export default function TimerBox({ time, bestTime }) {
  return (
    <div className="timer-box">
      <p>
        ⏱ Temps écoulé :{" "}
        <span className={time > 90 ? "red-time" : ""}>{formatTime(time)}</span>
      </p>
      {bestTime !== null && (
        <p>
          🥇 Meilleur temps : <strong>{formatTime(bestTime)}</strong>
        </p>
      )}
    </div>
  );
}
