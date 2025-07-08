// src/data/fruitsPairs.js
import { fruits } from "./fruitsData";

export function getCardPairsForFruits() {
  const pairs = [];

  fruits.forEach((item) => {
    pairs.push(
      { id: item.id, type: "image", content: item.image },
      { id: item.id, type: "text", content: item.nameLn }
    );
  });

  return pairs;
}
