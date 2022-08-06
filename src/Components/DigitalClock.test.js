import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../test/testUtils";
import DigitalClock from "./DigitalClock";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}) => {
  return shallow(<DigitalClock {...props} />);
};

describe("test the correct job of the seconds clock", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 0 });
  });

  test("renders the clock without an error", () => {
    const clock = findByTestAttribute(wrapper, "clock");
    expect(clock.length).toBe(1);
  });

  test("renders the berlin time converter to digital time without an error", () => {
    const berlinTimeConverter = findByTestAttribute(
      wrapper,
      "berlin-time-converter"
    );
    expect(berlinTimeConverter.length).toBe(1);
  });

  test("renders a string with 24 caracteres", () => {
    const berlinTimeValue = findByTestAttribute(wrapper, "berlin-time-value");
    expect(berlinTimeValue.text().length).toBe(24);
  });

  test("renders the seconds clock without an error", () => {
    const clockSeconds = findByTestAttribute(wrapper, "clock-seconds");
    expect(clockSeconds.length).toBe(1);
  });

  test("styled the light when seconds are odd", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 39 });
    const clockSecondsOdd = findByTestAttribute(wrapper, "clock-seconds");
    expect(clockSecondsOdd.props().style).toStrictEqual({
      backgroundColor: "white",
    });
  });

  test("styled the light when seconds are even", () => {
    const clockSecondsEven = findByTestAttribute(wrapper, "clock-seconds");
    expect(clockSecondsEven.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light with white background when the hours are beetwen 0-5", () => {
    wrapper = setUp({ hours: 3, minutes: 0, seconds: 0 });
    const clockFiveHoursContainerZero = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-0"
    );
    expect(clockFiveHoursContainerZero.props().style).toStrictEqual({
      backgroundColor: "white",
    });
  });

  test("styled the light when the hours are beetwen 5-10", () => {
    wrapper = setUp({ hours: 7, minutes: 0, seconds: 0 });
    const clockFiveHoursContainerZero = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-0"
    );
    expect(clockFiveHoursContainerZero.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hours are beetwen 10-15", () => {
    wrapper = setUp({ hours: 11, minutes: 0, seconds: 0 });
    const clockFiveHoursContainerOne = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-1"
    );
    expect(clockFiveHoursContainerOne.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hours are beetwen 15-20", () => {
    wrapper = setUp({ hours: 16, minutes: 0, seconds: 0 });
    const clockFiveHoursContainerTwo = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-2"
    );
    expect(clockFiveHoursContainerTwo.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hours are beetwen 20-24", () => {
    wrapper = setUp({ hours: 23, minutes: 0, seconds: 0 });
    const clockFiveHoursContainerThree = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-3"
    );
    expect(clockFiveHoursContainerThree.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light with white background when the hour is the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 0 });
    const clockSingleHourContainerZero = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-0"
    );
    expect(clockSingleHourContainerZero.props().style).toStrictEqual({
      backgroundColor: "white",
    });
  });

  test("styled the light when the hour is the first of the block", () => {
    wrapper = setUp({ hours: 1, minutes: 0, seconds: 0 });
    const clockSingleHourContainerZero = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-0"
    );
    expect(clockSingleHourContainerZero.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hour is the second of the block", () => {
    wrapper = setUp({ hours: 2, minutes: 0, seconds: 0 });
    const clockSingleHourContainerOne = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-1"
    );
    expect(clockSingleHourContainerOne.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hour is the third of the block", () => {
    wrapper = setUp({ hours: 3, minutes: 0, seconds: 0 });
    const clockSingleHourContainerTwo = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-2"
    );
    expect(clockSingleHourContainerTwo.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the hour is the last of the block", () => {
    wrapper = setUp({ hours: 4, minutes: 0, seconds: 0 });
    const clockSingleHourContainerThree = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-3"
    );
    expect(clockSingleHourContainerThree.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light with white backgorund when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 2, seconds: 0 });
    const clockFiveMinutesContainerZero = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-0"
    );
    expect(clockFiveMinutesContainerZero.props().style).toStrictEqual({
      backgroundColor: "white",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 6, seconds: 0 });
    const clockFiveMinutesContainerZero = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-0"
    );
    expect(clockFiveMinutesContainerZero.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 11, seconds: 0 });
    const clockFiveMinutesContainerOne = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-1"
    );
    expect(clockFiveMinutesContainerOne.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 18, seconds: 0 });
    const clockFiveMinutesContainerTwo = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-2"
    );
    expect(clockFiveMinutesContainerTwo.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 23, seconds: 0 });
    const clockFiveMinutesContainerThree = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-3"
    );
    expect(clockFiveMinutesContainerThree.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 28, seconds: 0 });
    const clockFiveMinutesContainerFour = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-4"
    );
    expect(clockFiveMinutesContainerFour.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 32, seconds: 0 });
    const clockFiveMinutesContainerFive = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-5"
    );
    expect(clockFiveMinutesContainerFive.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 35, seconds: 0 });
    const clockFiveMinutesContainerSix = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-6"
    );
    expect(clockFiveMinutesContainerSix.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 42, seconds: 0 });
    const clockFiveMinutesContainerSeven = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-7"
    );
    expect(clockFiveMinutesContainerSeven.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 46, seconds: 0 });
    const clockFiveMinutesContainerEight = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-8"
    );
    expect(clockFiveMinutesContainerEight.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 51, seconds: 0 });
    const clockFiveMinutesContainerNine = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-9"
    );
    expect(clockFiveMinutesContainerNine.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minutes are the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 55, seconds: 0 });
    const clockFiveMinutesContainerTen = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-10"
    );
    expect(clockFiveMinutesContainerTen.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light with white background when the minute is the first of the block", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 40 });
    const clockSingleMinuteContainerZero = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-0"
    );
    expect(clockSingleMinuteContainerZero.props().style).toStrictEqual({
      backgroundColor: "white",
    });
    const clockSingleMinuteContainerOne = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-1"
    );
    expect(clockSingleMinuteContainerOne.props().style).toStrictEqual({
      backgroundColor: "white",
    });
    const clockSingleMinuteContainerTwo = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-2"
    );
    expect(clockSingleMinuteContainerTwo.props().style).toStrictEqual({
      backgroundColor: "white",
    });
    const clockSingleMinuteContainerThree = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-3"
    );
    expect(clockSingleMinuteContainerThree.props().style).toStrictEqual({
      backgroundColor: "white",
    });
  });

  test("styled the light when the minute is the second of the block", () => {
    wrapper = setUp({ hours: 1, minutes: 1, seconds: 20 });
    const clockSingleMinuteContainerZero = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-0"
    );
    expect(clockSingleMinuteContainerZero.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minute is the third of the block", () => {
    wrapper = setUp({ hours: 2, minutes: 2, seconds: 30 });
    const clockSingleMinuteContainerOne = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-1"
    );
    expect(clockSingleMinuteContainerOne.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minute is the fourth of the block", () => {
    wrapper = setUp({ hours: 3, minutes: 3, seconds: 50 });
    const clockSingleMinuteContainerTwo = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-2"
    );
    expect(clockSingleMinuteContainerTwo.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("styled the light when the minute is the last of the block", () => {
    wrapper = setUp({ hours: 4, minutes: 4, seconds: 59 });
    const clockSingleMinuteContainerThree = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-3"
    );
    expect(clockSingleMinuteContainerThree.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });
});
