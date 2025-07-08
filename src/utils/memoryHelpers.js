export function generateMemoryCards(category, difficulty, data) {
  let limit = 6;
  if (difficulty === "easy") limit = 4;
  else if (difficulty === "hard") limit = 9;

  const selected = data.slice(0, limit);

  const imageCards = selected.map((item) => ({
    id: `img-${item.id}`,
    pairId: item.id,
    type: "image",
    content: item.image,
  }));

  const textCards = selected.map((item) => ({
    id: `txt-${item.id}`,
    pairId: item.id,
    type: "text",
    content: item.nameLn,
  }));

  return [...imageCards, ...textCards].sort(() => Math.random() - 0.5);
}
