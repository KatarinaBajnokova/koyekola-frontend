import { useEffect, useState } from "react";
import "@/components/Countdown.scss";

export default function Countdown({ onComplete }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  return (
    <div className="countdown-overlay">
      <div className="countdown-number">{count === 0 ? "Go!" : count}</div>
    </div>
  );
}
