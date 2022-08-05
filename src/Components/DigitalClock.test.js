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
  test("renders without a error", () => {
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
});
