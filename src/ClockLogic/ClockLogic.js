export const secondsLight = (seconds) => {
  return seconds % 2 !== 0 ? "O" : "Y";
};

export const fiveHoursLights = (hours) => {
  let fiveHoursCount = Math.floor(hours / 5);
  let result;
  switch (fiveHoursCount) {
    case 0:
      result = "OOOO";
      break;
    case 1:
      result = "ROOO";
      break;
    case 2:
      result = "RROO";
      break;
    case 3:
      result = "RRRO";
      break;
    case 4:
      result = "RRRR";
      break;
    default:
      result = "OOOO";
  }
  return result;
};
