import React from "react";
import { secondsLight } from "../ClockLogic/ClockLogic";

export default function DigitalClock({ seconds, minutes, hours }) {
  return (
    <>
      <div data-test="clock-seconds" id="clock-seconds">
        {secondsLight(seconds)}
      </div>
      <div data-test="clock-5-hours-container">
        <div data-test="clock-5-hours-container-children-0"></div>
        <div data-test="clock-5-hours-container-children-1"></div>
        <div data-test="clock-5-hours-container-children-2"></div>
        <div data-test="clock-5-hours-container-children-3"></div>
      </div>
    </>
  );
}
