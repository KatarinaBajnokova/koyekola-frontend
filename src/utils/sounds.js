export const popSound = new Audio("/sounds/pop.wav");
export const mismatchSound = new Audio("/sounds/wrong.wav");
export const matchSound = new Audio("/sounds/match.wav");
export const victorySound = new Audio("/sounds/victory.mp3");

export function preloadSounds() {
  popSound.load();
  mismatchSound.load();
  matchSound.load();
  victorySound.load();
}
