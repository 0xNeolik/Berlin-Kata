import React from "react";
import {
  secondsLight,
  fiveHoursLights,
  singleHoursLights,
} from "../ClockLogic/ClockLogic";
import "./DigitalClock.css";

export default function DigitalClock({ seconds, minutes, hours }) {
  return (
    <div data-test="clock" id="clock">
      <div className="row">
        <div
          data-test="clock-seconds"
          className="clock-light"
          style={{
            backgroundColor: seconds % 2 ? "yellow" : "red",
          }}
        >
          {secondsLight(seconds)}
        </div>
      </div>
      <div data-test="clock-5-hours-container" className="row">
        {fiveHoursLights(hours)}
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-0"
          style={{
            backgroundColor: 5 <= hours ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-1"
          style={{
            backgroundColor: 10 <= hours ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-2"
          style={{
            backgroundColor: 15 <= hours ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-3"
          style={{
            backgroundColor: 20 <= hours ? "yellow" : "red",
          }}
        ></div>
      </div>
      <div data-test="clock-single-hour-container" className="row">
        {singleHoursLights(hours)}
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-0"
          style={{
            backgroundColor: hours % 5 > 0 ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-1"
          style={{
            backgroundColor: hours % 5 > 1 ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-2"
          style={{
            backgroundColor: hours % 5 > 2 ? "yellow" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-3"
          style={{
            backgroundColor: hours % 5 > 3 ? "yellow" : "red",
          }}
        ></div>
      </div>
    </div>
  );
}
