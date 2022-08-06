import React from "react";
import { getBerlinTime } from "../ClockLogic/ClockLogic";
import { digitalTimeHourMinSec } from "../Utils/utils";
import "./DigitalClock.css";

export default function DigitalClock({ seconds, minutes, hours }) {
  // Constant that shows the time with the nomenclature "O"- "Y" - "R" Berlin Time
  const berlinTime = getBerlinTime(seconds, minutes, hours);
  // Constant that shows the time with the nomenclature "Hours" - "Minutes" - "Seconds" Digital time
  const digitalTime = digitalTimeHourMinSec().getTime();
  return (
    // Render the clock in website
    <div data-test="clock" id="clock">
      {/* First row - Converter time from digital time to Berlin Time */}
      <div className="row">
        <div data-test="berlin-time-converter">
          <span>{digitalTime}</span> is{" "}
          <span data-test="berlin-time-value">{berlinTime}</span> in Berlin Time
        </div>
      </div>
      {/* Second row - Renders the clock by seconds white for 
       even seconds red for odd seconds*/}
      <div className="row">
        <div
          data-test="clock-seconds"
          className="clock-light"
          style={{
            backgroundColor: seconds % 2 ? "white" : "red",
          }}
        ></div>
      </div>
      {/* Third row - 5 hours lights block - Renders the lights for the 5 
      hours block , if the current time is within the 5 hour block the 
      light will be red if not white*/}
      <div data-test="clock-5-hours-container" className="row">
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-0"
          style={{
            backgroundColor: 5 >= hours ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-1"
          style={{
            backgroundColor: 10 >= hours ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-2"
          style={{
            backgroundColor: 15 >= hours ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-hours-container-children-3"
          style={{
            backgroundColor: 20 >= hours ? "white" : "red",
          }}
        ></div>
      </div>
      {/* Fourth row - single hour lights block - Renders the lights for the single 
      hour block , shows in red the lights that have been passed in the block of 5 
      hours of the upper row if not the light will be white*/}
      <div data-test="clock-single-hour-container" className="row">
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-0"
          style={{
            backgroundColor: hours % 5 === 0 ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-1"
          style={{
            backgroundColor: hours % 5 < 1 ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-2"
          style={{
            backgroundColor: hours % 5 < 2 ? "white" : "red",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-hour-container-children-3"
          style={{
            backgroundColor: hours % 5 < 3 ? "white" : "red",
          }}
        ></div>
      </div>
      {/* Fifth row - 5 minutes lights block - Renders lights blocks of 5 minutes 
      that make up the light on the top row, if the current time is within its block, 
      the light will be yellow, if not white. Every multiple of 3 will be a red light 
      instead of yellow.*/}
      <div data-test="clock-5-minutes-container" className="row">
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-0"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 1 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-1"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 2 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-2"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 3 ? "red" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-3"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 4 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-4"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 5 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-5"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 6 ? "red" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-6"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 7 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-7"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 8 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-8"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 9 ? "red" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-9"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 10 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-5-minutes-container-children-10"
          style={{
            backgroundColor: Math.floor(minutes / 5) >= 11 ? "yellow" : "white",
          }}
        ></div>
      </div>
      {/* Sixth row - 5 minutes lights block - Renders a yellow light for each minute 
      that has passed in the current light block on the top row, if the minute has 
      not passed a white light is shown*/}
      <div data-test="clock-single-minute-container" className="row">
        <div
          className="clock-light"
          data-test="clock-single-minute-container-children-0"
          style={{
            backgroundColor: minutes % 5 >= 1 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-minute-container-children-1"
          style={{
            backgroundColor: minutes % 5 >= 2 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-minute-container-children-2"
          style={{
            backgroundColor: minutes % 5 >= 3 ? "yellow" : "white",
          }}
        ></div>
        <div
          className="clock-light"
          data-test="clock-single-minute-container-children-3"
          style={{
            backgroundColor: minutes % 5 >= 4 ? "yellow" : "white",
          }}
        ></div>
      </div>
    </div>
  );
}
