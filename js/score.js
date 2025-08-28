import { elScore } from "./html.selection.js";

let scoreValue = 0;

export function updateScore(winner) {
  if (winner.startsWith("YOU WIN")) {
    scoreValue++;
  } else if (winner.startsWith("LOSER") && scoreValue > 0) {
    scoreValue--;
  }
  elScore.textContent = scoreValue;
}

export function resetScore() {
  scoreValue = 0;
  elScore.textContent = scoreValue;
}
