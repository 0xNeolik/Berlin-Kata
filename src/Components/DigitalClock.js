import React from "react";
import { getBerlinTime } from "../ClockLogic/ClockLogic";
import "./DigitalClock.css";

export default function DigitalClock({ seconds, minutes, hours }) {
  const berlinTime = getBerlinTime(seconds, minutes, hours);
  const digitalTime = `${hours} : ${minutes} : ${seconds}`;
  return (
    <div data-test="clock" id="clock">
      <div className="row">
        <div data-test="berlin-time-converter">
          <span>{digitalTime}</span> is{" "}
          <span data-test="berlin-time-value">{berlinTime}</span> in Berlin Time
        </div>
      </div>
      <div className="row">
        <div
          data-test="clock-seconds"
          className="clock-light"
          style={{
            backgroundColor: seconds % 2 ? "white" : "red",
          }}
        ></div>
      </div>
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
