import React from "react";
import { secondsLight, fiveHoursLights } from "../ClockLogic/ClockLogic";

export default function DigitalClock({ seconds, minutes, hours }) {
  return (
    <div data-test="clock">
      <div data-test="clock-seconds" id="clock-seconds">
        {secondsLight(seconds)}
      </div>
      <div data-test="clock-5-hours-container">
        {fiveHoursLights(hours)}
        <div
          data-test="clock-5-hours-container-children-0"
          style={{
            backgroundColor: 5 < hours ? "none" : "red",
          }}
        ></div>
        <div
          data-test="clock-5-hours-container-children-1"
          style={{
            backgroundColor: 10 < hours ? "none" : "red",
          }}
        ></div>
        <div
          data-test="clock-5-hours-container-children-2"
          style={{
            backgroundColor: 15 < hours ? "none" : "red",
          }}
        ></div>
        <div
          data-test="clock-5-hours-container-children-3"
          style={{
            backgroundColor: 20 < hours ? "none" : "red",
          }}
        ></div>
      </div>
    </div>
  );
}
