export function shuffleCards(originalCards) {
  return [...originalCards]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, uniqueId: index }));
}
