import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute, checkProps } from "../test/testUtils";
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
  test("renders the clock without a error", () => {
    const component = findByTestAttribute(wrapper, "clock");
    expect(component.length).toBe(1);
  });
  test("renders the seconds clock without a error", () => {
    const component = findByTestAttribute(wrapper, "clock-seconds");
    expect(component.length).toBe(1);
  });
  test("renders O when seconds are odd and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 39 });
    const component = findByTestAttribute(wrapper, "clock-seconds");
    expect(component.text()).toBe("O");
    expect(component.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });
  test("renders Y when seconds are even", () => {
    const component = findByTestAttribute(wrapper, "clock-seconds");
    expect(component.text()).toBe("Y");
  });

  test("renders OOOO when the hours are beetwen 0-5 and styled the light", () => {
    wrapper = setUp({ hours: 3, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("OOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-0"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders ROOO when the hours are beetwen 5-10 and styled the light", () => {
    wrapper = setUp({ hours: 7, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("ROOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-1"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RROO when the hours are beetwen 10-15 and styled the light", () => {
    wrapper = setUp({ hours: 11, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("RROO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-2"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RRRO when the hours are beetwen 15-20 and styled the light", () => {
    wrapper = setUp({ hours: 16, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("RRRO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-hours-container-children-3"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RRRR when the hours are beetwen 20-24", () => {
    wrapper = setUp({ hours: 23, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("RRRR");
  });

  test("renders OOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-hour-container"
    );
    expect(component.text()).toBe("OOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-0"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders ROOO when the hous is the second of the block and styled the light", () => {
    wrapper = setUp({ hours: 1, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-hour-container"
    );
    expect(component.text()).toBe("ROOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-1"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RROO when the hous is the third of the block and styled the light", () => {
    wrapper = setUp({ hours: 2, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-hour-container"
    );
    expect(component.text()).toBe("RROO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-2"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RRRO when the hous is the fourth of the block and styled the light", () => {
    wrapper = setUp({ hours: 3, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-hour-container"
    );
    expect(component.text()).toBe("RRRO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-hour-container-children-3"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders RRRR when the hous is the last of the block", () => {
    wrapper = setUp({ hours: 4, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-hour-container"
    );
    expect(component.text()).toBe("RRRR");
  });

  test("renders OOOOOOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 2, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("OOOOOOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-0"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "none",
    });
  });

  test("renders YOOOOOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 6, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YOOOOOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-0"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYOOOOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 11, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYOOOOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-1"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYROOOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 18, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYROOOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-2"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders YYRYOOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 23, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYOOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-3"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYRYYOOOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 28, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYOOOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-4"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYRYYROOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 32, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYROOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-5"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders YYRYYRYOOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 35, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYRYOOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-6"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYRYYRYYOOO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 42, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYRYYOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-7"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYRYYRYYROO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 46, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYRYYROO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-8"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "red",
    });
  });

  test("renders YYRYYRYYRYO when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 51, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYRYYRYO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-9"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYRYYRYYRYY when the hous is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 55, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-minutes-container");
    expect(component.text()).toBe("YYRYYRYYRYY");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-5-minutes-container-children-10"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders OOOO when the minute is the first of the block and styled the light", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 40 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-minute-container"
    );
    expect(component.text()).toBe("OOOO");
    const containerChildrenZeroStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-0"
    );
    expect(containerChildrenZeroStyle.props().style).toStrictEqual({
      backgroundColor: "none",
    });
    const containerChildrenOneStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-1"
    );
    expect(containerChildrenOneStyle.props().style).toStrictEqual({
      backgroundColor: "none",
    });
    const containerChildrenTwoStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-2"
    );
    expect(containerChildrenTwoStyle.props().style).toStrictEqual({
      backgroundColor: "none",
    });
    const containerChildrenThreeStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-3"
    );
    expect(containerChildrenThreeStyle.props().style).toStrictEqual({
      backgroundColor: "none",
    });
  });

  test("renders YOOO when the minute is the second of the block and styled the light", () => {
    wrapper = setUp({ hours: 1, minutes: 1, seconds: 20 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-minute-container"
    );
    expect(component.text()).toBe("YOOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-0"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYOO when the minute is the third of the block and styled the light", () => {
    wrapper = setUp({ hours: 2, minutes: 2, seconds: 30 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-minute-container"
    );
    expect(component.text()).toBe("YYOO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-1"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYYO when the minute is the fourth of the block and styled the light", () => {
    wrapper = setUp({ hours: 3, minutes: 3, seconds: 50 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-minute-container"
    );
    expect(component.text()).toBe("YYYO");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-2"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });

  test("renders YYYY when the minute is the last of the block", () => {
    wrapper = setUp({ hours: 4, minutes: 4, seconds: 59 });
    const component = findByTestAttribute(
      wrapper,
      "clock-single-minute-container"
    );
    expect(component.text()).toBe("YYYY");
    const containerStyle = findByTestAttribute(
      wrapper,
      "clock-single-minute-container-children-3"
    );
    expect(containerStyle.props().style).toStrictEqual({
      backgroundColor: "yellow",
    });
  });
});
