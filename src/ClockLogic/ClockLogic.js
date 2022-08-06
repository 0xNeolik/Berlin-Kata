// Returns the Berlin Time nomenclature for second block
const secondsLight = (seconds) => {
  return seconds % 2 !== 0 ? "O" : "Y";
};

// Returns the Berlin Time nomenclature for hours - 5 hours & single hour blocks
const hoursLights = (hours, type) => {
  let expresionToSwitch = Math.floor(hours / 5);
  if (type === "singleHours") {
    expresionToSwitch = hours % 5;
  }
  let result;
  switch (expresionToSwitch) {
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

// Returns the Berlin Time nomenclature for 5 minutes block - 5 minutes block
const fiveMinutesLights = (minutes) => {
  let fiveMinutesCount = Math.floor(minutes / 5);
  let result;
  switch (fiveMinutesCount) {
    case 0:
      result = "OOOOOOOOOOO";
      break;
    case 1:
      result = "YOOOOOOOOOO";
      break;
    case 2:
      result = "YYOOOOOOOOO";
      break;
    case 3:
      result = "YYROOOOOOOO";
      break;
    case 4:
      result = "YYRYOOOOOOO";
      break;
    case 5:
      result = "YYRYYOOOOOO";
      break;
    case 6:
      result = "YYRYYROOOOO";
      break;
    case 7:
      result = "YYRYYRYOOOO";
      break;
    case 8:
      result = "YYRYYRYYOOO";
      break;
    case 9:
      result = "YYRYYRYYROO";
      break;
    case 10:
      result = "YYRYYRYYRYO";
      break;
    case 11:
      result = "YYRYYRYYRYY";
      break;
    default:
      result = "OOOOOOOOOOO";
  }
  return result;
};

// Returns the Berlin Time nomenclature for single minute block - single minute block
const singleMinutesLights = (minutes) => {
  let minutesCount = minutes % 5;
  let result;
  switch (minutesCount) {
    case 0:
      result = "OOOO";
      break;
    case 1:
      result = "YOOO";
      break;
    case 2:
      result = "YYOO";
      break;
    case 3:
      result = "YYYO";
      break;
    case 4:
      result = "YYYY";
      break;
    default:
      result = "OOOO";
  }
  return result;
};

// Returns the Berlin Time nomenclature for time - Berlin Time converter
export const getBerlinTime = (seconds, minutes, hours) => {
  return (
    secondsLight(seconds) +
    hoursLights(hours) +
    hoursLights(hours, "singleHours") +
    fiveMinutesLights(minutes) +
    singleMinutesLights(minutes)
  );
};
