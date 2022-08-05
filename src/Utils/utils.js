const resetTimeToZero = (number) => {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};

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

export const splitDigitalTime = (time) => {
  let timeParts = time.split(":");
  let hours = timeParts[0];
  let minutes = timeParts[1];
  let seconds = timeParts[2];

  return { hours, minutes, seconds };
};
