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
  test("renders O when seconds are odd", () => {
    wrapper = setUp({ hours: 0, minutes: 0, seconds: 39 });
    const component = findByTestAttribute(wrapper, "clock-seconds");
    expect(component.text()).toBe("O");
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

  test("renders RRRR when the hours are beetwen 20-24 and styled the light", () => {
    wrapper = setUp({ hours: 23, minutes: 0, seconds: 0 });
    const component = findByTestAttribute(wrapper, "clock-5-hours-container");
    expect(component.text()).toBe("RRRR");
  });
});
