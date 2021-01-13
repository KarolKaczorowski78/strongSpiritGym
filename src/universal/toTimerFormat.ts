export const toTimerFormat = (seconds: number) => {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}