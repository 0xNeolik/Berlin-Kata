// Function that adds the number zero in case the hour, minute or second does not have tens
const resetTimeToZero = (number) => {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};

// Function that returns the time in digital format
export const digitalTimeHourMinSec = (date = new Date()) => {
  const hour = resetTimeToZero(date.getHours());
  const minute = resetTimeToZero(date.getMinutes());
  const second = resetTimeToZero(date.getSeconds());
  const time = hour + ":" + minute + ":" + second;

  return {
    getTime: () => {
      return time;
    },
  };
};

// Function that returns the time divided into hours, minutes and seconds
export const splitDigitalTime = (time) => {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return { hours, minutes, seconds };
};
