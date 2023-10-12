import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import * as sounds from "./sounds.js";

export function countDown() {
  clearTimeout(state.coutdownId);

  if (!state.isRunning) {
    return;
  }

  let updatedMinute = Number(el.minutes.textContent);
  let updatedSecond = Number(el.seconds.textContent);

  --updatedSecond;

  if (updatedSecond < 0) {
    updatedSecond = 59;
    updatedMinute--;
  }

  if (updatedMinute < 0) {
    reset();
    return;
  }

  if (updatedSecond > 0 && updatedSecond <= 5) {
    sounds.bip.play();
  }
  if (updatedMinute == 0 && updatedSecond < 1) {
    sounds.finishSound.play();
  }
  updateDisplay(updatedMinute, updatedSecond);

  state.coutdownId = setTimeout(() => {
    countDown();
  }, 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
