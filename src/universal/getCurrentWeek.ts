export const getCurrentWeek = () => {
  const currDate = new Date();
  const currDay = currDate.getDay()

  const firstDayOfTheWeek = currDate.getTime() - (currDay * 24 * 60**2 * 1000);
  const lastDayOfTheWeek = firstDayOfTheWeek + 7 * 24 * 60**2 * 1000;

  const firstDate = new Date(firstDayOfTheWeek);
  const lastDate = new Date(lastDayOfTheWeek);

  return `${firstDate.toLocaleDateString()} - ${lastDate.toLocaleDateString()}`;
}